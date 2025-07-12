import React from "react";
import { FaInstagram, FaEnvelope, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6 px-5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="mb-2 md:mb-0 font-semibold">🔑 KEY TO KEYS</div>
        <div>Copyright © {new Date().getFullYear()} Keys to Keys, all rights reserved</div>
        <div className="flex gap-4 mt-2 md:mt-0">
          <FaInstagram className="hover:text-black" />
          <FaEnvelope className="hover:text-black" />
          <FaYoutube className="hover:text-black" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
