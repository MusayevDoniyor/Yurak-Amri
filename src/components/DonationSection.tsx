"use client";

import { motion } from "framer-motion";
import {
  Heart,
  CreditCard,
  Shield,
  ArrowRight,
  CheckCircle,
  Coffee,
  CreditCard as UzCard,
  CreditCard as Humo,
  CreditCard as Visa,
  CreditCard as MasterCard,
  Smartphone,
} from "lucide-react";
import { useState, useEffect } from "react";

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
  { name: "UzCard", icon: UzCard },
  { name: "Humo", icon: Humo },
  { name: "Visa", icon: Visa },
  { name: "MasterCard", icon: MasterCard },
];

export default function DonationSection() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setSelectedAmount(10000);
  }, []);

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-gradient-primary">SEN HAM</span> QO&apos;SHIL!
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bugun bitta yurakni ilitib, o&apos;zingizni ham o&apos;zgartiring.
            Pastdagi tugma orqali xayriya qiling — kartangiz bilan
            to&apos;g&apos;ridan-to&apos;g&apos;ri, xavfsiz va shaffof.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-slate-200"
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Heart className="w-4 h-4 fill-green-700" />
                Xayriya miqdori
              </div>

              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Qancha yordam bermoqchisiz?
              </h3>

              <p className="text-slate-600">
                Har bir so&apos;m bir oilaning hayotini o&apos;zgartiradi
              </p>
            </div>

            {/* Amount Selection */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {donationAmounts.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedAmount(item.amount)}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    isClient && selectedAmount === item.amount
                      ? "border-green-600 bg-green-50 text-green-700 shadow-lg"
                      : "border-slate-300 hover:border-green-600 bg-white hover:bg-green-50/50"
                  }`}
                >
                  <div
                    className={`font-bold text-lg ${
                      isClient && selectedAmount === item.amount
                        ? "text-green-700"
                        : "text-slate-700"
                    }`}
                  >
                    {item.label}
                  </div>

                  <div
                    className={`text-sm ${
                      isClient && selectedAmount === item.amount
                        ? "text-green-700"
                        : "text-slate-600"
                    }`}
                  >
                    {item.description}
                  </div>
                </button>
              ))}
            </div>

            {/* Custom Amount */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Yoki o&apos;zingiz miqdorni kiriting:
              </label>

              <input
                type="number"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                placeholder="Miqdorni kiriting..."
                className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl focus:ring-2 focus:ring-green-600 focus:border-green-600 bg-white text-slate-900 placeholder-slate-500 transition-all duration-300"
              />
            </div>

            {/* Monthly Donation */}
            <div className="mb-8">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={isMonthly}
                  onChange={(e) => setIsMonthly(e.target.checked)}
                  className="w-5 h-5 text-green-600 border-slate-300 rounded focus:ring-green-600"
                />

                <div>
                  <div className="font-semibold text-slate-900">
                    Har oylik xayriya
                  </div>

                  <div className="text-sm text-slate-600">
                    Har oyda 10,000 so&apos;m – bu sizga bitta kofe. Lekin bir
                    oilaga esa, non.
                  </div>
                </div>
              </label>
            </div>

            {/* Payment Methods */}
            <div className="mb-8">
              <div className="text-sm font-medium text-slate-700 mb-3">
                Qabul qilinadi:
              </div>

              <div className="flex flex-wrap gap-2">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-100 rounded-lg text-sm text-slate-700"
                  >
                    <method.icon className="w-4 h-4" />
                    <span>{method.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Donate Button */}
            <button
              onClick={() =>
                window.open("https://payme.uz/@yurakamri", "_blank")
              }
              className="btn-secondary w-full text-white py-4 rounded-xl text-lg font-semibold flex items-center justify-center gap-2 shadow-xl mb-4"
            >
              <CreditCard className="w-5 h-5" />
              HOZIR YORDAM BERISH
              <ArrowRight className="w-5 h-5" />
            </button>

            {/* Security Notice */}
            <div className="flex items-center gap-2 mb-6 text-sm text-slate-600">
              <Shield className="w-4 h-4 text-green-600" />
              100% xavfsiz va shaffof to&apos;lov
            </div>

            {/* Additional Payment Links */}
            <div className="pt-6 border-t border-slate-200">
              <div className="text-sm font-medium text-slate-700 mb-3">
                Qo&apos;shimcha to&apos;lov usullari:
              </div>

              <div className="flex flex-wrap gap-2">
                <a
                  href="https://payme.uz/@yurakamri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <CreditCard className="w-4 h-4" />
                  PayMe
                </a>

                <a
                  href="https://click.uz/@yurakamri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <CreditCard className="w-4 h-4" />
                  Click
                </a>

                <a
                  href="tel:+998712345678"
                  className="inline-flex items-center gap-2 px-3 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  Telefon
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Impact Stats */}
            <div className="bg-gradient-primary text-white rounded-3xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6">
                Sizning ta&apos;siringiz
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span>15,000+ oila yordam olgan</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span>160+ uy qurilgan</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span>1,2 mln USD qiymatdagi yordam</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span>365/24 faol ko&apos;mak liniyasi</span>
                </div>
              </div>
            </div>

            {/* Monthly Donation Highlight */}
            <div className="bg-gradient-secondary text-white rounded-3xl p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-4">
                <Coffee className="w-8 h-8 text-amber-200" />
                <h3 className="text-xl font-bold">Har oylik yordam</h3>
              </div>

              <p className="text-amber-50/90 text-md mb-6">
                Har oyda 10,000 so&apos;m - bu sizga bitta kofe. Lekin bir
                oilaga esa, non.
              </p>

              <button className="bg-white hover:bg-amber-50 text-amber-700 px-6 py-3 rounded-xl font-semibold transition-colors">
                Avtomatik xayriya
              </button>
            </div>

            {/* Trust Badge */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-200">
              <div className="text-center">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />

                <h4 className="font-bold text-slate-900 mb-2">
                  100% Shaffoflik
                </h4>

                <p className="text-slate-600 text-sm">
                  Barcha xayriya miqdorlari va ularning taqsimlanishi
                  to&apos;liq ochiq va nazorat ostida
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
