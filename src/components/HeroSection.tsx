"use client";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16 md:pt-20 px-4"
    >
      {/* Mobile Background */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <motion.div
          initial={{ scale: 1.1, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/Sardor_Rahimxon.png')] bg-cover bg-center bg-no-repeat"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>

      {/* Desktop Background */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <motion.div
          initial={{ scale: 1.3, rotate: -2, opacity: 0.8 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/Sardor_Rahimxon.png')] bg-cover bg-center bg-no-repeat opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center">
        {/* Mobile Design */}
        <div className="md:hidden text-center space-y-8 py-8">
          {/* Mobile Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm text-red-300 px-6 py-3 rounded-full text-sm font-semibold border border-red-400/30 shadow-lg"
          >
            <Heart className="w-4 h-4" />
            Yordam Berish
          </motion.div>

          {/* Mobile Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-4xl sm:text-5xl font-black text-white leading-tight font-display space-y-3"
          >
            <span className="block bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Bir yurakdan
            </span>
            <span className="block bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              ming yurakka nur!
            </span>
          </motion.h1>

          {/* Mobile Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-gray-300 leading-relaxed font-light font-primary max-w-md mx-auto px-4"
          >
            O&apos;zbekistonning har bir chekkasida bir oila sizning
            e&apos;tiboringizni kutmoqda. &quot;Yurak Amri&quot; bilan siz
            bevosita o&apos;zgarish yasay olasiz.
          </motion.p>

          {/* Mobile CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="pt-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-2xl shadow-red-500/25 hover:shadow-red-500/40 cursor-pointer font-secondary"
            >
              <Heart className="w-5 h-5" />
              Hozir yordam berish
            </motion.button>
          </motion.div>

          {/* Mobile Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col items-center gap-4 pt-8"
          >
            <div className="flex items-center gap-6 text-gray-300 text-sm font-primary">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg"></div>
                <span>100% shaffof</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
                <span>Bevosita yordam</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-purple-400 rounded-full shadow-lg"></div>
              <span className="text-gray-300 text-sm font-primary">
                Xavfsiz to&apos;lov
              </span>
            </div>
          </motion.div>
        </div>

        {/* Desktop Design */}
        <div className="hidden md:block">
          <div className="max-w-7xl mx-auto h-full flex items-center py-12">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-left space-y-6"
              >
                {/* Desktop Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                  className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight font-display"
                >
                  <span className="block mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Bir yurakdan
                  </span>
                  <span className="block bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    ming yurakka nur!
                  </span>
                </motion.h1>

                {/* Desktop Description */}
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl font-light font-primary"
                >
                  O&apos;zbekistonning har bir chekkasida bir oila sizning
                  e&apos;tiboringizni kutmoqda. &quot;Yurak Amri&quot; bilan siz
                  bevosita o&apos;zgarish yasay olasiz. Bugun emas, hoziroq.
                </motion.p>

                {/* Desktop CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer font-secondary"
                  >
                    Yordam berish
                    <Heart className="w-5 h-5" />
                  </motion.button>
                </div>

                {/* Desktop Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                  className="flex flex-wrap items-center gap-6 pt-6 text-gray-300 text-sm font-primary"
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
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
