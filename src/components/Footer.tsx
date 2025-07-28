"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Send,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-navy-dark via-navy-medium to-background overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-gradient-secondary" />
                <h3 className="text-3xl font-black text-gradient-primary">
                  Yurak Amri
                </h3>
              </div>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                &ldquo;Bir yurakdan - ming yurakka nur!&rdquo;
                O&apos;zbekistonning har bir chekkasida bir oila sizning
                e&apos;tiboringizni kutmoqda.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-navy rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-navy"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-secondary rounded-full flex items-center justify-center text-navy-dark hover:scale-110 transition-transform duration-300 shadow-gold"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-navy-dark hover:scale-110 transition-transform duration-300 shadow-gold"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-navy rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 shadow-navy"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-xl font-bold text-white mb-6">
                Tezkor Havolalar
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-gradient-secondary transition-colors duration-300"
                  >
                    Asosiy sahifa
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-gradient-secondary transition-colors duration-300"
                  >
                    Biz haqida
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-gradient-secondary transition-colors duration-300"
                  >
                    Loyihalar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-gradient-secondary transition-colors duration-300"
                  >
                    Hikoyalar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-text-secondary hover:text-gradient-secondary transition-colors duration-300"
                  >
                    Yordam berish
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-xl font-bold text-white mb-6">
                Aloqa ma&apos;lumotlari
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-navy rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      +998 71 123 45 67
                    </div>
                    <div className="text-text-secondary text-sm">
                      24/7 qo&apos;llab-quvvatlash
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-navy-dark" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      info@yurakamri.uz
                    </div>
                    <div className="text-text-secondary text-sm">
                      Elektron pochta
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-accent rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-navy-dark" />
                  </div>
                  <div>
                    <div className="text-white font-medium">
                      Toshkent, O&apos;zbekiston
                    </div>
                    <div className="text-text-secondary text-sm">
                      Asosiy ofis
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="pt-8 border-t border-navy-light"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-text-secondary text-center md:text-left">
                <p>&copy; 2024 Yurak Amri. Barcha huquqlar himoyalangan.</p>
                <p className="text-sm mt-2">
                  O&apos;zbekiston Respublikasi xayriya fondi
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-text-secondary hover:text-gradient-secondary transition-colors duration-300"
                >
                  Maxfiylik siyosati
                </a>
                <a
                  href="#"
                  className="text-text-secondary hover:text-gradient-secondary transition-colors duration-300"
                >
                  Foydalanish shartlari
                </a>
                <a
                  href="#"
                  className="text-text-secondary hover:text-gradient-secondary transition-colors duration-300"
                >
                  Cookie siyosati
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
