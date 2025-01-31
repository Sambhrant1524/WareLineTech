import React from "react";
import { MdEmail, MdPhone, MdAccessTime } from "react-icons/md";

const TopBar = () => {
  return (
    <div className="bg-black text-white py-2 px-4 flex justify-between items-center text-sm fixed top-0 left-0 w-full z-50">
      <div className="flex items-center gap-6">
        <span className="flex items-center">
          <MdEmail className="mr-1" />
          <a href="mailto:Skillshareindia00@gmail.com">Skillshareindia00@gmail.com</a>
        </span>
        <span className="flex items-center">
          <MdPhone className="mr-1" />
          <a href="tel:+918700630842">+91 87006 30842</a>
        </span>
      </div>
      <span className="flex items-center">
        <MdAccessTime className="mr-1" /> Mon - Sat: 10 AM - 6 PM
      </span>
    </div>
  );
};

export default TopBar;
