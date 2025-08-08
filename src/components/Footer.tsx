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
  ArrowRight,
  Shield,
  Users,
  Award,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto py-20">
          {/* Enhanced Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-20">
            {/* Enhanced Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <motion.div whileHover={{ scale: 1.05 }} className="relative">
                  <Image
                    src="/yurak_amri.png"
                    alt="Yurak Amri"
                    width={80}
                    height={80}
                    className="rounded-full shadow-lg"
                  />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></div>
                </motion.div>
                <div>
                  <div className="font-bold text-3xl text-white mb-1">
                    Yurak Amri
                  </div>
                  <div className="text-gray-300 text-sm font-medium">
                    Xayriya Fondi
                  </div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light">
                &ldquo;Bir yurakdan - ming yurakka nur!&rdquo;
                O&apos;zbekistonning har bir chekkasida bir oila sizning
                e&apos;tiboringizni kutmoqda. Bizning maqsadimiz - har bir
                oilaga umid va yordam yetkazish.
              </p>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    5,000+
                  </div>
                  <div className="text-sm text-gray-400">
                    Yordam berilgan oila
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-gray-400">Shaffoflik</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">
                    5 yil
                  </div>
                  <div className="text-sm text-gray-400">Tajriba</div>
                </div>
              </div>

              {/* Enhanced Social Links */}
              <div className="flex items-center gap-4">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 border border-white/20"
                >
                  <Facebook className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 border border-white/20"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 border border-white/20"
                >
                  <Send className="w-5 h-5" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white hover:bg-red-600 transition-all duration-300 border border-white/20"
                >
                  <Youtube className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Enhanced Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-white mb-8">
                Aloqa ma&apos;lumotlari
              </h4>
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white group-hover:bg-red-600 transition-all duration-300">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      +998 71 123 45 67
                    </div>
                    <div className="text-gray-400 text-sm">
                      24/7 qo&apos;llab-quvvatlash
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white group-hover:bg-red-600 transition-all duration-300">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      info@yurakamri.uz
                    </div>
                    <div className="text-gray-400 text-sm">Elektron pochta</div>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white group-hover:bg-red-600 transition-all duration-300">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">
                      Toshkent, O&apos;zbekiston
                    </div>
                    <div className="text-gray-400 text-sm">Asosiy ofis</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-white mb-8">
                Tezkor havolalar
              </h4>
              <div className="space-y-4">
                <motion.a
                  href="#hero"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Bosh sahifa
                </motion.a>
                <motion.a
                  href="#donation"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Yordam berish
                </motion.a>
                <motion.a
                  href="#testimonials"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Hikoyalar
                </motion.a>
                <motion.a
                  href="#statistics"
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  Statistika
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm rounded-3xl p-12 mb-20 border border-white/10"
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-white mb-4">
                Yangiliklarga obuna bo&apos;ling
              </h3>
              <p className="text-gray-300 mb-10 max-w-2xl mx-auto text-lg">
                Yurak Amri faoliyati, yangi loyihalar va yordam imkoniyatlari
                haqida birinchilardan bo&apos;lib xabardor bo&apos;ling.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Email manzilingiz"
                  className="flex-1 px-6 py-4 rounded-2xl border border-white/20 focus:border-red-500 focus:ring-4 focus:ring-red-500/20 outline-none bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 cursor-text"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-red-600 text-white px-8 py-4 rounded-2xl hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg cursor-pointer"
                >
                  Obuna bo&apos;lish
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Enhanced Bottom Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="text-gray-400 flex items-center gap-3">
              <Heart className="w-5 h-5 text-red-400" />
              <span>&copy; 2025 Yurak Amri. Barcha huquqlar himoyalangan.</span>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">Xavfsiz</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Users className="w-4 h-4" />
                <span className="text-sm">Ishonchli</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-4 h-4" />
                <span className="text-sm">Sertifikatlangan</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
