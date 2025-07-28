"use client";

import { motion } from "framer-motion";
import {
  Heart,
  CreditCard,
  Shield,
  ArrowRight,
  CheckCircle,
  Coffee,
  Smartphone,
} from "lucide-react";

const donationAmounts = [
  { amount: 10000, label: "10,000 so'm", description: "Bir oilaga non" },
  {
    amount: 50000,
    label: "50,000 so'm",
    description: "Oila uchun oziq-ovqat",
  },
  {
    amount: 100000,
    label: "100,000 so'm",
    description: "Bolalar uchun kiyim",
  },
  {
    amount: 500000,
    label: "500,000 so'm",
    description: "Uy ta'mirlash",
  },
];

const paymentMethods = [
  { name: "UzCard", icon: CreditCard },
  { name: "Humo", icon: CreditCard },
  { name: "Visa", icon: CreditCard },
  { name: "MasterCard", icon: CreditCard },
];

export default function DonationSection() {
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
              <Heart className="w-4 h-4" />
              Yordam Berish
            </div>
            <h2 className="heading-corporate text-5xl md:text-7xl font-black mb-6">
              <span className="text-gradient-primary">SEN HAM</span>{" "}
              <span className="text-white">QO&apos;SHIL!</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Har bir so&apos;m - bir oilaning umidi. Sizning yordamingiz
              minglab oilalarning hayotini o&apos;zgartiradi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="card-navy p-8 md:p-12"
            >
              <div className="inline-flex items-center gap-2 bg-gradient-accent/20 text-success px-4 py-2 rounded-full text-sm font-bold mb-8">
                <CheckCircle className="w-4 h-4" />
                Xavfsiz to&apos;lov
              </div>

              <h3 className="text-3xl font-bold text-white mb-8">
                Yordam miqdorini tanlang
              </h3>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {donationAmounts.map((item, idx) => (
                  <motion.button
                    key={item.amount}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: idx * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="p-4 border-2 border-navy-light rounded-xl text-left hover:border-gold-primary hover:bg-gold-primary/10 transition-all duration-300 group"
                  >
                    <div className="font-bold text-white text-lg mb-1">
                      {item.label}
                    </div>
                    <div className="text-text-secondary text-sm">
                      {item.description}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-white font-bold mb-3">
                  Yoki o&apos;zingiz miqdorni kiriting:
                </label>
                <input
                  type="number"
                  placeholder="Miqdorni kiriting..."
                  className="w-full px-4 py-4 bg-navy-light border-2 border-navy-light rounded-xl text-white placeholder-text-secondary focus:ring-2 focus:ring-gold-primary focus:border-gold-primary transition-all duration-300"
                />
              </div>

              {/* Monthly Donation */}
              <div className="flex items-center gap-3 mb-8">
                <input
                  type="checkbox"
                  id="monthly"
                  className="w-5 h-5 text-gold-primary bg-navy-light border-navy-light rounded focus:ring-gold-primary focus:ring-2"
                />
                <label htmlFor="monthly" className="text-white font-medium">
                  Har oy avtomatik yordam berish
                </label>
              </div>

              {/* Main Donate Button */}
              <button className="w-full btn-primary py-5 rounded-xl text-xl font-bold flex items-center justify-center gap-3 shadow-gold mb-8">
                <Heart className="w-6 h-6" />
                HOZIR YORDAM BERISH
                <ArrowRight className="w-6 h-6" />
              </button>

              {/* Payment Methods */}
              <div className="mb-8">
                <div className="text-lg font-bold text-white mb-4">
                  Qabul qilinadi:
                </div>
                <div className="flex flex-wrap gap-3">
                  {paymentMethods.map((method, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 px-4 py-3 bg-navy-light rounded-xl text-white border border-navy-light"
                    >
                      <method.icon className="w-5 h-5" />
                      <span className="font-medium">{method.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Payment Links */}
              <div className="pt-6 border-t border-navy-light">
                <div className="text-lg font-bold text-white mb-4">
                  Qo&apos;shimcha to&apos;lov usullari:
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://payme.uz/@yurakamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-success hover:bg-success/80 text-white rounded-xl font-medium transition-colors"
                  >
                    <CreditCard className="w-5 h-5" />
                    PayMe
                  </a>
                  <a
                    href="https://click.uz/@yurakamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-navy-light hover:bg-navy-light/80 text-white rounded-xl font-medium transition-colors"
                  >
                    <CreditCard className="w-5 h-5" />
                    Click
                  </a>
                  <a
                    href="tel:+998712345678"
                    className="inline-flex items-center gap-2 px-4 py-3 bg-gold-primary hover:bg-gold-light text-navy-dark rounded-xl font-medium transition-colors"
                  >
                    <Smartphone className="w-5 h-5" />
                    Telefon
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Impact Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {/* Impact Stats Card */}
              <div className="bg-gradient-navy rounded-3xl p-8 shadow-navy border-navy">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Sizning ta&apos;siringiz
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">
                      Yordam olgan oilalar:
                    </span>
                    <span className="text-2xl font-bold text-gradient-secondary">
                      15,000+
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">Qurilgan uylar:</span>
                    <span className="text-2xl font-bold text-gradient-secondary">
                      160+
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-text-secondary">
                      Yig&apos;ilgan mablag&apos;:
                    </span>
                    <span className="text-2xl font-bold text-gradient-secondary">
                      1M+ USD
                    </span>
                  </div>
                </div>
              </div>

              {/* Monthly Donation Highlight */}
              <div className="bg-gradient-secondary rounded-3xl p-8 shadow-gold border-glow">
                <div className="flex items-center gap-4 mb-6">
                  <Coffee className="w-8 h-8 text-navy-dark" />
                  <h3 className="text-2xl font-bold text-navy-dark">
                    Oylik yordam
                  </h3>
                </div>
                <p className="text-navy-dark/80 mb-6">
                  Har oy avtomatik yordam berish orqali doimiy ko&apos;mak
                  liniyasi yaratamiz va oilalarga to&apos;liq yordam beramiz.
                </p>
                <button className="w-full bg-navy-dark hover:bg-navy-medium text-white py-4 rounded-xl font-bold transition-colors">
                  Oylik yordam berish
                </button>
              </div>

              {/* Trust Badge */}
              <div className="card-navy p-8 text-center">
                <Shield className="w-16 h-16 text-success mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-4">
                  100% Xavfsiz va Shaffof
                </h3>
                <p className="text-text-secondary">
                  Barcha to&apos;lovlar xavfsiz va shaffof. Har bir so&apos;m
                  qayerga sarflanganini ko&apos;rishingiz mumkin.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
