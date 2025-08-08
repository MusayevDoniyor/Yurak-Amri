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
        <div className="flex items-center justify-between h-20 lg:h-24">
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
              {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div> */}
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

          {/* Enhanced Desktop Navigation */}
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
                  className={`text-sm font-semibold transition-all duration-300 hover:text-red-600 cursor-pointer ${
                    isScrolled
                      ? "text-gray-700 hover:text-gray-900"
                      : "text-gray-700 hover:text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>

                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                />
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
                className="flex items-center justify-center gap-2"
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
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Enhanced Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-6 space-y-3 border-t border-gray-200/50 bg-white/95 backdrop-blur-sm">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  className="block w-full text-left px-6 py-4 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 20 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="px-6 pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-red-600 text-white rounded-2xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg"
              >
                <Link
                  href="#donation"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <Heart className="w-5 h-5" />
                  Yordam berish
                </Link>
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
