import { useEffect } from "react";
import app from "./firebase";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import logo from "../images/gabinoisl-logo.png";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
export default function Login() {
  useEffect(() => {
    const ui =
      firebaseui.auth.AuthUI.getInstance() ||
      new firebaseui.auth.AuthUI(getAuth(app));
    ui.start("#firebaseui-auth-container", {
      signInSuccessUrl: "/",
      signInOptions: [
        {
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
        },
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          clientId:
            "444013301934-0u3asfnd290n013i54lf1p9oiv0p2qg0.apps.googleusercontent.com",
        },
      ],
      credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
      // Other config options...
    });
  }, []);
  return (
    <div id="firebaseui-auth-container">
      <img src={logo} />
      <h3>Welcome to Gabinoisl</h3>
      <p>Type your email to log in or create an account</p>
    </div>
  );
}
