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
  Calendar,
  Gift,
  Home,
  Users,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";
import React from "react"; // Added for state management

const donationAmounts = [
  {
    amount: 10000,
    label: "10,000 so'm",
    description: "Bir oilaga non",
    icon: Gift,
  },
  {
    amount: 50000,
    label: "50,000 so'm",
    description: "Oila uchun oziq-ovqat",
    icon: Gift,
  },
  {
    amount: 100000,
    label: "100,000 so'm",
    description: "Bolalar uchun kiyim",
    icon: Users,
  },
  {
    amount: 500000,
    label: "500,000 so'm",
    description: "Uy ta'mirlash",
    icon: Home,
  },
];

const paymentMethods = [
  { name: "UzCard", icon: CreditCard, logo: "/yurak_amri.webp" }, // Placeholder - would be replaced with actual payment logos
  { name: "Humo", icon: CreditCard, logo: "/yurak_amri.webp" },
  { name: "Visa", icon: CreditCard, logo: "/yurak_amri.webp" },
  { name: "MasterCard", icon: CreditCard, logo: "/yurak_amri.webp" },
];

const impactItems = [
  {
    title: "Bir oilaga non",
    description:
      "10,000 so'm bilan bir oilaga bir kunlik non ta'minlash mumkin",
    amount: "10,000 so'm",
    icon: Gift,
  },
  {
    title: "Bir bolaga ta'lim",
    description:
      "100,000 so'm bilan bir bolaga bir oylik ta'lim materiallari berish mumkin",
    amount: "100,000 so'm",
    icon: Users,
  },
  {
    title: "Bir uyni ta'mirlash",
    description:
      "500,000 so'm bilan bir uyni asosiy ta'mirlash ishlari uchun yordam berish mumkin",
    amount: "500,000 so'm",
    icon: Home,
  },
];

export default function DonationSection() {
  // Add state for custom amount
  const [customAmount, setCustomAmount] = React.useState<string>("");
  const [amountError, setAmountError] = React.useState<string>("");

  // Validation function
  const validateAmount = (value: string) => {
    const numValue = parseFloat(value);

    if (value === "") {
      setAmountError("");
      return true;
    }

    if (isNaN(numValue)) {
      setAmountError("Iltimos, to'g'ri raqam kiriting");
      return false;
    }

    if (numValue < 0) {
      setAmountError("Manfiy son kiritish mumkin emas");
      return false;
    }

    if (numValue < 1000) {
      setAmountError("Minimal miqdor 1,000 so'm");
      return false;
    }

    setAmountError("");
    return true;
  };

  // Handle amount change
  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    validateAmount(value);
  };

  return (
    <section
      id="yordam"
      className="py-24 bg-gradient-section relative overflow-hidden"
    >
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
              <Heart className="w-4 h-4" />
              Yordam Berish
            </div>
            <h2 className="heading-corporate text-4xl md:text-5xl font-black mb-6">
              <span className="text-primary">SEN HAM</span>{" "}
              <span className="text-text-primary">QO&apos;SHIL!</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Bugun bitta yurakni ilitib, o&apos;zingizni ham o&apos;zgartiring.
              Har bir so&apos;m - bir oilaning umidi. Sizning yordamingiz
              minglab oilalarning hayotini o&apos;zgartiradi.
            </p>
          </motion.div>

          {/* Featured Impact Banner */}
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
                    Har oyda 10,000 so&apos;m
                  </div>
                  <div className="text-white text-xl md:text-2xl font-bold mb-4">
                    Bu sizga bitta kofe. Lekin bir oilaga esa, non.
                  </div>
                  <button className="bg-white text-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Menga avtomatik xayriya eslatmasi yuboring
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form - New Design */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="card p-8 shadow-lg"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-text-primary">
                  Yordam miqdorini tanlang
                </h3>
                <div className="inline-flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full text-xs font-bold">
                  <CheckCircle className="w-3 h-3" />
                  Xavfsiz to&apos;lov
                </div>
              </div>

              {/* Amount Selection - New Design */}
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
                    className="p-4 border-2 border-border rounded-xl text-left hover:border-primary hover:bg-primary/5 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                        <item.icon className="w-4 h-4 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div className="font-bold text-text-primary text-lg">
                        {item.label}
                      </div>
                    </div>
                    <div className="text-text-secondary text-sm">
                      {item.description}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount - New Design */}
              <div className="mb-8">
                <label className="block text-text-primary font-medium mb-3">
                  Yoki o&apos;zingiz miqdorni kiriting:
                </label>

                <div className="relative">
                  <input
                    type="number"
                    placeholder="Miqdorni kiriting..."
                    className={`w-full px-4 py-4 pr-16 bg-card-hover border-2 rounded-xl text-text-primary placeholder-text-secondary focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 text-lg font-medium ${
                      amountError ? "border-red-500" : "border-border"
                    }`}
                    value={customAmount}
                    onChange={handleAmountChange}
                    min="1000"
                  />
                  <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-text-secondary font-medium text-sm">
                    so&apos;m
                  </div>
                </div>
                {amountError && (
                  <div className="mt-2 text-red-500 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {amountError}
                  </div>
                )}
              </div>

              {/* Monthly Donation - New Design */}
              <div className="bg-primary/5 p-4 rounded-xl mb-8 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="monthly"
                  className="w-5 h-5 text-primary bg-white border-primary rounded focus:ring-primary focus:ring-2"
                />
                <label
                  htmlFor="monthly"
                  className="text-text-primary font-medium flex-1"
                >
                  Har oy avtomatik yordam berish
                </label>
                <div className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                  Tavsiya etiladi
                </div>
              </div>

              {/* Main Donate Button - New Design */}
              <button className="w-full btn-primary py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 shadow-lg mb-8">
                <Heart className="w-5 h-5" />
                HOZIR YORDAM BERISH
                <ArrowRight className="w-5 h-5" />
              </button>

              {/* Payment Methods - New Design */}
              <div className="mb-8">
                <div className="text-sm text-text-secondary mb-4 text-center">
                  Qabul qilinadi:
                </div>
                <div className="flex justify-center gap-6">
                  {paymentMethods.map((method, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center mb-1 p-2">
                        <Image
                          src={method.logo}
                          alt={method.name}
                          width={32}
                          height={32}
                        />
                      </div>
                      <span className="text-text-secondary text-xs">
                        {method.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-text-secondary text-sm border-t border-border pt-4">
                <Shield className="w-4 h-4 text-success" />
                To&apos;lovlar 100% xavfsiz va shaffof
              </div>
            </motion.div>

            {/* Impact Visualization - New Design */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8"
            >
              {/* Impact Visualization Card */}
              <div className="card p-8">
                <h3 className="text-2xl font-bold text-text-primary mb-6 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Sizning ta&apos;siringiz
                </h3>

                <div className="space-y-6">
                  {impactItems.map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-bold text-text-primary">
                            {item.title}
                          </div>
                          <div className="text-primary font-bold">
                            {item.amount}
                          </div>
                        </div>
                        <div className="text-text-secondary text-sm">
                          {item.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-text-primary font-bold">
                      Jami yordam ko&apos;rsatilgan:
                    </div>
                    <div className="text-2xl font-bold text-primary">
                      15,200+ oila
                    </div>
                  </div>
                  <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-primary h-full rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="text-text-secondary text-sm text-right mt-1">
                    2025-yil maqsadi: 20,000 oila
                  </div>
                </div>
              </div>

              {/* Monthly Donation Highlight - New Design */}
              <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      Oylik yordam
                    </h3>
                    <div className="text-text-secondary text-sm">
                      Doimiy ko&apos;mak liniyasi
                    </div>
                  </div>
                </div>
                <p className="text-text-secondary mb-6">
                  Har oy avtomatik yordam berish orqali doimiy ko&apos;mak
                  liniyasi yaratamiz va oilalarga to&apos;liq yordam beramiz.
                </p>
                <button className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-xl font-bold transition-colors flex items-center justify-center gap-2">
                  <Coffee className="w-5 h-5" />
                  Oylik yordam berish
                </button>
              </div>

              {/* Additional Payment Methods - New Design */}
              <div className="card p-6">
                <div className="text-text-primary font-bold mb-4">
                  Qo&apos;shimcha to&apos;lov usullari:
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://payme.uz/@yurakamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-text-primary text-sm font-medium">
                      PayMe
                    </span>
                  </a>
                  <a
                    href="https://click.uz/@yurakamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-secondary/5 hover:bg-secondary/10 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <CreditCard className="w-5 h-5 text-secondary" />
                    </div>
                    <span className="text-text-primary text-sm font-medium">
                      Click
                    </span>
                  </a>
                  <a
                    href="tel:+998712345678"
                    className="flex flex-col items-center gap-2 p-4 bg-accent/5 hover:bg-accent/10 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Smartphone className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-text-primary text-sm font-medium">
                      Telefon
                    </span>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
