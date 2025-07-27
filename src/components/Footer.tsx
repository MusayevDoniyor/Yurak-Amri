"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-gray-900 via-neutral-gray-800 to-neutral-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FF6B35' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-3 mb-8">
              <Image
                src="/yurak_amri.png"
                alt="Yurak Amri Logo"
                width={80}
                height={80}
                className="inline-block w-20 h-20 rounded-full shadow-lg p-3"
              />
              <div>
                <h2 className="text-3xl font-bold text-white">YURAK AMRI</h2>
                <p className="text-[#FF6B35] text-sm font-medium">
                  XAYRIYA FONDI
                </p>
              </div>
            </div>

            <div className="bg-neutral-gray-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-neutral-gray-700">
              <p className="text-neutral-gray-300 leading-relaxed text-lg">
                "Bir yurakdan - ming yurakka nur!" - O&apos;zbekistonning har
                bir chekkasida bir oila sizning e&apos;tiboringizni kutmoqda.
                Yurak Amri bilan siz bevosita o&apos;zgarish yasay olasiz.
              </p>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#FF6B35] p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#FF6B35] p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#FF6B35] p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] hover:from-[#E55A2B] hover:to-[#FF6B35] p-3 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-neutral-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-neutral-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-2">
                <div className="w-2 h-2 bg-[#FF6B35] rounded-full"></div>
                Aloqa ma'lumotlari
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 p-4 bg-neutral-gray-800/50 rounded-xl hover:bg-neutral-gray-700/50 transition-colors">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] p-3 rounded-full">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      +998 71 123 45 67
                    </div>
                    <div className="text-sm text-neutral-gray-400">
                      24/7 qo'llab-quvvatlash
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-neutral-gray-800/50 rounded-xl hover:bg-neutral-gray-700/50 transition-colors">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] p-3 rounded-full">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      info@yurakamri.uz
                    </div>
                    <div className="text-sm text-neutral-gray-400">
                      Elektron pochta
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-neutral-gray-800/50 rounded-xl hover:bg-neutral-gray-700/50 transition-colors">
                  <div className="bg-gradient-to-r from-[#FF6B35] to-[#E55A2B] p-3 rounded-full">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Toshkent shahri
                    </div>
                    <div className="text-sm text-neutral-gray-400">
                      O'zbekiston
                    </div>
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
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-neutral-gray-700 mt-14 pt-7"
        >
          <div className="text-center">
            <div className="bg-neutral-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-neutral-gray-700">
              <div className="text-neutral-gray-300 text-sm">
                © 2024 Yurak Amri. Barcha huquqlar himoyalangan.
              </div>
              <div className="text-[#FF6B35] text-xs mt-1">
                "Bir yurakdan - ming yurakka nur!"
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
