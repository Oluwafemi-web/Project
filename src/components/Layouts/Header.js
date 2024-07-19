import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container, Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchModal from "./Home/SearchModal";
import ProductContext from "../../store/product-context";

import Gabinoisl from "../../images/gabinoisl-logo.png";

const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const { cartData } = useContext(ProductContext);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const searchHandler = (e) => {
    e.preventDefault();
    handleShow();
  };

  useEffect(() => {
    setCartItemCount(cartData.length);
  }, [cartData]);

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container style={{ maxWidth: "100%", backgroundColor: "black" }}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="bg-light" />
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
                exact
                className="nav-link"
                style={{ color: "white" }}
                state={{ value: "type" }}
              >
                Chandeliers
              </NavLink>

              <NavLink
                to="/shop/pendant lighting"
                exact
                className="nav-link"
                style={{ color: "white" }}
                state={{ value: "type" }}
              >
                Pendant Lights
              </NavLink>

              <NavLink
                to="/shop/sockets & switches"
                exact
                className="nav-link"
                style={{ color: "white" }}
                state={{ value: "type" }}
              >
                Sockets & Switches
              </NavLink>

              <NavLink
                to="/shop/lamp"
                exact
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
              exact
              className="nav-link"
              style={{ color: "white", fontSize: "1.2rem", }}
            >
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </NavLink>
            <NavLink
              to="/cart"
              exact
              className="nav-link"
              style={{ 
                color: "white", 
                fontSize: "1.2rem", 
                display: "flex",
                alignItems: "center",
                position: "relative",
              }}
            >
              <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
              <Badge 
                pill bg="danger" 
                id="cart-badge"
                style={{
                  position: "absolute",
                  top: "-1px",
                  right: "-0.5rem"
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
