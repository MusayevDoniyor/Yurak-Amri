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
      className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-red-200 font-secondary"
            >
              <TrendingUp className="w-5 h-5" />
              Bizning Faoliyat
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display"
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
              className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed font-primary"
            >
              Har bir loyiha - bu hayot o&apos;zgardi. Biz oilalarga yordam
              berish orqali jamiyatni yaxshilaymiz. Har bir kichik yordam -
              katta o&apos;zgarish.
            </motion.p>
          </motion.div>

          {/* Enhanced Portfolio Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                  {/* Icon */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <Icon className={`w-8 h-8 ${item.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 font-secondary">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm font-primary">
                      {item.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900 font-secondary">
                          {item.count}
                        </span>
                        <span className="text-sm text-gray-500 font-primary">
                          {item.countLabel}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs font-semibold text-gray-700 font-primary">
                          {item.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
