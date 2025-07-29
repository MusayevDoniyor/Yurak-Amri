"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern - Professional */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-gradient-secondary text-white px-8 py-4 rounded-full text-sm font-bold mb-16 shadow-gold"
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
            YURAK AMRI XAYRIYA FONDI
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-12 leading-tight flex flex-col"
          >
            <span className="heading-corporate text-gradient-primary block">
              Bir yurakdan
            </span>
            <span className="heading-corporate text-gradient-secondary block">
              ming yurakka nur!
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-text-secondary max-w-5xl mx-auto mb-20 leading-relaxed font-light"
          >
            O&apos;zbekistonning har bir chekkasida bir oila sizning
            e&apos;tiboringizni kutmoqda.{" "}
            <span className="text-gradient-primary font-semibold">
              &ldquo;Yurak Amri&rdquo; bilan siz bevosita o&apos;zgarish yasay
              olasiz.
            </span>{" "}
            Bugun emas, hoziroq.
          </motion.p>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center items-center gap-16 mb-20 text-text-secondary"
          >
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 bg-gradient-accent rounded-full shadow-gold"></div>
              <span className="text-xl font-medium">
                15,000+ oila yordam olgan
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 bg-gradient-primary rounded-full shadow-gold"></div>
              <span className="text-xl font-medium">160+ uy qurilgan</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-5 h-5 bg-gradient-secondary rounded-full shadow-gold"></div>
              <span className="text-xl font-medium">100% shaffoflik</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
          >
            <button className="btn-primary px-6 py-3 md:px-12 md:py-6 rounded-2xl text-md md:text-xl font-bold flex items-center gap-4 shadow-gold">
              <Heart className="w-7 h-7" />
              HOZIR YORDAM BERISH
              <ArrowRight className="w-7 h-7" />
            </button>

            <button className="btn-navy px-6 py-3 md:px-12 md:py-6 rounded-2xl text-md md:text-xl font-bold flex items-center gap-4 shadow-navy">
              <Play className="w-7 h-7" />
              HIKOYALARNI KO&apos;RISH
            </button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="mt-24 p-6 md:p-12 bg-gradient-navy backdrop-blur-sm rounded-t-3xl border-navy shadow-navy max-w-4xl mx-auto"
          >
            <p className="text-white text-2xl leading-relaxed font-light">
              <span className="text-gradient-accent font-semibold">
                Pandemiya davrida boshlangan
              </span>{" "}
              oddiy tashabbus, bugun 15 000+ oilaga yordam bergan, 160 ta uy
              qurgan va minglab bolalarning yuzini kuldirgan milliy xayriya
              tizimiga aylandi. Endi siz ham bu yurakdan chiqqan amallarga
              qo&apos;shilishingiz mumkin.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
