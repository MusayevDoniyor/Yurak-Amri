"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center overflow-hidden pt-20 px-4"
    >
      <div className="container h-[90vh] p-6 rounded-3xl relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Background Image with Enhanced Animation */}
        <motion.div
          initial={{ scale: 1.3, rotate: -2, opacity: 0.8 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/Sardor_Rahimxon.png')] bg-cover bg-center bg-no-repeat opacity-40"
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

        <div className="max-w-7xl mx-auto relative z-10 h-full flex items-center">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-left space-y-8"
            >
              {/* Main Heading with Enhanced Typography */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight"
              >
                <span className="block mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Bir yurakdan
                </span>
                <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  ming yurakka nur!
                </span>
              </motion.h1>

              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-gray-200 text-xl md:text-2xl leading-relaxed max-w-2xl font-light"
              >
                O&apos;zbekistonning har bir chekkasida bir oila sizning
                e&apos;tiboringizni kutmoqda. &quot;Yurak Amri&quot; bilan siz
                bevosita o&apos;zgarish yasay olasiz. Bugun emas, hoziroq.
              </motion.p>

              {/* Enhanced CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Yordam berish
                  <Heart className="w-5 h-5" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 bg-transparent bg-white/10 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/50 cursor-pointer"
                >
                  Batafsil ma&apos;lumot
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="flex items-center gap-8 pt-8 text-gray-300 text-sm"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>100% shaffof</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Bevosita yordam</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                  <span>Xavfsiz to&apos;lov</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
