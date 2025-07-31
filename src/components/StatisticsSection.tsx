"use client";

import { motion } from "framer-motion";
import {
  Users,
  Home,
  Heart,
  TrendingUp,
  Clock,
  Globe,
  Award,
} from "lucide-react";
import Image from "next/image";

const statistics = [
  {
    id: 1,
    icon: Users,
    number: "15,200+",
    label: "Oila yordam olgan",
    description: "O'zbekiston bo'ylab",
    color: "bg-primary",
    bgColor: "bg-primary/5",
  },
  {
    id: 2,
    icon: Home,
    number: "190+",
    label: "Uy qurilgan",
    description: "Turli viloyatlarda",
    color: "bg-secondary",
    bgColor: "bg-secondary/5",
  },
  {
    id: 3,
    icon: Heart,
    number: "1.2M",
    label: "USD yig'ilgan",
    description: "3 yilda xayriya",
    color: "bg-accent",
    bgColor: "bg-accent/5",
  },
  {
    id: 4,
    icon: Clock,
    number: "365/24",
    label: "Faol ko'mak",
    description: "Qo'llab-quvvatlash",
    color: "bg-success",
    bgColor: "bg-success/5",
  },
  {
    id: 5,
    icon: Globe,
    number: "13",
    label: "Viloyat",
    description: "Faoliyat doirasi",
    color: "bg-primary",
    bgColor: "bg-primary/5",
  },
  {
    id: 6,
    icon: Award,
    number: "100%",
    label: "Shaffoflik",
    description: "Hisob-kitob ochiq",
    color: "bg-secondary",
    bgColor: "bg-secondary/5",
  },
];

const growthData = [
  { year: "2021", amount: 250000, color: "bg-primary" },
  { year: "2022", amount: 450000, color: "bg-secondary" },
  { year: "2023", amount: 750000, color: "bg-accent" },
  { year: "2024", amount: 1200000, color: "bg-success" },
];

export default function StatisticsSection() {
  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-gold">
              <TrendingUp className="w-4 h-4" />
              Bizning Natijalar
            </div>
            <h2 className="heading-corporate text-4xl md:text-5xl font-black mb-6">
              <span className="text-primary">RAQAMLAR</span>{" "}
              <span className="text-text-primary">GAPIRADI</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Har yili yordam berish hajmi o&apos;sib bormoqda. Bu faqat sizning
              ishonchingiz va qo&apos;llab-quvvatlashingiz natijasidir.
            </p>
          </motion.div>

          {/* Featured Stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 relative rounded-3xl overflow-hidden"
          >
            <div className="relative h-64 md:h-80">
              <Image
                src="/yurak_amri.webp" // Placeholder - would be replaced with actual impact photo
                alt="Yurak Amri ta'siri"
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent flex items-center">
                <div className="p-8 md:p-16 max-w-xl">
                  <div className="text-white text-5xl md:text-7xl font-black mb-4">
                    1,200,000+
                  </div>
                  <div className="text-white text-2xl md:text-3xl font-bold mb-2">
                    USD qiymatidagi yordam
                  </div>
                  <div className="text-white/90 text-lg">
                    3 yil ichida to'plangan va yo'naltirilgan mablag'
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics Grid - New Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {statistics.map((stat, idx) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="card group hover:border-primary/20"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-text-primary">
                        {stat.number}
                      </div>
                      <div className="text-text-secondary">{stat.label}</div>
                    </div>
                  </div>
                  <div
                    className={`${stat.bgColor} p-4 rounded-xl text-text-secondary`}
                  >
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Growth Chart - New Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="card p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-2">
                  Yillik O&apos;sish Dinamikasi
                </h3>
                <p className="text-text-secondary">
                  Xayriya mablag&apos;lari yig&apos;ish dinamikasi (USD)
                </p>
              </div>
              <div className="mt-4 md:mt-0 bg-primary/5 rounded-xl p-4">
                <div className="text-3xl font-bold text-primary">
                  {(
                    ((growthData[3].amount - growthData[0].amount) /
                      growthData[0].amount) *
                    100
                  ).toFixed(0)}
                  %
                </div>
                <div className="text-text-secondary text-sm">
                  Umumiy o&apos;sish (2021-2024)
                </div>
              </div>
            </div>

            {/* Chart Visualization - New Design */}
            <div className="mb-12">
              <div className="relative h-80">
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-64">
                  {growthData.map((data, idx) => (
                    <motion.div
                      key={data.year}
                      initial={{ height: 0 }}
                      whileInView={{
                        height: `${(data.amount / 1200000) * 100}%`,
                      }}
                      transition={{
                        duration: 1,
                        delay: idx * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className={`w-1/5 ${data.color} rounded-t-lg relative group`}
                    >
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg px-3 py-2 text-center min-w-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="text-lg font-bold text-text-primary">
                          ${(data.amount / 1000).toFixed(0)}K
                        </div>
                        <div className="text-text-secondary text-sm">
                          {data.year}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 h-px bg-border"></div>
                <div className="absolute bottom-0 left-0 right-0 flex justify-between pt-4 border-t border-border">
                  {growthData.map((data) => (
                    <div key={data.year} className="text-center w-1/5">
                      <div className="text-text-primary font-medium">
                        {data.year}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Year-by-Year Growth */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-primary/5 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  {(
                    ((growthData[1].amount - growthData[0].amount) /
                      growthData[0].amount) *
                    100
                  ).toFixed(0)}
                  %
                </div>
                <div className="text-text-secondary">O&apos;sish 2021-2022</div>
              </div>
              <div className="bg-secondary/5 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-secondary mb-2">
                  {(
                    ((growthData[2].amount - growthData[1].amount) /
                      growthData[1].amount) *
                    100
                  ).toFixed(0)}
                  %
                </div>
                <div className="text-text-secondary">O&apos;sish 2022-2023</div>
              </div>
              <div className="bg-accent/5 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-accent mb-2">
                  {(
                    ((growthData[3].amount - growthData[2].amount) /
                      growthData[2].amount) *
                    100
                  ).toFixed(0)}
                  %
                </div>
                <div className="text-text-secondary">O&apos;sish 2023-2024</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
