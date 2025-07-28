"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern - Professional */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-3 bg-gradient-secondary text-navy-dark px-8 py-4 rounded-full text-sm font-bold mb-12 shadow-gold"
          >
            <div className="w-3 h-3 bg-navy-dark rounded-full"></div>
            YURAK AMRI XAYRIYA FONDI
            <div className="w-3 h-3 bg-navy-dark rounded-full"></div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight"
          >
            <span className="heading-corporate text-gradient-primary">
              Bir yurakdan
            </span>
            <br />
            <span className="heading-corporate text-gradient-navy">
              ming yurakka nur!
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-xl md:text-2xl text-text-secondary max-w-4xl mx-auto mb-16 leading-relaxed"
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
            className="flex flex-wrap justify-center items-center gap-12 mb-16 text-text-secondary"
          >
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gradient-accent rounded-full shadow-gold"></div>
              <span className="text-lg font-medium">
                15,000+ oila yordam olgan
              </span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gradient-primary rounded-full shadow-gold"></div>
              <span className="text-lg font-medium">160+ uy qurilgan</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gradient-secondary rounded-full shadow-gold"></div>
              <span className="text-lg font-medium">100% shaffoflik</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <button className="btn-primary px-10 py-5 rounded-xl text-lg font-bold flex items-center gap-3 shadow-gold">
              <Heart className="w-6 h-6" />
              HOZIR YORDAM BERISH
              <ArrowRight className="w-6 h-6" />
            </button>

            <button className="btn-navy px-10 py-5 rounded-xl text-lg font-bold flex items-center gap-3 shadow-navy">
              <Play className="w-6 h-6" />
              HIKOYALARNI KO&apos;RISH
            </button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="mt-20 p-8 bg-gradient-navy backdrop-blur-sm rounded-3xl border-navy shadow-navy"
          >
            <p className="text-text-secondary text-xl leading-relaxed">
              <span className="text-gradient-primary font-bold">
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
