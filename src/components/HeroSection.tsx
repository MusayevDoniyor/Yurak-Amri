"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231E40AF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
            YURAK AMRI XAYRIYA FONDI
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </motion.div> */}

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight"
          >
            <span className="text-gradient-primary">Bir yurakdan</span>
            <br />
            <span className="text-gradient-secondary">ming yurakka nur!</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed"
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
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-8 mb-12 text-slate-500"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-accent rounded-full"></div>
              <span className="text-sm font-medium">
                15,000+ oila yordam olgan
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
              <span className="text-sm font-medium">160+ uy qurilgan</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-gradient-secondary rounded-full"></div>
              <span className="text-sm font-medium">100% shaffoflik</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="btn-primary text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-2 shadow-xl">
              <Heart className="w-5 h-5" />
              HOZIR YORDAM BERISH
              <ArrowRight className="w-5 h-5" />
            </button>

            <button className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl text-lg font-semibold flex items-center gap-2 transition-all duration-300 shadow-lg">
              <Play className="w-5 h-5" />
              HIKOYALARNI KO&apos;RISH
            </button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 p-6 bg-white/80 backdrop-blur-sm rounded-t-3xl border border-blue-200 shadow-lg mb-0"
          >
            <p className="text-slate-600 text-lg">
              <span className="text-gradient-primary font-semibold">
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
