import React from "react";
import XImg from "../assets/ex.png";
import FbImg from "../assets/fb.png";
import LinkImg from "../assets/link.png";
import MailImg from "../assets/mail.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-[1200px] mx-auto text-[#A1A1AA] flex flex-col md:flex-row sm:items-center sm:text-center justify-between py-12">
        <div className="w-1/4">
          <h1 className="text-white text-2xl font-semibold mb-3">
            CS — Ticket System
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h1 className="text-white text-2xl font-normal mb-3">Company</h1>
          <div className="leading-10 text-xl">
            <p>About Us</p>
            <p>Our Mission</p>
            <p>Contact Sales</p>
          </div>
        </div>
        <div>
          <h1 className=" text-white text-2xl font-normal mb-3">Services</h1>
          <div className="leading-10 text-xl">
            <p>Products & Services</p>
            <p>Customer Stories</p>
            <p>Download Apps</p>
          </div>
        </div>
        <div>
          <h1 className="text-white text-2xl font-normal mb-3">Information</h1>
          <div className="leading-10 text-xl">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
            <p>Join Us</p>
          </div>
        </div>
        <div>
          <h1 className="text-white text-2xl font-normal mb-3">Social Links</h1>
          <div className="leading-10 text-xl">
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={XImg} />
              <p>@CS — Ticket System</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={FbImg} />
              <p>@CS — Ticket System</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={LinkImg} />
              <p>@CS — Ticket System</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-6 h-6" src={MailImg} />
              <p>support@cst.</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="max-w-[1200px] mx-auto" />
      <div>
        <p className="max-w-[1200px] mx-auto text-center p-4 text-[#A1A1AA] text-xl">
          © 2025 CS — Ticket System. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
