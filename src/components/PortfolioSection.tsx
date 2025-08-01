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
import Image from "next/image";

const portfolioItems = [
  {
    id: 1,
    icon: Heart,
    title: "Oila yordami",
    description: "Ehtiyojmand oilalarga to'g'ridan-to'g'ri yordam",
    color: "bg-primary",
    count: "15,000+",
    countLabel: "oila",
  },
  {
    id: 2,
    icon: Home,
    title: "Uy qurish",
    description: "Uysiz oilalar uchun uy qurish loyihalari",
    color: "bg-secondary",
    count: "160+",
    countLabel: "uy",
  },
  {
    id: 3,
    icon: Users,
    title: "Ijtimoiy ishlar",
    description: "Jamiyatda ijtimoiy mas'uliyatni oshirish",
    color: "bg-accent",
    count: "50+",
    countLabel: "loyiha",
  },
  {
    id: 4,
    icon: BookOpen,
    title: "Ta'lim yordami",
    description: "Bolalar uchun ta'lim materiallari va stipendiyalar",
    color: "bg-primary",
    count: "500+",
    countLabel: "bola",
  },
  {
    id: 5,
    icon: Shield,
    title: "Tibbiy yordam",
    description: "Kasal oilalar uchun tibbiy yordam va dori-darmon",
    color: "bg-secondary",
    count: "300+",
    countLabel: "bemor",
  },
  {
    id: 6,
    icon: Star,
    title: "Maxsus loyihalar",
    description: "Har xil maxsus ehtiyojlar uchun individual yordam",
    color: "bg-accent",
    count: "100+",
    countLabel: "loyiha",
  },
];

export default function PortfolioSection() {
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
              <Star className="w-4 h-4" />
              Bizning Faoliyat
            </div>

            <h2 className="heading-corporate text-4xl md:text-5xl font-black mb-6">
              <span className="text-primary">NIMALAR</span>{" "}
              <span className="text-text-primary">QILAMIZ?</span>
            </h2>

            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Yurak Amri fondi O&apos;zbekiston bo&apos;ylab turli xil ijtimoiy
              loyihalar orqali ehtiyojmand oilalarga yordam beradi.
            </p>
          </motion.div>

          {/* Portfolio Grid - New Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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
                className="card group cursor-pointer hover:border-primary/20"
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mr-4`}
                    >
                      <item.icon className="w-7 h-7 text-white shrink-0" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-text-primary">
                        {item.title}
                      </h3>

                      <p className="text-text-secondary text-sm text-wrap">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-between items-center border-t border-border pt-4">
                    <div>
                      <div className="text-2xl font-bold text-primary">
                        {item.count}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {item.countLabel}
                      </div>
                    </div>
                    <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Project - New Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="rounded-3xl overflow-hidden shadow-lg border border-border mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Image */}
              <div className="relative h-80 lg:h-auto">
                <Image
                  src="/main_project_img.png" // Placeholder - would be replaced with actual project photo
                  alt="25+ Uylar Loyihasi"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-4 w-fit">
                    <Star className="w-4 h-4" />
                    Asosiy Loyiha
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    &ldquo;25+&rdquo; Uylar Loyihasi
                  </h3>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="bg-white p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary">Loyiha</div>
                    <div className="text-xl font-bold text-text-primary">
                      Bo&apos;ka tumani
                    </div>
                  </div>
                </div>

                <p className="text-text-secondary mb-8 leading-relaxed">
                  Bo&apos;ka tumanida 25 ta oila uchun uy qurish loyihasi. Bu
                  loyiha 2024 yil oxirida yakunlanadi va 100+ kishining hayotini
                  o&apos;zgartiradi.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-primary/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-primary">25</div>
                    <div className="text-text-secondary text-sm">Uy</div>
                  </div>

                  <div className="bg-secondary/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-secondary">
                      100+
                    </div>
                    <div className="text-text-secondary text-sm">Kishi</div>
                  </div>

                  <div className="bg-accent/5 rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-accent">2024</div>
                    <div className="text-text-secondary text-sm">Yil</div>
                  </div>
                </div>

                <button className="btn-primary px-6 py-3 text-md font-bold flex items-center gap-2">
                  Loyiha haqida batafsil
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Additional Projects Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="card overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="/yurak_amri.webp" // Placeholder - would be replaced with actual project photo
                  alt="Turkiya zilzila hududida uylar"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold">
                    Xalqaro loyiha
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Turkiya zilzila hududida 160 ta konteyner uyi
                </h3>
                <p className="text-text-secondary mb-4">
                  Zilziladan zarar ko&apos;rgan oilalar uchun 160 ta konteyner
                  uyi qurildi
                </p>
                <button className="text-secondary font-medium flex items-center gap-1">
                  Batafsil ma&apos;lumot
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="card overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src="/yurak_amri.webp" // Placeholder - would be replaced with actual project photo
                  alt="Doimiy yordam dasturi"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-primary text-white px-3 py-1 rounded-full text-xs font-bold">
                    Doimiy dastur
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  15,000+ oila doimiy yordam ro&apos;yxatida
                </h3>
                <p className="text-text-secondary mb-4">
                  O&apos;zbekiston bo&apos;ylab ehtiyojmand oilalarga doimiy
                  yordam ko&apos;rsatilmoqda
                </p>
                <button className="text-primary font-medium flex items-center gap-1">
                  Batafsil ma&apos;lumot
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
