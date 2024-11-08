import { useState, useEffect, useContext } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Nav, Navbar, Container, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoIosArrowDown } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import SearchModal from "./Home/SearchModal";
import ProductContext from "../../store/product-context";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Gabinoisl from "../../images/gabinoisl-logo.png";

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const { cartData } = useContext(ProductContext);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);
  const location = useLocation();
  const toggleSubMenu = () => {
    setIsSubMenuVisible(!isSubMenuVisible);
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const user = auth.currentUser;
  const searchHandler = (e) => {
    e.preventDefault();
    handleShow();
  };
  useEffect(() => {
    setIsSubMenuVisible(false);
  }, [location]);
  useEffect(() => {
    setCartItemCount(cartData.length);
  }, [cartData]);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  const handleClick = () => {
    if (user) {
      handleLogout();
    }
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container style={{ maxWidth: "100%", backgroundColor: "black" }}>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="bg-light"
          />
          <Navbar.Brand href="/" style={{ width: "12rem" }}>
            <img
              src={Gabinoisl}
              className="d-inline-block align-top"
              alt="Gabinoisl logo"
              style={{ width: "100%" }}
            />
          </Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav
              className="me-auto"
              style={{ width: "100%", justifyContent: "space-evenly" }}
            >
              <NavLink
                to="/shop/chandelier"
                exact="true"
                className="nav-link"
                style={{ color: "white" }}
                state={{ value: "type" }}
              >
                Chandeliers
              </NavLink>

              <NavLink
                to="/shop/pendant lighting"
                exact="true"
                className="nav-link"
                style={{ color: "white" }}
                state={{ value: "type" }}
              >
                Pendant Lights
              </NavLink>

              <NavLink
                to="/shop/sockets & switches"
                exact="true"
                className="nav-link"
                style={{ color: "white" }}
                state={{ value: "type" }}
              >
                Sockets & Switches
              </NavLink>

              <NavLink
                to="/shop/lamp"
                exact="true"
                className="nav-link"
                style={{ color: "white" }}
                state={{ value: "type" }}
              >
                Lamps
              </NavLink>
            </Nav>
          </Navbar.Collapse>
          <Nav style={{ flexDirection: "row", gap: "1rem" }}>
            <NavLink
              onClick={searchHandler}
              exact="true"
              className="nav-link"
              style={{ color: "white", fontSize: "1.2rem" }}
            >
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </NavLink>
            <ul className="account-parent">
              <li>
                <NavLink
                  to=""
                  exact="true"
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleSubMenu();
                  }}
                >
                  <FaUser />
                  <IoIosArrowDown />
                </NavLink>
                <ul
                  className={`account-sub ${isSubMenuVisible ? "visible" : ""}`}
                >
                  <li>
                    <a>
                      {" "}
                      <FaUser /> My Account
                    </a>
                  </li>
                  <li>
                    <Link to={user ? "#" : "/login"} onClick={handleClick}>
                      {" "}
                      {user ? <FaSignInAlt /> : <FaSignOutAlt />}
                      {user ? "Sign out" : "Sign In"}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>

            <NavLink to="/cart" exact="true" className="nav-link">
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              <Badge
                pill
                bg="danger"
                id="cart-badge"
                style={{
                  position: "absolute",
                  top: "-1px",
                  right: "-0.5rem",
                }}
              >
                {cartItemCount}
              </Badge>
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
      <SearchModal handleClose={handleClose} show={show} />
    </header>
  );
};

export default Header;
