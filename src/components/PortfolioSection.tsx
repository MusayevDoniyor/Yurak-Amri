"use client";

import { motion } from "framer-motion";
import {
  Home,
  Users,
  DollarSign,
  MapPin,
  Award,
  CheckCircle,
} from "lucide-react";

const portfolioItems = [
  {
    icon: Home,
    title: "160 ta konteyner uyi",
    description: "Turkiyada, zilzila hududida qurildi",
    color: "bg-gradient-primary",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    icon: Users,
    title: "30 ta xonadondan iborat",
    description: '"25+" uylar loyihasi (Bo\'ka tumani)',
    color: "bg-gradient-secondary",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
  },
  {
    icon: Users,
    title: "15 000+ oila",
    description: "Doimiy yordam ro'yxatida",
    color: "bg-gradient-accent",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
  {
    icon: DollarSign,
    title: "1 million USD",
    description: "3 yilda yig'ilgan xayriya",
    color: "bg-gradient-primary",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
  },
  {
    icon: CheckCircle,
    title: "100% hisob-kitob",
    description: "Va ochiqlik",
    color: "bg-gradient-accent",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-gradient-primary">NIMALAR</span> QILAMIZ?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Pandemiya davrida boshlangan oddiy tashabbus, bugun milliy xayriya
            tizimiga aylandi. Har bir raqam orqasida yuzlab oilalar va ularning
            hayotlari turibdi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${item.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${item.color} text-white mb-6 shadow-lg`}
              >
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className={`text-2xl font-bold ${item.textColor} mb-3`}>
                {item.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Project */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-primary text-white rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                ASOSIY LOYIHA
              </div>
              <h3 className="text-3xl font-bold mb-4">"25+" Uylar Loyihasi</h3>
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                Bo'ka tumanida 30 ta xonadondan iborat uylar majmuasi
                qurilmoqda. Har bir uy oilaning hayotini to'liq o'zgartiradi va
                ularga yangi umid baxsh etadi.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">30 ta xonadon</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">Zamonaviy jihozlash</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-300" />
                  <span className="text-sm">Infratuzilma</span>
                </div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">25+</div>
                <div className="text-white/80">Uy qurilmoqda</div>
                <div className="mt-4 text-sm text-white/70">
                  Loyiha 2024 yil oxirida yakunlanadi
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
