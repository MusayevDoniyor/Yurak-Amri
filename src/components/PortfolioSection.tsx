"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Home,
  Users,
  BookOpen,
  Shield,
  Star,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import React from "react";

const portfolioItems = [
  {
    id: 1,
    icon: Heart,
    title: "Oila yordami",
    description:
      "Ehtiyojmand oilalarga to'g'ridan-to'g'ri yordam. Har bir oila bizning oilamiz.",
    count: "15K+",
    countLabel: "oila",
    color: "bg-red-100 text-red-700",
    bgColor: "bg-red-50",
    impact: "Har kuni 50+ oila yordam oladi",
  },
  {
    id: 2,
    icon: Home,
    title: "Uy qurish",
    description:
      "Uysiz oilalar uchun uy qurish loyihalari. Har bir uy - yangi hayot boshlash.",
    count: "160+",
    countLabel: "uy",
    color: "bg-blue-100 text-blue-700",
    bgColor: "bg-blue-50",
    impact: "160 oila yangi uyga ko'chdi",
  },
  {
    id: 3,
    icon: Users,
    title: "Ijtimoiy ishlar",
    description:
      "Jamiyatda ijtimoiy mas'uliyatni oshirish. Hamkorlikda kuch bor.",
    count: "50+",
    countLabel: "loyiha",
    color: "bg-green-100 text-green-700",
    bgColor: "bg-green-50",
    impact: "50+ ijtimoiy loyiha amalga oshirildi",
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Ta'lim yordami",
    description:
      "Bolalar uchun ta'lim materiallari va stipendiyalar. Kelajak ta'limda.",
    count: "500+",
    countLabel: "bola",
    color: "bg-yellow-100 text-yellow-700",
    bgColor: "bg-yellow-50",
    impact: "500+ bola maktabga bormoqda",
  },
  {
    id: 5,
    icon: Shield,
    title: "Tibbiy yordam",
    description:
      "Kasal oilalar uchun tibbiy yordam va dori-darmon. Sog'lik - eng muhim boylik.",
    count: "300+",
    countLabel: "bemor",
    color: "bg-purple-100 text-purple-700",
    bgColor: "bg-purple-50",
    impact: "300+ bemor davolandi",
  },
  {
    id: 6,
    icon: Star,
    title: "Maxsus loyihalar",
    description:
      "Har xil maxsus ehtiyojlar uchun individual yordam. Har bir holat - maxsus.",
    count: "100+",
    countLabel: "loyiha",
    color: "bg-indigo-100 text-indigo-700",
    bgColor: "bg-indigo-50",
    impact: "100+ maxsus loyiha amalga oshirildi",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-red-200"
            >
              <TrendingUp className="w-5 h-5" />
              Bizning Faoliyat
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                NIMALAR QILAMIZ?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
            >
              Yurak Amri fondi O&apos;zbekiston bo&apos;ylab turli xil ijtimoiy
              loyihalar orqali ehtiyojmand oilalarga yordam beradi. Har bir
              loyiha - bu hayot o&apos;zgardi.
            </motion.p>
          </motion.div>

          {/* Enhanced Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{
                  y: -12,
                  transition: { duration: 0.4, ease: "easeOut" },
                }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="bg-white rounded-3xl p-8 h-full border border-gray-200 hover:border-gray-300 transition-all duration-500 shadow-lg hover:shadow-2xl"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                >
                  {/* Header with Icon and Title */}
                  <div className="flex items-start gap-4 mb-6">
                    {/* Enhanced Icon */}
                    <motion.div
                      className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center shadow-lg border border-gray-100`}
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                    >
                      <item.icon
                        className={`w-8 h-8 ${item.color.split(" ")[1]}`}
                      />
                    </motion.div>

                    {/* Title */}
                    <div className="flex-1">
                      <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors"
                      >
                        {item.title}
                      </motion.h3>

                      {/* Impact Badge */}
                      <div
                        className={`inline-flex items-center gap-2 ${item.color} px-3 py-1 rounded-full text-xs font-semibold`}
                      >
                        <Star className="w-3 h-3" />
                        {item.impact}
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-base leading-relaxed mb-8 font-light"
                  >
                    {item.description}
                  </motion.p>

                  {/* Enhanced Stats and CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 bg-gray-100 px-4 py-3 rounded-2xl shadow-sm transition-all duration-300 group-hover:bg-gray-200"
                    >
                      <div className="text-center">
                        <span className="text-gray-900 font-bold text-2xl block">
                          {item.count}
                        </span>
                        <span className="text-gray-600 text-sm font-medium">
                          {item.countLabel}
                        </span>
                      </div>
                    </motion.div>

                    <motion.button
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-12 h-12 rounded-2xl bg-gray-900 flex items-center justify-center text-white group-hover:bg-red-600 transition-all duration-300 shadow-lg cursor-pointer"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Siz ham qo&apos;shiling!
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Har bir loyiha - bu hayot o&apos;zgardi. Sizning yordamingiz
                bilan ko&apos;proq oilalarga umid va yordam yetkazamiz.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-red-600 text-white px-4 py-2 lg:px-8 lg:py-4 rounded-2xl font-semibold text-base md:text-lg hover:bg-red-700 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <Heart className="w-5 h-5" />
                Hozir yordam berish
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
