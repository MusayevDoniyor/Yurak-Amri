"use client";

import { motion } from "framer-motion";
import { Star, Heart, Home, Gift, Quote, ArrowRight } from "lucide-react";

// Add Mavluda opa back to the testimonials list
const testimonials = [
  {
    id: 1,
    name: "Mavluda opa",
    location: "Farg'ona viloyati",
    rating: 5,
    text: "Biz shunchaki ro'yxatda turgan oilamiz deb o'ylagandik. Lekin Yurak Amri bizga insoniylik, or-nomus va umid hadya qildi. Endi farzandim maktabga bormoqda. Rahmat sizlarga.",
    category: "Uy qurish",
    icon: Home,
    color: "bg-blue-100 text-blue-700",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    name: "Sardor aka",
    location: "Bo'ka tumani",
    rating: 5,
    text: "Yurak Amri yordami bilan oilamiz yangi uyga ko'chdi. Bu faqat uy emas, bu yangi hayot boshlash imkoniyati. Hammadan rahmat!",
    category: "Oziq-ovqat",
    icon: Gift,
    color: "bg-green-100 text-green-700",
    bgColor: "bg-green-50",
  },
  {
    id: 3,
    name: "Dilfuza opa",
    location: "Toshkent viloyati",
    rating: 5,
    text: "Farzandlarim uchun kiyim va oziq-ovqat yordami oldik. Bu yordam bizga juda kerak edi. Yurak Amri haqiqatan ham yurakdan ishlaydi.",
    category: "Bolalar yordami",
    icon: Heart,
    color: "bg-red-100 text-red-700",
    bgColor: "bg-red-50",
  },
  {
    id: 4,
    name: "Aziz aka",
    location: "Andijon viloyati",
    rating: 5,
    text: "Uy ta'mirlash uchun yordam oldik. Endi oilamiz xavfsiz va qulay sharoitda yashaydi. Bu yordamni hech qachon unutmaymiz.",
    category: "Uy ta'mirlash",
    icon: Home,
    color: "bg-purple-100 text-purple-700",
    bgColor: "bg-purple-50",
  },
  {
    id: 5,
    name: "Malika opa",
    location: "Namangan viloyati",
    rating: 5,
    text: "Bolalarim uchun ta'lim materiallari oldik. Endi ular maktabda yaxshi o'qiyapti. Yurak Amri haqiqatan ham oilalarga yordam beradi.",
    category: "Ta'lim yordami",
    icon: Gift,
    color: "bg-yellow-100 text-yellow-700",
    bgColor: "bg-yellow-50",
  },
  {
    id: 6,
    name: "Rustam aka",
    location: "Qashqadaryo viloyati",
    rating: 5,
    text: "Tibbiy yordam oldik. Endi sog'ligim yaxshilandi va oilamni qo'llab-quvvatlay olaman. Rahmat Yurak Amri jamoasiga!",
    category: "Tibbiy yordam",
    icon: Heart,
    color: "bg-indigo-100 text-indigo-700",
    bgColor: "bg-indigo-50",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Enhanced Left Section - Header and Introduction */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-8 lg:sticky lg:top-32"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold border border-red-200"
                >
                  <Heart className="w-5 h-5" />
                  Foydalanuvchilar Fikri
                </motion.div>

                <h2 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    Hikoyalar
                  </span>{" "}
                  va shukrona hislar
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed font-light">
                  Har bir oilaning hikoyasi - bu bizning motivatsiyamiz. Sizning
                  yordamingiz bilan qancha oilaning hayoti o&apos;zgardi,
                  ularning so&apos;zlari bilan tanishing.
                </p>

                {/* Trust Statistics */}
                <div className="grid grid-cols-2 gap-6 pt-8">
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      5,000+
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Yordam berilgan oila
                    </div>
                  </div>
                  <div className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      100%
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      Mamnuniyat
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Right Section - Testimonials Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-6">
                      <div
                        className={`w-12 h-12 ${testimonial.bgColor} rounded-2xl flex items-center justify-center`}
                      >
                        <Quote className="w-6 h-6 text-gray-600" />
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 font-light">
                      &ldquo;{testimonial.text}&rdquo;
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                          <span className="text-gray-700 font-bold text-lg">
                            {testimonial.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </span>
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {testimonial.location}
                          </div>
                        </div>
                      </div>

                      {/* Category Badge */}
                      <div
                        className={`inline-flex items-center gap-2 ${testimonial.color} px-4 py-2 rounded-full text-sm font-medium`}
                      >
                        <testimonial.icon className="w-4 h-4" />
                        {testimonial.category}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="mt-16 text-center"
              >
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
                  <h3 className="text-3xl font-bold mb-4">
                    Siz ham o&apos;z hikoyangizni yozing
                  </h3>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                    Yurak Amri yordami bilan hayotingiz o&apos;zgangan
                    bo&apos;lsa, boshqa oilalarga ham umid bering. Sizning
                    hikoyangiz boshqalarga ilhom beradi.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    <Heart className="w-5 h-5" />
                    Hikoyangizni yozing
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
