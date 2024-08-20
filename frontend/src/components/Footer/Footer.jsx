import React from "react";
import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="logo" src={assets.logo} alt="" />
          <p>
            We deliver the freshest and most delicious meals right to your
            doorstep. Place your food orders now and enjoy the taste of
            exquisite flavors with our fast and reliable delivery options. Every
            meal is carefully prepared just for you.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>05318587463</li>
            <li>semihcanbaz431043@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        © 2024 Semih Canbaz. Tıklaye.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
