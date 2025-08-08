"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function FloatingDonateButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
      setIsScrolled(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToDonation = () => {
    const donationSection = document.getElementById("donation");
    if (donationSection) {
      donationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex flex-col gap-3 md:gap-4">
          {/* Scroll to Top Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 md:w-14 md:h-14 bg-gray-800 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-gray-700 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm cursor-pointer"
            aria-label="Yuqoriga qaytish"
          >
            <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Donate Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToDonation}
            className="w-14 h-14 md:w-16 md:h-16 bg-red-600 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-red-700 transition-all duration-300 border-2 border-white/20 backdrop-blur-sm relative group cursor-pointer"
            aria-label="Yordam berish"
          >
            <Heart className="w-6 h-6 md:w-7 md:h-7" />

            {/* Pulse Animation */}
            <motion.div
              className="absolute inset-0 bg-red-600 rounded-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Tooltip - Hidden on mobile */}
            <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:block">
              Yordam berish
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
}
