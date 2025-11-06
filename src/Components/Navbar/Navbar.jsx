import React from "react";

const Navbar = () => {
  return (
    <div className="navbar max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="">
        <h1 className="text-3xl font-bold">CS — Ticket System</h1>
      </div>
      <div className="flex flex-col md:flex-row sm:mt-4 items-center gap-5">
        <ul className="flex flex-col md:flex-row gap-5 font-normal text-xl">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Changelog</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
          <li>
            <a href="">Download</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <button className="btn font-medium bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg">
          + New Ticket
        </button>
      </div>
    </div>
  );
};

export default Navbar;
