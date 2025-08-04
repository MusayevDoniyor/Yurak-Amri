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
} from "lucide-react";
import React from "react";

const portfolioItems = [
  {
    id: 1,
    icon: Heart,
    title: "Oila yordami",
    description: "Ehtiyojmand oilalarga to'g'ridan-to'g'ri yordam",
    count: "15K+",
    countLabel: "oila",
  },
  {
    id: 2,
    icon: Home,
    title: "Uy qurish",
    description: "Uysiz oilalar uchun uy qurish loyihalari",
    count: "160+",
    countLabel: "uy",
  },
  {
    id: 3,
    icon: Users,
    title: "Ijtimoiy ishlar",
    description: "Jamiyatda ijtimoiy mas'uliyatni oshirish",
    count: "50+",
    countLabel: "loyiha",
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Ta'lim yordami",
    description: "Bolalar uchun ta'lim materiallari va stipendiyalar",
    count: "500+",
    countLabel: "bola",
  },
  {
    id: 5,
    icon: Shield,
    title: "Tibbiy yordam",
    description: "Kasal oilalar uchun tibbiy yordam va dori-darmon",
    count: "300+",
    countLabel: "bemor",
  },
  {
    id: 6,
    icon: Star,
    title: "Maxsus loyihalar",
    description: "Har xil maxsus ehtiyojlar uchun individual yordam",
    count: "100+",
    countLabel: "loyiha",
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
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
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4" />
              Bizning Faoliyat
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-medium text-[#2C2C2C] mb-6"
            >
              NIMALAR QILAMIZ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Yurak Amri fondi O&apos;zbekiston bo&apos;ylab turli xil ijtimoiy
              loyihalar orqali ehtiyojmand oilalarga yordam beradi.
            </motion.p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  y: -10,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="bg-gray-50 rounded-2xl p-5 h-full border border-gray-100 hover:border-gray-200 transition-all duration-300"
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                >
                  <div className="flex items-center gap-4">
                    {/* Icon */}
                    <motion.div
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <item.icon className="w-5 h-6 text-gray-700" />
                    </motion.div>

                    {/* Title */}
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                      viewport={{ once: true }}
                      className="text-lg font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors items-center"
                    >
                      {item.title}
                    </motion.h3>
                  </div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    viewport={{ once: true }}
                    className="text-gray-600 text-sm leading-relaxed mb-6"
                  >
                    {item.description}
                  </motion.p>

                  {/* Stats */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-center justify-between"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full w-fit shadow-sm transition-all duration-300 group-hover:bg-gray-200"
                    >
                      <span className="text-gray-900 font-semibold text-lg">
                        {item.count}
                      </span>
                      <span className="text-gray-600 text-sm">
                        {item.countLabel}
                      </span>
                    </motion.div>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.2 },
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 group-hover:bg-gray-200 transition-colors duration-300"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
