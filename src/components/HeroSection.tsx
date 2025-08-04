"use client";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="container h-[90vh] p-6 rounded-3xl relative overflow-hidden">
        {/* Background Image with Zoom Animation */}
        <motion.div
          initial={{ scale: 1.2, rotate: -4 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 bg-[url('/Sardor_Rahimxon.png')] bg-cover bg-center bg-no-repeat"
        />

        <div className="max-w-7xl mx-auto relative z-10 h-full flex items-center">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left"
            >
              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight text-white"
              >
                <span className="block mb-3">Bir yurakdan</span>
                <span className="block">ming yurakka nur!</span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                className="text-gray-100 text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
              >
                O&apos;zbekistonning har bir chekkasida bir oila sizning
                e&apos;tiboringizni kutmoqda. &quot;Yurak Amri&quot; bilan siz
                bevosita o&apos;zgarish yasay olasiz. Bugun emas, hoziroq.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="#donation"
                  className="inline-flex items-center gap-3 bg-white text-[#2C2C2C] hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                >
                  Hozir yordam berish
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#testimonials"
                  className="inline-flex items-center gap-3 bg-transparent bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/30 hover:border-white/50"
                >
                  <Play className="w-5 h-5" />
                  Hikoyalarni ko&apos;rish
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
