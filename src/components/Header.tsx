"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Bosh sahifa", href: "#hero" },
  { name: "Videolar", href: "#video-photo" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Statistika", href: "#statistics" },
  { name: "Fikrlar", href: "#testimonials" },
  { name: "Yordam", href: "#donation" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-200/50"
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 lg:h-20">
          {/* Enhanced Logo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05 }} className="relative">
              <Image
                src="/yurak_amri.png"
                alt="Yurak Amri"
                width={50}
                height={50}
                className="bg-transparent"
              />
            </motion.div>
            <div className="flex flex-col">
              <span
                className={`font-bold text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-gray-800"
                }`}
              >
                Yurak Amri
              </span>
              <span className="text-xs text-gray-500 font-medium">
                Xayriya Fondi
              </span>
            </div>
          </motion.div>

          {/* Enhanced Desktop Navigation with Sliding Underline */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:flex items-center gap-10"
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  className={`relative text-sm font-semibold transition-all duration-300 hover:text-red-600 cursor-pointer focus:outline-none focus:ring-0 px-2 py-1 ${
                    isScrolled
                      ? "text-gray-700 hover:text-red-600"
                      : "text-gray-700 hover:text-red-600"
                  }`}
                >
                  {item.name}

                  {/* Sliding Underline Animation */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                    initial={{ width: 0, x: -10 }}
                    whileHover={{
                      width: "100%",
                      x: 0,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut",
                        width: { delay: 0.1 },
                      },
                    }}
                    transition={{
                      duration: 0.3,
                      ease: "easeOut",
                    }}
                  />

                  {/* Hover Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-red-50 rounded-lg -z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden lg:block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl ${
                isScrolled
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              <Link
                href="#donation"
                className="flex items-center justify-center gap-2 focus:outline-none focus:ring-0"
              >
                <Heart className="w-5 h-5" />
                Yordam berish
              </Link>
            </motion.button>
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            }`}
          >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation Modal */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <motion.div
            className="py-8 space-y-2 border-t border-gray-200/50 bg-white/95 backdrop-blur-sm rounded-b-3xl shadow-xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{
              y: isOpen ? 0 : -20,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -30 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : -30,
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                className="relative overflow-hidden"
              >
                <Link
                  href={item.href}
                  className="relative block w-full text-left px-8 py-4 text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-2xl transition-all duration-300 font-medium group"
                  onClick={() => setIsOpen(false)}
                >
                  {/* Mobile Sliding Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-50 to-transparent rounded-2xl"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Mobile Sliding Underline */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-500 to-red-600 rounded-full"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />

                  <span className="relative z-10 flex items-center justify-between">
                    {item.name}
                    <motion.div
                      className="w-2 h-2 bg-red-500 rounded-full opacity-0 group-hover:opacity-100"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.2 }}
                    />
                  </span>
                </Link>
              </motion.div>
            ))}

            {/* Enhanced Mobile CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: isOpen ? 1 : 0,
                y: isOpen ? 0 : 20,
              }}
              transition={{
                duration: 0.4,
                delay: 0.8,
                type: "spring",
                stiffness: 200,
              }}
              className="px-8 pt-6"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg"
              >
                <Link
                  href="#donation"
                  className="flex items-center justify-center gap-2 focus:outline-none focus:ring-0"
                  onClick={() => setIsOpen(false)}
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Heart className="w-5 h-5" />
                  </motion.div>
                  Yordam berish
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
