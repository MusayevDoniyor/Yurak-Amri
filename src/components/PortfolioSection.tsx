"use client";

import { motion } from "framer-motion";
import { Heart, Home, Users, BookOpen, Shield, Star } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    icon: Heart,
    title: "Oila yordami",
    description:
      "Ehtiyojmand oilalarga to&apos;g&apos;ridan-to&apos;g&apos;ri yordam",
    color: "bg-gradient-accent",
    bgColor: "bg-gradient-card",
    textColor: "text-white",
  },
  {
    id: 2,
    icon: Home,
    title: "Uy qurish",
    description: "Uysiz oilalar uchun uy qurish loyihalari",
    color: "bg-gradient-primary",
    bgColor: "bg-gradient-card",
    textColor: "text-white",
  },
  {
    id: 3,
    icon: Users,
    title: "Ijtimoiy ishlar",
    description: "Jamiyatda ijtimoiy mas&apos;uliyatni oshirish",
    color: "bg-gradient-secondary",
    bgColor: "bg-gradient-card",
    textColor: "text-white",
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Ta&apos;lim yordami",
    description: "Bolalar uchun ta&apos;lim materiallari va stipendiyalar",
    color: "bg-gradient-accent",
    bgColor: "bg-gradient-card",
    textColor: "text-white",
  },
  {
    id: 5,
    icon: Shield,
    title: "Tibbiy yordam",
    description: "Kasal oilalar uchun tibbiy yordam va dori-darmon",
    color: "bg-gradient-primary",
    bgColor: "bg-gradient-card",
    textColor: "text-white",
  },
  {
    id: 6,
    icon: Star,
    title: "Maxsus loyihalar",
    description: "Har xil maxsus ehtiyojlar uchun individual yordam",
    color: "bg-gradient-secondary",
    bgColor: "bg-gradient-card",
    textColor: "text-white",
  },
];

export default function PortfolioSection() {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
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
              <Star className="w-4 h-4" />
              Bizning Faoliyat
            </div>
            <h2 className="heading-corporate text-5xl md:text-7xl font-black mb-6">
              <span className="text-gradient-primary">NIMALAR</span>{" "}
              <span className="text-white">QILAMIZ?</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Yurak Amri fondi O&apos;zbekiston bo&apos;ylab turli xil ijtimoiy
              loyihalar orqali ehtiyojmand oilalarga yordam beradi.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="card-navy group cursor-pointer"
              >
                <div className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-navy-dark" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-navy rounded-3xl p-8 md:p-12 shadow-navy border-navy"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-secondary text-navy-dark px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-gold">
                  <Star className="w-4 h-4" />
                  Asosiy Loyiha
                </div>
                <h3 className="heading-corporate text-4xl md:text-5xl font-black text-white mb-6">
                  &ldquo;25+&rdquo; Uylar Loyihasi
                </h3>
                <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                  Bo&apos;ka tumanida 25 ta oila uchun uy qurish loyihasi. Bu
                  loyiha 2024 yil oxirida yakunlanadi va 100+ kishining hayotini
                  o&apos;zgartiradi.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-text-secondary">
                    <div className="w-3 h-3 bg-gradient-secondary rounded-full"></div>
                    <span>25 ta uy qurilmoqda</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <div className="w-3 h-3 bg-gradient-accent rounded-full"></div>
                    <span>100+ kishi foyda oladi</span>
                  </div>
                  <div className="flex items-center gap-2 text-text-secondary">
                    <div className="w-3 h-3 bg-gradient-primary rounded-full"></div>
                    <span>2024 yil yakunlanadi</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-card/20 backdrop-blur-sm rounded-2xl p-8 border border-navy-light">
                <div className="text-center">
                  <div className="text-6xl font-black text-gradient-secondary mb-4">
                    25+
                  </div>
                  <div className="text-2xl font-bold text-white mb-4">
                    Uy qurilmoqda
                  </div>
                  <div className="text-text-secondary mb-6">
                    Loyiha 2024 yil oxirida yakunlanadi
                  </div>
                  <button className="btn-primary px-8 py-4 rounded-xl text-lg font-bold shadow-gold">
                    Loyiha haqida
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
