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
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-card to-primary/5 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      {/* Newsletter Section */}
      {/* <div className="bg-primary/10 py-12 border-b border-primary/10 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-text-primary mb-4">
              Yangiliklarga obuna bo&apos;ling
            </h3>
            <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
              Yurak Amri faoliyati, yangi loyihalar va yordam imkoniyatlari
              haqida birinchilardan bo&apos;lib xabardor bo&apos;ling.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Email manzilingiz"
                className="flex-1 px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
              />
              <button className="btn-primary px-6 py-3 rounded-xl">
                Obuna bo&apos;lish
              </button>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/yurak_amri.webp"
                  alt="Yurak Amri"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div className="font-bold text-2xl text-text-primary">
                  Yurak Amri
                </div>
              </div>
              <p className="text-text-secondary leading-relaxed mb-6">
                &ldquo;Bir yurakdan - ming yurakka nur!&rdquo;
                O&apos;zbekistonning har bir chekkasida bir oila sizning
                e&apos;tiboringizni kutmoqda.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 border border-primary/20"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-colors duration-300 border border-secondary/20"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent hover:bg-accent hover:text-white transition-colors duration-300 border border-accent/20"
                >
                  <Send className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300 border border-primary/20"
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
              viewport={{ once: true, margin: "-100px" }}
            >
              <h4 className="text-xl font-bold text-text-primary mb-6">
                Aloqa ma&apos;lumotlari
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center text-primary border border-primary/20">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-text-primary font-medium">
                      +998 71 123 45 67
                    </div>
                    <div className="text-text-secondary text-sm">
                      24/7 qo&apos;llab-quvvatlash
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary/20 rounded-xl flex items-center justify-center text-secondary border border-secondary/20">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-text-primary font-medium">
                      info@yurakamri.uz
                    </div>
                    <div className="text-text-secondary text-sm">
                      Elektron pochta
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center text-accent border border-accent/20">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-text-primary font-medium">
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
            className="pt-8 border-t border-border"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-text-secondary">
                &copy; 2025 Yurak Amri. Barcha huquqlar himoyalangan.
              </div>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  Maxfiylik siyosati
                </a>
                <a
                  href="#"
                  className="text-text-secondary hover:text-primary transition-colors"
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
