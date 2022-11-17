import React from "react";

const Footer = () => {
  return (
    <div className="bg-cover bg-[url('/src/assets/images/footer.png')] h-[407px]">
      <footer className="p-10  text-accent">
        <div className="footer">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Emergency Checkup</a>
            <a className="link link-hover">Monthly Checkup</a>
            <a className="link link-hover">Weekly Checkup</a>
            <a className="link link-hover">Deep Checkup</a>
          </div>
          <div>
            <span className="footer-title">ORAL HEALTH</span>
            <a className="link link-hover">Fluoride Treatment</a>
            <a className="link link-hover">Cavity Filling</a>
            <a className="link link-hover">Teath Whitening</a>
          </div>
          <div>
            <span className="footer-title">OUR ADDRESS</span>
            <a className="link link-hover">New York - 101010 Hudson</a>
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
