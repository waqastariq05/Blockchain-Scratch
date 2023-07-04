import React from "react";
import "../Footer/Footer.css";
import logo from "../../Image/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer pad-56">
        <div className="top d-flex align-items-center">
          <img src={logo} alt="logo" className="logo img-fluid me-2" />
          <Link className="navbar-brand" to="/">
            BLock<span>chain</span>
          </Link>
        </div>
        <div className="middle">
          <span>
            <p>
              Mining a blockchain, and earn bitcoin on a platform trusted by
              millions.
            </p>
          </span>
          <p>
            <i className="fa-solid fa-envelope"></i> blockchain@gmail.com
          </p>
          <p>
            <i className="fa-solid fa-phone"></i> +92 283 978927
          </p>
          <div className="social-icon">
            <div>
              <i className="fa-brands fa-facebook-f"></i>
            </div>
            <div>
              <i className="fa-brands fa-instagram"></i>
            </div>
            <div>
              <i className="fa-brands fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          Copyright <span>©</span> 2023. Block<span>chain</span>. All rights
          reserved.
        </p>
        <div className="last">
          <p className="">Privay Policy</p>
          <p>terms & conditions</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
