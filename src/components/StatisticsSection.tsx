"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Home,
  DollarSign,
  Clock,
  MapPin,
} from "lucide-react";

const statistics = [
  {
    icon: Users,
    number: "15,200+",
    label: "Oila yordam olgan",
    description: "O'zbekiston bo'ylab",
    color: "bg-gradient-accent",
    bgColor: "bg-green-50",
  },
  {
    icon: Home,
    number: "190+",
    label: "Uy topshirilgan",
    description: "Turli hududlarda",
    color: "bg-gradient-primary",
    bgColor: "bg-blue-50",
  },
  {
    icon: DollarSign,
    number: "1,2 mln",
    label: "USD qiymatdagi yordam",
    description: "3 yil davomida",
    color: "bg-gradient-secondary",
    bgColor: "bg-amber-50",
  },
  {
    icon: Clock,
    number: "365/24",
    label: "Faol ko'mak liniyasi",
    description: "Doimiy yordam",
    color: "bg-gradient-accent",
    bgColor: "bg-green-50",
  },
  {
    icon: MapPin,
    number: "13",
    label: "Viloyatda faoliyat",
    description: "O'zbekiston bo'ylab",
    color: "bg-gradient-primary",
    bgColor: "bg-blue-50",
  },
];

export default function StatisticsSection() {
  return (
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-white">Raqamlar</span> haqida
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Natijalar sonlarda: har bir raqam orqasida yuzlab oilalar va
            ularning hayotlari turibdi.{" "}
            <span className="text-white font-semibold">
              Sizning yordamingiz - ularning umidi.
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`${stat.bgColor} rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/10`}
            >
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${stat.color} text-white mb-6 shadow-lg`}
              >
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-slate-900 mb-2">
                {stat.number}
              </div>
              <div className="text-xl font-semibold text-slate-800 mb-2">
                {stat.label}
              </div>
              <div className="text-slate-600">{stat.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Growth Chart */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white text-slate-900 rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                O&apos;SISH DINAMIKASI
              </div>
              <h3 className="text-3xl font-bold mb-4">
                Har yili 300% o&apos;sish
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                2021 yildan beri har yili yordam berilgan oilalar soni 300% ga
                o&apos;sdi. Bu faqat raqamlar emas, bu yuzlab oilalarning
                hayotini o&apos;zgartirish.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-700">2021</div>
                  <div className="text-sm text-slate-600">5,000 oila</div>
                </div>
                <div className="bg-blue-50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-blue-700">2024</div>
                  <div className="text-sm text-slate-600">15,200+ oila</div>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2 text-blue-700">
                  300%
                </div>
                <div className="text-slate-800 text-lg">O&apos;sish</div>
                <div className="mt-4 text-sm text-slate-600">
                  3 yil davomida
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
