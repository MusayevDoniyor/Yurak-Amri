"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Eye,
  Target,
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
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white"
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
                className="space-y-8 mb-12"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold border border-red-200"
                >
                  <TrendingUp className="w-5 h-5" />
                  Bizning Natijalar
                </motion.div>

                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    RAQAMLAR GAPIRADI
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
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
                      y: -3,
                      scale: 1.02,
                      boxShadow:
                        "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center`}
                      >
                        <stat.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-bold text-gray-900">
                          {stat.value}
                        </div>
                        <div className="text-xs text-gray-500 font-medium">
                          {stat.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-gray-700 font-semibold text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced Image with Better Design */}
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
                    <div className="text-lg font-bold text-gray-900">
                      Har kuni yordam
                    </div>
                    <div className="text-sm text-gray-600">
                      Oilalarga umid va yordam
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Har bir kun, har bir soat - biz oilalarga yordam berish uchun
                  ishlaymiz. Sizning har bir so&apos;mingiz - bu hayot
                  o&apos;zgardi.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Mobile Impact Card - Separate Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="lg:hidden mt-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <Heart className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">
                  Har kuni yordam
                </div>
                <div className="text-sm text-gray-600">
                  Oilalarga umid va yordam
                </div>
              </div>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Har bir kun, har bir soat - biz oilalarga yordam berish uchun
              ishlaymiz. Sizning har bir so&apos;mingiz - bu hayot
              o&apos;zgardi.
            </p>
          </motion.div>

          {/* Enhanced Vision & Mission */}
          <div className="mt-32">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  icon: Eye,
                  title: "Bizning G'oya",
                  desc: "Yurak Amri jamiyatimizda shaffof xayriya standarti bo&apos;lishga intiladi. Har bir oila bizning oilamiz.",
                  color: "bg-blue-50 border-blue-200",
                  iconColor: "bg-blue-100 text-blue-700",
                },
                {
                  icon: Target,
                  title: "Bizning Maqsad",
                  desc: "Oilalarning barqaror hayoti uchun ta&apos;lim, inshoot va insoniy yordam ko&apos;rsatish. Har bir bola kelajak.",
                  color: "bg-green-50 border-green-200",
                  iconColor: "bg-green-100 text-green-700",
                },
              ].map((block, i) => {
                const Icon = block.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className={`${block.color} rounded-3xl p-10 border transition-all duration-500 hover:shadow-2xl`}
                  >
                    <div className="flex flex-col md:flex-row items-start gap-6">
                      <div
                        className={`w-16 h-16 ${block.iconColor} rounded-2xl flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-8 h-8" />
                      </div>

                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                          {block.title}
                        </h3>
                        <p className="text-gray-700 leading-relaxed text-lg font-light">
                          {block.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
