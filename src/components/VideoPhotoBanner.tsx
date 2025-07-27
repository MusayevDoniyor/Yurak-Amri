"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";

interface VisualItem {
  id: number;
  videoId: string;
  title: string;
  description: string;
  category: string;
}

const visualItems: VisualItem[] = [
  {
    id: 1,
    videoId: "fmMddZ0e2nM",
    title: "Bo'ka tumanida oilaga uy topshirilmoqda",
    description: "Sardor Rahimxon 30 nafar oilaga uy topshirmoqda",
    category: "Uy qurish loyihasi",
  },
  {
    id: 2,
    videoId: "Z0xVdqDZzsI",
    title: "Yurak Amri a'zolari bilan tarbiya va ko'mak",
    description: "Fond a'zolari ehtiyojmandlar bilan samimiy muloqotda",
    category: "Faol yordam",
  },
  {
    id: 3,
    videoId: "9hyu1730W4g",
    title: "Oilalar hayoti o'zgardi",
    description: "Yurak Amri yordami bilan oilalarning hayoti to'ldi",
    category: "Hikoyalar",
  },
];

export default function VideoPhotoBanner() {
  return (
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-lg">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            YURAK AMRI
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-white mb-6"
        >
          <span className="text-white">Haqiqiy</span> hikoyalar
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-white/90 max-w-4xl mx-auto mb-16 leading-relaxed"
        >
          Har bir video orqasida yuzlab oilalar va ularning yurtiga muhabbat
          yotadi.{" "}
          <span className="text-white font-semibold">
            Sizning harakatingiz - yuzlab umidlar manbai.
          </span>
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visualItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative">
                <div className="w-full h-48 bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}?controls=1&rel=0&showinfo=0`}
                    title={item.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full rounded-t-2xl"
                  />
                </div>

                <div className="absolute top-3 left-3 bg-gradient-primary text-white backdrop-blur-sm rounded-full px-4 py-2 flex items-center text-xs font-bold shadow-lg">
                  <Home className="w-4 h-4 mr-2" />
                  {item.category}
                </div>
              </div>

              <div className="p-6 text-left">
                <h3 className="font-bold text-xl mb-3 text-slate-900">
                  {item.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
