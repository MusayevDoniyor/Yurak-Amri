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
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-18 md:h-20">
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
                width={60}
                height={60}
                className="bg-transparent"
              />
            </motion.div>

            <div className="flex-col flex md:hidden xl:flex">
              <span
                className={`font-bold text-2xl transition-colors duration-300 ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                Yurak Amri
              </span>
              <span
                className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? "text-gray-500" : "text-gray-300"
                }`}
              >
                Xayriya Fondi
              </span>
            </div>
          </motion.div>

          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center gap-4 xl:gap-8"
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
                  className={`relative text-sm font-semibold transition-all duration-300 cursor-pointer px-2 py-2 rounded-lg hover:scale-105 ${
                    isScrolled
                      ? "text-gray-700 hover:text-red-600"
                      : "text-white hover:text-red-400"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Enhanced CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hidden md:block"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-sm ${
                isScrolled
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-white text-gray-900 hover:bg-gray-100"
              }`}
            >
              <Link
                href="#donation"
                className="flex items-center justify-center gap-2 focus:outline-none focus:ring-0"
              >
                <Heart className="w-4 h-4" />
                <span className="hidden xl:inline">Yordam berish</span>
                <span className="xl:hidden">Yordam</span>
              </Link>
            </motion.button>
          </motion.div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-3 rounded-xl transition-all duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                : "text-white hover:bg-white/10 hover:text-white"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden fixed inset-0 z-[9999] ${
            isOpen ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal Content */}
          <motion.div
            className={`absolute top-0 right-0 h-full w-full max-w-sm flex flex-col ${
              isScrolled
                ? "bg-white/95 backdrop-blur-xl"
                : "bg-gradient-to-b from-gray-900/95 to-black/95 backdrop-blur-xl"
            }`}
            initial={{ x: "100%" }}
            animate={{ x: isOpen ? 0 : "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Header Section */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-4">
                <Image
                  src="/yurak_amri.png"
                  alt="Yurak Amri"
                  width={40}
                  height={40}
                  className="bg-transparent"
                />
                <div className="flex flex-col">
                  <span
                    className={`font-bold text-xl ${
                      isScrolled ? "text-gray-900" : "text-white"
                    }`}
                  >
                    Yurak Amri
                  </span>
                  <span
                    className={`text-xs font-medium ${
                      isScrolled ? "text-gray-500" : "text-gray-300"
                    }`}
                  >
                    Xayriya Fondi
                  </span>
                </div>
              </div>

              {/* Close Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 px-6 py-8 space-y-2 overflow-y-auto">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: isOpen ? 1 : 0,
                    x: isOpen ? 0 : 50,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.1 + index * 0.1,
                    ease: "easeOut",
                  }}
                  className="relative overflow-hidden"
                >
                  <Link
                    href={item.href}
                    className={`relative block w-full text-left px-6 py-4 rounded-2xl transition-all duration-300 font-semibold group ${
                      isScrolled
                        ? "text-gray-700 hover:text-red-600 hover:bg-red-50"
                        : "text-gray-200 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {/* Background Animation */}
                    <motion.div
                      className={`absolute inset-0 rounded-2xl ${
                        isScrolled
                          ? "bg-gradient-to-r from-red-50 to-red-100"
                          : "bg-gradient-to-r from-white/10 to-white/5"
                      }`}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-between">
                      <span className="text-lg">{item.name}</span>
                      <motion.div
                        className={`w-2 h-2 rounded-full ${
                          isScrolled ? "bg-red-500" : "bg-red-400"
                        } opacity-0 group-hover:opacity-100`}
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="p-6 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{
                  opacity: isOpen ? 1 : 0,
                  y: isOpen ? 0 : 30,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  ease: "easeOut",
                }}
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-500/25 hover:shadow-red-500/40"
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
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
}
