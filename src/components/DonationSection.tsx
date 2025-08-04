"use client";

import { motion } from "framer-motion";
import {
  Heart,
  CreditCard,
  Shield,
  ArrowRight,
  CheckCircle,
  Gift,
  Home,
  Users,
  AlertCircle,
  TrendingUp,
} from "lucide-react";
import React from "react";

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
  const [customAmount, setCustomAmount] = React.useState<string>("");
  const [amountError, setAmountError] = React.useState<string>("");
  const [selectedAmount, setSelectedAmount] = React.useState<number | null>(
    null
  );

  const validateAmount = (value: string) => {
    const numValue = parseFloat(value);

    if (value === "") {
      setAmountError("");
      return true;
    }

    if (isNaN(numValue)) {
      setAmountError("Iltimos, to&apos;g&apos;ri raqam kiriting");
      return false;
    }

    if (numValue < 0) {
      setAmountError("Manfiy son kiritish mumkin emas");
      return false;
    }

    if (numValue < 1000) {
      setAmountError("Minimal miqdor 1,000 so&apos;m");
      return false;
    }

    setAmountError("");
    return true;
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null);
    validateAmount(value);
  };

  const getFinalAmount = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount && !amountError)
      return parseFloat(customAmount.replace(/\s/g, ""));
    return null;
  };

  return (
    <section id="donation" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Heart className="w-4 h-4" />
              Yordam Berish
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-medium text-gray-900 mb-6">
              SEN HAM QO&apos;SHIL!
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Bugun bitta yurakni ilitib, o&apos;zingizni ham o&apos;zgartiring.
              Har bir so&apos;m - bir oilaning umidi. Sizning yordamingiz
              minglab oilalarning hayotini o&apos;zgartiradi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-gray-900">
                  Yordam miqdorini tanlang
                </h3>
                <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Xavfsiz to&apos;lov
                </div>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {donationAmounts.map((item, idx) => (
                  <motion.button
                    key={item.amount}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => handleAmountSelect(item.amount)}
                    className={`p-4 border-2 rounded-xl text-left transition-all duration-300 ${
                      selectedAmount === item.amount
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          selectedAmount === item.amount
                            ? "bg-gray-900 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div className="font-bold text-gray-900">
                        {item.label}
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {item.description}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="mb-8">
                <label className="block text-gray-900 font-medium mb-3">
                  Yoki o&apos;zingiz miqdorni kiriting:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Miqdorni kiriting..."
                    className={`w-full px-6 py-4 pr-20 bg-white border-2 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-gray-200 focus:border-gray-900 transition-all duration-300 text-lg font-medium ${
                      amountError
                        ? "border-red-300 bg-red-50"
                        : customAmount && !selectedAmount
                        ? "border-gray-900 bg-gray-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    value={customAmount}
                    onChange={handleAmountChange}
                    min="1000"
                  />
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium text-sm">
                    so&apos;m
                  </div>
                </div>
                {amountError && (
                  <div className="mt-3 text-red-600 text-sm flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                    <AlertCircle className="w-5 h-5" />
                    {amountError}
                  </div>
                )}
              </div>

              {/* Monthly Donation */}
              <div className="bg-gray-50 p-4 rounded-xl mb-8 flex items-center gap-3 border border-gray-200">
                <input
                  type="checkbox"
                  id="monthly"
                  className="w-5 h-5 text-gray-900 bg-white border-gray-300 rounded focus:ring-gray-500 focus:ring-2"
                />
                <label
                  htmlFor="monthly"
                  className="text-gray-900 font-medium flex-1"
                >
                  Har oy avtomatik yordam berish
                </label>
                <div className="bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded">
                  Tavsiya etiladi
                </div>
              </div>

              {/* Main Donate Button */}
              <button
                className={`w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 mb-8 transition-all duration-300 ${
                  getFinalAmount()
                    ? "bg-gray-900 text-white hover:bg-gray-800"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!getFinalAmount()}
              >
                <Heart className="w-5 h-5" />
                {getFinalAmount() ? (
                  <>
                    <span>
                      {getFinalAmount()?.toLocaleString()} SO&apos;M YORDAM
                      BERISH
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                ) : (
                  <span>Miqdorni tanlang</span>
                )}
              </button>

              {/* Security Badge */}
              <div className="flex items-center justify-center gap-2 text-gray-600 text-sm border-t border-gray-200 pt-4">
                <Shield className="w-4 h-4 text-green-600" />
                To&apos;lovlar 100% xavfsiz va shaffof
              </div>
            </motion.div>

            {/* Right Section - Impact Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Impact Card */}
              <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-gray-900" />
                  Sizning ta&apos;siringiz
                </h3>

                <div className="space-y-6">
                  {impactItems.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-gray-900" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="font-bold text-gray-900">
                            {item.title}
                          </div>
                          <div className="text-gray-900 font-bold text-right">
                            {item.amount}
                          </div>
                        </div>
                        <div className="text-gray-600 text-sm">
                          {item.description}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-gray-900 font-bold">
                      Jami yordam ko&apos;rsatilgan:
                    </div>
                    <div className="text-2xl font-bold text-gray-900">
                      15,200+ oila
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gray-900 h-full rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                  <div className="text-gray-600 text-sm text-right mt-1">
                    2025-yil maqsadi: 20,000 oila
                  </div>
                </div>
              </div>

              {/* Additional Payment Methods */}
              <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
                <div className="text-gray-900 font-bold mb-4">
                  Qo&apos;shimcha to&apos;lov usullari:
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <a
                    href="https://payme.uz/@yurakamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                      <CreditCard className="w-5 h-5 text-gray-900" />
                    </div>
                    <span className="text-gray-900 text-sm font-medium">
                      PayMe
                    </span>
                  </a>
                  <a
                    href="https://click.uz/@yurakamri"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                      <CreditCard className="w-5 h-5 text-gray-900" />
                    </div>
                    <span className="text-gray-900 text-sm font-medium">
                      Click
                    </span>
                  </a>
                  <a
                    href="tel:+998712345678"
                    className="flex flex-col items-center gap-2 p-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors"
                  >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-200">
                      <CreditCard className="w-5 h-5 text-gray-900" />
                    </div>
                    <span className="text-gray-900 text-sm font-medium">
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
