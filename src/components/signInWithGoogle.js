import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth, db } from "./firebase";
import { toast } from "react-toastify";
import { setDoc, doc } from "firebase/firestore";
import google from "../images/google.png";

function SignInwithGoogle() {
  function googleLogin(e) {
    e.preventDefault();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider).then(async (result) => {
      console.log(result);
      const user = result.user;
      if (result.user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: user.displayName,
          photo: user.photoURL,
          lastName: "",
        });
        toast.success("User logged in Successfully", {
          position: "top-center",
        });
        window.location.href = "/";
      }
    });
  }
  return (
    <div>
      <p className="continue-p">Or continue with</p>
      <button className="google-button" onClick={googleLogin}>
        <img src={google} width={"7%"} />
        <span>Sign in with Google</span>
      </button>
    </div>
  );
}
export default SignInwithGoogle;
