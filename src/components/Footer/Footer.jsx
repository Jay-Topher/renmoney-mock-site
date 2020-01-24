import React from "react";
import './Footer.scss'

const Footer = () => {
  return (
    <footer className="footer col-9">
      <div className="footer_row1">
        <div className="copyright">
          &copy; 2020 Renmoney. All Rights Reserved.
        </div>
        <div className="footerLinks">
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">FAQ</a>
          <a href="#">hello@renmoney.com</a>
          <a href="#">Telephone: 07005000500</a>
        </div>
        <a className="socials">
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
        </a>
      </div>
      <div className="footer_row2">
        <a href="#">Agent Verification</a>
        <p><span className="b-3">Representative example:</span> Loan amount of ₦2,000,000 borrowed for 12 months. Interest Rate: 35.76%. Total amount payable: ₦2,715,200.</p>
        <p><span className="b-3">Maximum Annual Percentage Rate (APR):</span> 35.76%. No other fees. Loan tenure: 3 – 24 months.</p>
      </div>
      <div className="footer_row3">
        <a href="#">Privacy Policy</a>
        <span className="space">&nbsp;</span>
        <a href="#">Terms and conditions</a>
      </div>
    </footer>
  );
};

export default Footer;
