"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight, Play } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-hero pt-10">
        <div className="absolute inset-0 opacity-20 bg-[url('/yurak_amri.png')] bg-contain bg-top md:bg-center bg-no-repeat"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-left mt-8">
              {/* Badge */}
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-3 bg-gradient-primary text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-gold"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
                YURAK AMRI XAYRIYA FONDI
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div> */}

              {/* Main Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-text-primary mb-6 leading-tight"
              >
                <span className="heading-corporate block mb-2">
                  Bir yurakdan
                </span>
                <span className="heading-corporate text-primary block">
                  ming yurakka nur!
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-xl md:text-2xl text-text-secondary max-w-xl mb-8 leading-relaxed"
              >
                O&apos;zbekistonning har bir chekkasida bir oila sizning
                e&apos;tiboringizni kutmoqda.{" "}
                <span className="text-primary font-semibold">
                  &ldquo;Yurak Amri&rdquo; bilan siz bevosita o&apos;zgarish
                  yasay olasiz.
                </span>{" "}
                Bugun emas, hoziroq.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <a
                  href="#yordam"
                  className="btn-primary px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-md font-bold flex items-center justify-center gap-2 sm:gap-3 shadow-gold text-center"
                >
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="whitespace-nowrap">HOZIR YORDAM BERISH</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>

                <a
                  href="#hikoyalar"
                  className="btn-secondary px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-md md:text-lg font-bold flex items-center justify-center gap-2 sm:gap-3 text-center"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="whitespace-nowrap">
                    HIKOYALARNI KO&apos;RISH
                  </span>
                </a>
              </motion.div>
            </div>

            {/* Right Column - Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="bg-white rounded-t-3xl p-8 shadow-lg border border-border"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">
                  Bizning natijalarimiz
                </h3>
                <p className="text-text-secondary">Raqamlarda ko&apos;ring</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-primary/5 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">
                    15,000+
                  </div>
                  <div className="text-text-secondary text-sm">
                    Oila yordam olgan
                  </div>
                </div>
                <div className="bg-secondary/5 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-secondary mb-2">
                    160+
                  </div>
                  <div className="text-text-secondary text-sm">Uy qurilgan</div>
                </div>
                <div className="bg-accent/5 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">1M+</div>
                  <div className="text-text-secondary text-sm">
                    USD yig&apos;ilgan
                  </div>
                </div>
                <div className="bg-success/5 rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-success mb-2">
                    100%
                  </div>
                  <div className="text-text-secondary text-sm">Shaffoflik</div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-primary/5 rounded-2xl border border-primary/10">
                <p className="text-text-primary text-lg leading-relaxed">
                  <span className="text-primary font-semibold">
                    Pandemiya davrida boshlangan
                  </span>{" "}
                  oddiy tashabbus, bugun milliy xayriya tizimiga aylandi. Endi
                  siz ham bu yurakdan chiqqan amallarga qo&apos;shilishingiz
                  mumkin.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
