"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eye, Target, TrendingUp } from "lucide-react";

const stats = [
  { label: "Oila yordam olgan", value: "15K+" },
  { label: "Uy qurilgan", value: "190+" },
  { label: "USD yig'ilgan", value: "$1.2M+" },
  { label: "Faol ko'mak", value: "365/24" },
];

export default function StatisticsSection() {
  return (
    <section id="statistics" className="py-24 bg-white">
      <div className="container mx-auto px-4 lg:flex lg:items-center lg:gap-12">
        {/* Matn va Statistika */}
        <div className="lg:w-1/2">
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
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <TrendingUp className="w-4 h-4" />
              Bizning Natijalar
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-medium text-[#2f2f2f]">
              RAQAMLAR GAPIRADI
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Har yili yordam berish hajmi o&apos;sib bormoqda. Bu faqat sizning
              ishonchingiz va qo&apos;llab-quvvatlashingiz natijasidir.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
            className="grid grid-cols-2 gap-6 mb-12"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-left"
              >
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {s.value}
                </div>
                <div className="text-gray-600 text-sm mt-1">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Rasm */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative lg:w-1/2 h-80 md:h-96 rounded-2xl overflow-hidden"
        >
          <Image
            src="/main_project_img.png"
            alt="Yurak Amri ta'siri"
            fill
            style={{ objectFit: "cover" }}
            className="transition-transform duration-500 hover:scale-105"
          />
        </motion.div>
      </div>

      {/* Vision & Mission */}
      <div className="container mx-auto px-4 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: Eye,
              title: "Bizning G'oya",
              desc: "Yurak Amri jamiyatimizda shaffof xayriya standarti bo'lishga intiladi.",
            },
            {
              icon: Target,
              title: "Bizning Maqsad",
              desc: "Oilalarning barqaror hayoti uchun ta'lim, inshoot va insoniy yordam ko'rsatish.",
            },
          ].map((block, i) => {
            const Icon = block.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 flex items-start"
              >
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-white mb-4 flex-shrink-0">
                  <Icon className="w-6 h-6 text-[#2f2f2f]" />
                </div>
                <div className="ml-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                    {block.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{block.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
