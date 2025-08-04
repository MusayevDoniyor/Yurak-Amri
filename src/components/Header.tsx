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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-3"
          >
            <Image
              src="/yurak_amri.webp"
              alt="Yurak Amri"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span
              className={`font-bold text-xl transition-colors duration-300 ${
                isScrolled ? "text-gray-900" : "text-[#2f2f2f]"
              }`}
            >
              Yurak Amri
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex items-center gap-8"
          >
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className={`text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-[#2f2f2f] hover:text-gray-900"
                }`}
              >
                <Link href={item.href}>{item.name}</Link>{" "}
              </motion.button>
            ))}
          </motion.nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="hidden lg:block"
          >
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 hover:scale-105 cursor-pointer ${
                isScrolled
                  ? "bg-gray-900 text-white hover:bg-gray-800"
                  : "bg-[#2f2f2f] text-white hover:bg-gray-800"
              }`}
            >
              <Link
                href="#donation"
                className="flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4" />
                Yordam berish
              </Link>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-[#2f2f2f] hover:bg-gray-100"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isOpen ? 1 : 0,
            height: isOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2 border-t border-gray-200">
            {navigation.map((item) => (
              <button
                key={item.name}
                className="block w-full text-left px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-200"
              >
                <Link href={item.href}>{item.name}</Link>{" "}
              </button>
            ))}

            <div className="px-4 pt-2">
              <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200">
                <Link
                  href="#donation"
                  className="flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Yordam berish
                </Link>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
