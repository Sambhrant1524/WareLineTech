"use client";
import { useState, useRef, useEffect } from "react";
import { FaWhatsapp, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const chatRef = useRef(null);

  // Function to handle outside clicks
  useEffect(() => {
    function handleClickOutside(event) {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener when menu is open
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div ref={chatRef} className="fixed bottom-6 right-6 flex flex-col items-end space-y-2">
      {isOpen && (
        <div className="flex flex-col space-y-2 mb-2">
          <a
            href="mailto:info@warelinetech.com"
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition"
          >
            <FaEnvelope className="text-lg" />
            <span>Mail</span>
          </a>
          <a
            href="tel:+91 9090989877"
            className="flex items-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-600 transition"
          >
            <FaPhone className="text-lg" />
            <span>Call</span>
          </a>
          <a
            href="https://wa.me/9090989877"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-800 transition"
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </a>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-800 text-white p-4 lg:p-8 rounded-full shadow-lg hover:bg-blue-700 transition"
      >
        <FaCommentDots className="text-4xl" />
      </button>
    </div>
  );
}
