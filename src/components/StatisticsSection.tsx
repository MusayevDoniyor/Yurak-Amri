"use client";

import { motion } from "framer-motion";
import { Users, Home, Heart, TrendingUp } from "lucide-react";

const statistics = [
  {
    id: 1,
    icon: Users,
    number: "15,000+",
    label: "Oila yordam olgan",
    description: "O&apos;zbekiston bo&apos;ylab",
    color: "bg-gradient-accent",
  },
  {
    id: 2,
    icon: Home,
    number: "160+",
    label: "Uy qurilgan",
    description: "Turli viloyatlarda",
    color: "bg-gradient-primary",
  },
  {
    id: 3,
    icon: Heart,
    number: "1M+",
    label: "USD yig&apos;ilgan",
    description: "3 yilda xayriya",
    color: "bg-gradient-secondary",
  },
  {
    id: 4,
    icon: TrendingUp,
    number: "100%",
    label: "Shaffoflik",
    description: "Hisob-kitob ochiq",
    color: "bg-gradient-accent",
  },
];

const growthData = [
  { year: "2021", amount: 250000 },
  { year: "2022", amount: 450000 },
  { year: "2023", amount: 750000 },
  { year: "2024", amount: 1000000 },
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
            <div className="inline-flex items-center gap-2 bg-gradient-secondary text-navy-dark px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-gold">
              <TrendingUp className="w-4 h-4" />
              Bizning Natijalar
            </div>
            <h2 className="heading-corporate text-5xl md:text-7xl font-black mb-6">
              <span className="text-gradient-primary">O&apos;SISH</span>{" "}
              <span className="text-white">DINAMIKASI</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Har yili yordam berish hajmi o&apos;sib bormoqda. Bu faqat sizning
              ishonchingiz va qo&apos;llab-quvvatlashingiz natijasidir.
            </p>
          </motion.div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                className="card-navy text-center group"
              >
                <div className="p-8">
                  <div
                    className={`w-16 h-16 ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="w-8 h-8 text-navy-dark" />
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-gradient-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xl font-bold text-white mb-2">
                    {stat.label}
                  </div>
                  <div className="text-text-secondary">{stat.description}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-navy rounded-3xl p-8 md:p-12 shadow-navy border-navy"
          >
            <div className="text-center mb-12">
              <h3 className="heading-corporate text-3xl md:text-4xl font-black text-white mb-4">
                Yillik O&apos;sish Grafigi
              </h3>
              <p className="text-xl text-text-secondary">
                Xayriya mablag&apos;lari yig&apos;ish dinamikasi (USD)
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Chart Visualization */}
              <div className="space-y-6">
                {growthData.map((data, idx) => (
                  <motion.div
                    key={data.year}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: idx * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-20 text-lg font-bold text-white">
                      {data.year}
                    </div>
                    <div className="flex-1 bg-navy-light rounded-full h-4 overflow-hidden">
                      <div
                        className="bg-gradient-secondary h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${(data.amount / 1000000) * 100}%`,
                          animationDelay: `${idx * 0.2}s`,
                        }}
                      ></div>
                    </div>
                    <div className="w-24 text-right font-bold text-gradient-secondary">
                      ${(data.amount / 1000).toFixed(0)}K
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Growth Stats */}
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-6xl font-black text-gradient-secondary mb-4">
                    {(
                      ((growthData[3].amount - growthData[0].amount) /
                        growthData[0].amount) *
                      100
                    ).toFixed(0)}
                    %
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">
                    Umumiy o&apos;sish
                  </div>
                  <div className="text-text-secondary">
                    2021-2024 yillar oralig&apos;ida
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-gradient-card rounded-2xl border border-navy-light">
                    <div className="text-3xl font-black text-gradient-accent mb-2">
                      {(
                        ((growthData[1].amount - growthData[0].amount) /
                          growthData[0].amount) *
                        100
                      ).toFixed(0)}
                      %
                    </div>
                    <div className="text-sm font-bold text-white">
                      2021-2022
                    </div>
                  </div>
                  <div className="text-center p-6 bg-gradient-card rounded-2xl border border-navy-light">
                    <div className="text-3xl font-black text-gradient-primary mb-2">
                      {(
                        ((growthData[2].amount - growthData[1].amount) /
                          growthData[1].amount) *
                        100
                      ).toFixed(0)}
                      %
                    </div>
                    <div className="text-sm font-bold text-white">
                      2022-2023
                    </div>
                  </div>
                </div>

                <div className="text-center p-6 bg-gradient-secondary/20 rounded-2xl border border-navy-light">
                  <div className="text-2xl font-bold text-white mb-2">
                    Faol ko&apos;mak liniyasi
                  </div>
                  <div className="text-text-secondary">
                    24/7 qo&apos;llab-quvvatlash
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
