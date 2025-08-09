"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  ArrowRight,
  CheckCircle,
  Gift,
  Home,
  Users,
  AlertCircle,
  TrendingUp,
  Star,
  Zap,
} from "lucide-react";
import React from "react";

const donationAmounts = [
  {
    amount: 10000,
    label: "10,000 so'm",
    description: "Bir oilaga non",
    icon: Gift,
    impact: "1 oila uchun non",
  },
  {
    amount: 50000,
    label: "50,000 so'm",
    description: "Oila uchun oziq-ovqat",
    icon: Gift,
    impact: "1 oila uchun oziq-ovqat",
  },
  {
    amount: 100000,
    label: "100,000 so'm",
    description: "Bolalar uchun kiyim",
    icon: Users,
    impact: "2 bola uchun kiyim",
  },
  {
    amount: 500000,
    label: "500,000 so'm",
    description: "Uy ta'mirlash",
    icon: Home,
    impact: "1 uy ta'mirlash",
  },
];

const impactItems = [
  {
    title: "Bir oilaga non",
    description:
      "10,000 so'm bilan bir oilaga bir kunlik non ta'minlash mumkin",
    amount: "10,000 so'm",
    icon: Gift,
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Bir bolaga ta'lim",
    description:
      "100,000 so'm bilan bir bolaga bir oylik ta'lim materiallari berish mumkin",
    amount: "100,000 so'm",
    icon: Users,
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Bir uyni ta'mirlash",
    description:
      "500,000 so'm bilan bir uyni asosiy ta'mirlash ishlari uchun yordam berish mumkin",
    amount: "500,000 so'm",
    icon: Home,
    color: "bg-purple-100 text-purple-700",
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
    setAmountError("");
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setSelectedAmount(null);
    validateAmount(value);
  };

  const getFinalAmount = () => {
    if (selectedAmount) return selectedAmount;
    if (customAmount && !amountError) return parseFloat(customAmount);
    return null;
  };

  return (
    <section
      id="donation"
      className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
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
              className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-red-200 font-secondary"
            >
              <Heart className="w-5 h-5" />
              Yordam Berish
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display"
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                SEN HAM QO&apos;SHIL!
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed font-primary"
            >
              Bugun bitta yurakni ilitib, o&apos;zingizni ham o&apos;zgartiring.
              Har bir so&apos;m - bir oilaning umidi. Sizning yordamingiz
              minglab oilalarning hayotini o&apos;zgartiradi.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            {/* Enhanced Left Section - Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 font-secondary">
                  Yordam miqdorini tanlang
                </h3>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200 w-fit font-secondary">
                  <Shield className="w-4 h-4" />
                  Xavfsiz to&apos;lov
                </div>
              </div>

              {/* Enhanced Amount Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {donationAmounts.map((item, idx) => (
                  <motion.button
                    key={item.amount}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => handleAmountSelect(item.amount)}
                    whileHover={{ y: -4, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 border-2 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                      selectedAmount === item.amount
                        ? "border-red-600 bg-red-50 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          selectedAmount === item.amount
                            ? "bg-red-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-lg text-gray-900 truncate font-secondary">
                          {item.label}
                        </div>
                        <div className="text-sm text-gray-500 truncate font-primary">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-lg inline-block font-primary">
                      {item.impact}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Enhanced Custom Amount */}
              <div className="mb-8">
                <label className="block text-gray-900 font-semibold mb-4 text-base font-secondary">
                  Yoki o&apos;zingiz miqdorni kiriting:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Miqdorni kiriting..."
                    className={`w-full px-6 py-4 pr-20 bg-white border-2 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-red-200 focus:border-red-600 transition-all duration-300 text-lg font-medium cursor-text ${
                      amountError
                        ? "border-red-300 bg-red-50"
                        : customAmount && !selectedAmount
                        ? "border-red-600 bg-red-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    value={customAmount}
                    onChange={handleAmountChange}
                    min="1000"
                  />
                  <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-base">
                    so&apos;m
                  </div>
                </div>
                {amountError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-red-600 text-sm flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 cursor-default"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{amountError}</span>
                  </motion.div>
                )}
              </div>

              {/* Enhanced Monthly Donation */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl mb-8 flex items-center gap-4 border border-gray-200 cursor-pointer hover:shadow-lg transition-all duration-300">
                <input
                  type="checkbox"
                  id="monthly"
                  className="w-5 h-5 text-red-600 bg-white border-gray-300 rounded-lg focus:ring-red-500 focus:ring-2 cursor-pointer flex-shrink-0"
                />
                <label
                  htmlFor="monthly"
                  className="text-gray-900 font-semibold flex-1 text-base cursor-pointer font-secondary"
                >
                  Har oy avtomatik yordam berish
                </label>
                <div className="bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-lg cursor-pointer flex-shrink-0">
                  Tavsiya etiladi
                </div>
              </div>

              {/* Enhanced Main Donate Button */}
              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl text-lg font-bold flex items-center justify-center gap-3 mb-6 transition-all duration-300 shadow-lg cursor-pointer ${
                  getFinalAmount()
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800 hover:shadow-xl"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!getFinalAmount()}
              >
                <Heart className="w-5 h-5" />
                {getFinalAmount() ? (
                  <>
                    <span className="text-base">
                      {getFinalAmount()?.toLocaleString()} SO&apos;M YORDAM
                      BERISH
                    </span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                ) : (
                  <span className="text-base">Miqdorni tanlang</span>
                )}
              </motion.button>

              {/* Enhanced Security Badge */}
              <div className="flex items-center justify-center gap-3 text-gray-600 text-sm border-t border-gray-200 pt-6 cursor-default">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="font-semibold text-center font-primary">
                  To&apos;lovlar 100% xavfsiz va shaffof
                </span>
              </div>
            </motion.div>

            {/* Enhanced Right Section - Impact Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Enhanced Impact Card */}
              <div className="bg-white rounded-2xl p-4 md:p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6 md:mb-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-red-100 rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg mx-auto md:mx-0">
                    <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-red-600" />
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 font-secondary">
                      Sizning ta&apos;siringiz
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 font-primary">
                      Har bir so&apos;m hisoblanadi
                    </p>
                  </div>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {impactItems.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex flex-col sm:flex-row sm:items-start gap-3 md:gap-4 p-3 md:p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                    >
                      <div
                        className={`w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0 ${item.color}`}
                      >
                        <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1 min-w-0 text-center sm:text-left">
                        <div className="font-semibold text-gray-900 text-sm md:text-base mb-1 font-secondary">
                          {item.title}
                        </div>
                        <div className="text-xs md:text-sm text-gray-600 leading-relaxed font-primary">
                          {item.description}
                        </div>
                      </div>
                      <div className="text-center sm:text-right flex-shrink-0">
                        <div className="font-bold text-gray-900 text-sm md:text-base font-secondary">
                          {item.amount}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-4 md:p-8 text-white shadow-lg">
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-secondary">
                    Nima uchun ishonishimiz kerak?
                  </h3>
                  <p className="text-sm md:text-base text-gray-300 font-primary">
                    Bizning ishonchli va shaffof yordam tizimimiz
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                      <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                    </div>
                    <h4 className="font-bold mb-2 md:mb-3 text-sm md:text-base font-secondary">
                      100% Shaffof
                    </h4>
                    <p className="text-xs md:text-sm text-gray-300 font-primary">
                      Har bir so&apos;m hisoblanadi va ko&apos;rsatiladi
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                      <Zap className="w-6 h-6 md:w-8 md:h-8 text-yellow-400" />
                    </div>
                    <h4 className="font-bold mb-2 md:mb-3 text-sm md:text-base font-secondary">
                      Bevosita Yordam
                    </h4>
                    <p className="text-xs md:text-sm text-gray-300 font-primary">
                      O&apos;rtadagi odamlar yo&apos;q, bevosita oilalarga
                    </p>
                  </div>
                  <div className="text-center sm:col-span-2 lg:col-span-1">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg">
                      <Star className="w-6 h-6 md:w-8 md:h-8 text-blue-400" />
                    </div>
                    <h4 className="font-bold mb-2 md:mb-3 text-sm md:text-base font-secondary">
                      Ishonchli
                    </h4>
                    <p className="text-xs md:text-sm text-gray-300 font-primary">
                      5 yillik tajriba va minglab oilalar
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
