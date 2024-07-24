import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div>
        <h5>COMPANY</h5>
        <ul>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>HELP & SUPPORT</h5>
        <ul>
          <li>
            <Link to="pages/help-center">Help Center</Link>
          </li>
          <li>
            <Link to="pages/faq">FAQ</Link>
          </li>
        </ul>
      </div>
      <div>
        <h5>CUSTOMER SERVICE</h5>
        <ul>
          <li>
            <a href="tel:+2349160000789">Mobile Support: +234-916-000-0789</a>
          </li>
          <li>Hours: 9:00 AM - 6:00 PM WAT</li>
          <li>
            <a href="mailto:gabinoisl01@gmail.com ">
              Email Support: admin@gabinoisl.com
            </a>
          </li>
          <li>Response within 24 hours</li>
          <li>
            <a href="/">
              Address: 4 Badaru Street, Off Adegoke, Surulere, Lagos
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h5>FOLLOW US</h5>
        <div className="icons">
          <a
            href="https://www.facebook.com/Gabinoisltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab">
                <FaFacebook />
              </span>
            </div>
            <div className="social-text">Facebook</div>
          </a>
          <a
            href="https://twitter.com/gabinoisl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab">
                <FaXTwitter />
              </span>
            </div>
            <div className="social-text">Twitter</div>
          </a>
          <a
            href="https://www.instagram.com/gabino.isl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab">
                <FaInstagram />
              </span>
            </div>
            <div className="social-text">instagram</div>
          </a>
          <a
            href="https://api.whatsapp.com/message/P7IGH7JW3Y6WO1?autoload=1&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white mx-3"
          >
            <div className="layer">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span className="fab">
                <FaWhatsapp />
              </span>
            </div>
            <div className="social-text">Whatsapp</div>
          </a>
        </div>
      </div>
      <div>
        <hr />
        <p>© 2022-2023, Gabinoisl</p>
      </div>
    </footer>
  );
};

export default Footer;
