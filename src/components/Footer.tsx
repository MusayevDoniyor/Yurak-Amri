"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Send,
  Youtube,
  Heart,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/yurak_amri.webp"
                  alt="Yurak Amri"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="font-bold text-2xl text-gray-900">
                  Yurak Amri
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                &ldquo;Bir yurakdan - ming yurakka nur!&rdquo;
                O&apos;zbekistonning har bir chekkasida bir oila sizning
                e&apos;tiboringizni kutmoqda.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Aloqa ma&apos;lumotlari
              </h4>
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-900">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">
                      +998 71 123 45 67
                    </div>
                    <div className="text-gray-600 text-sm">
                      24/7 qo&apos;llab-quvvatlash
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-900">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">
                      info@yurakamri.uz
                    </div>
                    <div className="text-gray-600 text-sm">Elektron pochta</div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center text-gray-900">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-gray-900 font-medium">
                      Toshkent, O&apos;zbekiston
                    </div>
                    <div className="text-gray-600 text-sm">Asosiy ofis</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8 mb-16 border border-gray-200"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Yangiliklarga obuna bo&apos;ling
              </h3>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Yurak Amri faoliyati, yangi loyihalar va yordam imkoniyatlari
                haqida birinchilardan bo&apos;lib xabardor bo&apos;ling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-200 outline-none bg-white"
                />
                <button className="bg-gray-900 text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors font-medium">
                  Obuna bo&apos;lish
                </button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-8 border-t border-gray-200"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-gray-600 flex items-center gap-2">
                <Heart className="w-4 h-4 text-gray-400" />
                &copy; 2025 Yurak Amri. Barcha huquqlar himoyalangan.
              </div>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Maxfiylik siyosati
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  Foydalanish shartlari
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
