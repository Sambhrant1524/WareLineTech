import React from "react";

const TopBar = () => {
  return (
    <div className="w-full bg-black text-white text-center py-2 text-sm font-medium fixed top-0 z-50">
      📞 <a href="tel:+91 9090989877" className=" hover:text-gray-200">
        Contact Us: +91 9090989877
      </a>
    </div>
  );
};

export default TopBar;
