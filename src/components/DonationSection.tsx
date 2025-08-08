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
      className="py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-red-200"
            >
              <Heart className="w-5 h-5" />
              Yordam Berish
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                SEN HAM QO&apos;SHIL!
              </span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-light">
              Bugun bitta yurakni ilitib, o&apos;zingizni ham o&apos;zgartiring.
              Har bir so&apos;m - bir oilaning umidi. Sizning yordamingiz
              minglab oilalarning hayotini o&apos;zgartiradi.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Enhanced Left Section - Donation Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-10 border border-gray-200 shadow-xl"
            >
              <div className="flex items-center justify-between mb-10">
                <h3 className="text-3xl font-bold text-gray-900">
                  Yordam miqdorini tanlang
                </h3>
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-semibold border border-green-200">
                  <Shield className="w-4 h-4" />
                  Xavfsiz to&apos;lov
                </div>
              </div>

              {/* Enhanced Amount Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {donationAmounts.map((item, idx) => (
                  <motion.button
                    key={item.amount}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => handleAmountSelect(item.amount)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-6 border-2 rounded-2xl text-left transition-all duration-300 cursor-pointer ${
                      selectedAmount === item.amount
                        ? "border-red-600 bg-red-50 shadow-lg"
                        : "border-gray-200 hover:border-gray-300 hover:bg-gray-50 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 cursor-pointer ${
                          selectedAmount === item.amount
                            ? "bg-red-600 text-white shadow-lg"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <div className="font-bold text-xl text-gray-900">
                          {item.label}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </div>
                    <div className="text-sm font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-lg inline-block">
                      {item.impact}
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Enhanced Custom Amount */}
              <div className="mb-10">
                <label className="block text-gray-900 font-semibold mb-4 text-lg">
                  Yoki o&apos;zingiz miqdorni kiriting:
                </label>
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Miqdorni kiriting..."
                    className={`w-full px-8 py-6 pr-24 bg-white border-2 rounded-2xl text-gray-900 placeholder-gray-500 focus:ring-4 focus:ring-red-200 focus:border-red-600 transition-all duration-300 text-xl font-medium cursor-text ${
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
                  <div className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500 font-semibold text-lg">
                    so&apos;m
                  </div>
                </div>
                {amountError && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-red-600 text-sm flex items-center gap-3 bg-red-50 border border-red-200 rounded-xl px-6 py-4 cursor-default"
                  >
                    <AlertCircle className="w-5 h-5" />
                    {amountError}
                  </motion.div>
                )}
              </div>

              {/* Enhanced Monthly Donation */}
              <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-2xl mb-10 flex items-center gap-4 border border-gray-200 cursor-pointer">
                <input
                  type="checkbox"
                  id="monthly"
                  className="w-6 h-6 text-red-600 bg-white border-gray-300 rounded-lg focus:ring-red-500 focus:ring-2 cursor-pointer"
                />
                <label
                  htmlFor="monthly"
                  className="text-gray-900 font-semibold flex-1 text-lg cursor-pointer"
                >
                  Har oy avtomatik yordam berish
                </label>
                <div className="bg-red-600 text-white text-sm font-bold px-4 py-2 rounded-xl cursor-pointer">
                  Tavsiya etiladi
                </div>
              </div>

              {/* Enhanced Main Donate Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-6 rounded-2xl text-xl font-bold flex items-center justify-center gap-4 mb-8 transition-all duration-300 shadow-lg cursor-pointer ${
                  getFinalAmount()
                    ? "bg-red-600 text-white hover:bg-red-700 hover:shadow-xl"
                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                }`}
                disabled={!getFinalAmount()}
              >
                <Heart className="w-6 h-6" />
                {getFinalAmount() ? (
                  <>
                    <span>
                      {getFinalAmount()?.toLocaleString()} SO&apos;M YORDAM
                      BERISH
                    </span>
                    <ArrowRight className="w-6 h-6" />
                  </>
                ) : (
                  <span>Miqdorni tanlang</span>
                )}
              </motion.button>

              {/* Enhanced Security Badge */}
              <div className="flex items-center justify-center gap-3 text-gray-600 text-sm border-t border-gray-200 pt-6 cursor-default">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="font-medium">
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
              className="space-y-10"
            >
              {/* Enhanced Impact Card */}
              <div className="bg-white rounded-3xl p-10 border border-gray-200 shadow-xl">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Sizning ta&apos;siringiz
                    </h3>
                    <p className="text-gray-600">
                      Har bir so&apos;m hisoblanadi
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {impactItems.map((item, idx) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: idx * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color}`}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">
                          {item.title}
                        </div>
                        <div className="text-sm text-gray-600">
                          {item.description}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-gray-900">
                          {item.amount}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 text-white">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-4">
                    Nima uchun ishonishimiz kerak?
                  </h3>
                  <p className="text-gray-300">
                    Bizning ishonchli va shaffof yordam tizimimiz
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-400" />
                    </div>
                    <h4 className="font-semibold mb-2">100% Shaffof</h4>
                    <p className="text-sm text-gray-300">
                      Har bir so&apos;m hisoblanadi va ko&apos;rsatiladi
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Zap className="w-8 h-8 text-yellow-400" />
                    </div>
                    <h4 className="font-semibold mb-2">Bevosita Yordam</h4>
                    <p className="text-sm text-gray-300">
                      O&apos;rtadagi odamlar yo&apos;q, bevosita oilalarga
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Star className="w-8 h-8 text-blue-400" />
                    </div>
                    <h4 className="font-semibold mb-2">Ishonchli</h4>
                    <p className="text-sm text-gray-300">
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
