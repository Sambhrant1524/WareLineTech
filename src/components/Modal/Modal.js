// components/Modal.js
"use client";
import { useState, useEffect } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Open modal on page load
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling when closed
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
    }
  }, [isOpen]);

  return (
    isOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
        <div className="relative bg-gradient-to-br from-violet-500 to-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
          {/* Large Cross Button Cutting Through Modal */}
          <button
            className="absolute -top-5 -right-5 bg-white text-gray-700 hover:text-red-600 w-10 h-10 flex items-center justify-center rounded-full shadow-lg border-2 border-gray-300 text-2xl"
            onClick={closeModal}
          >
            ✖
          </button>

          <h2 className="text-xl font-semibold text-gray-800">Got an Idea for a Project?</h2>
          <p className="mt-2 text-gray-700">
            Call us, and we’ll make your app a reality!
          </p>

          {/* Call Button */}
          <a
            href="tel:+1234567890"
            className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            📞 Call Us: +91 9090989877
          </a>
        </div>
      </div>
    )
  );
};

export default Modal;
