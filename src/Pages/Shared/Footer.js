import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-cover bg-[url('/src/assets/images/footer.png')] h-[407px]">
      <footer className="p-10  text-accent">
        <div className="footer">
          <div>
            <span className="footer-title">Services</span>
            <Link className="link link-hover">Emergency Checkup</Link>
            <Link className="link link-hover">Monthly Checkup</Link>
            <Link className="link link-hover">Weekly Checkup</Link>
            <Link className="link link-hover">Deep Checkup</Link>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <Link className="link link-hover">Fluoride Treatment</Link>
            <Link className="link link-hover">Cavity Filling</Link>
            <Link className="link link-hover">Teath Whitening</Link>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <Link className="link link-hover">New York - 101010 Hudson</Link>
          </div>

          <div>
            <span className="footer-title">DEVELOPERS</span>
            <Link to="/developer" className="link link-hover">
              Developed by Omar Faruq
            </Link>
          </div>
        </div>
        <div className=" p-4 text-center">
          <p>Copyright © 2022 - All right reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
