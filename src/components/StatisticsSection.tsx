"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  TrendingUp,
  Heart,
  Users,
  Home,
  DollarSign,
  Clock,
} from "lucide-react";

const stats = [
  {
    label: "Oila yordam olgan",
    value: "15K+",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
    description: "Oilalar yordam oldi",
  },
  {
    label: "Uy qurilgan",
    value: "190+",
    icon: Home,
    color: "bg-green-100 text-green-700",
    description: "Uylar qurildi",
  },
  {
    label: "USD yig'ilgan",
    value: "$1.2M+",
    icon: DollarSign,
    color: "bg-yellow-100 text-yellow-700",
    description: "Yordam yig'ildi",
  },
  {
    label: "Faol ko'mak",
    value: "365/24",
    icon: Clock,
    color: "bg-purple-100 text-purple-700",
    description: "Kun bo'yi yordam",
  },
];

export default function StatisticsSection() {
  return (
    <section
      id="statistics"
      className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="lg:flex lg:items-start lg:gap-16">
            {/* Enhanced Text and Statistics */}
            <div className="lg:w-1/2 lg:pr-8">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-6 mb-12"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold border border-red-200 font-secondary"
                >
                  <TrendingUp className="w-5 h-5" />
                  Bizning Natijalar
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-display">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    RAQAMLAR GAPIRADI
                  </span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light font-primary">
                  Har yili yordam berish hajmi o&apos;sib bormoqda. Bu faqat
                  sizning ishonchingiz va qo&apos;llab-quvvatlashingiz
                  natijasidir. Har bir raqam - bu hayot o&apos;zgardi.
                </p>
              </motion.div>

              {/* Enhanced Statistics Grid - Smaller Cards */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{
                      y: -4,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                    className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-12 h-12 ${stat.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                      >
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="text-2xl font-bold text-gray-900 mb-1 font-secondary">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600 font-medium font-primary">
                          {stat.label}
                        </div>
                        <div className="text-xs text-gray-500 mt-1 font-primary">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced Image Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative lg:w-1/2 h-80 md:h-[450px] mt-12 lg:mt-0"
            >
              {/* Main Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/main_project_img.png"
                  alt="Yurak Amri ta'siri"
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Impact Card - Desktop Only */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="hidden lg:block absolute -bottom-16 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <Heart className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900 font-secondary">
                      Har kuni yordam
                    </div>
                    <div className="text-sm text-gray-600 font-primary">
                      Oilalarga umid va yordam
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed font-primary">
                  Har bir kun, har bir soat - biz oilalarga yordam berish uchun
                  ishlaymiz. Sizning har bir so&apos;mingiz - bu hayot
                  o&apos;zgardi.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
