"use client";

import { motion } from "framer-motion";
import { Star, Heart, Home, Gift, Quote } from "lucide-react";

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
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center lg:text-left mb-12 lg:mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold border border-red-200 mb-6"
            >
              <Heart className="w-5 h-5" />
              Foydalanuvchilar Fikri
            </motion.div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Hikoyalar
              </span>{" "}
              va shukrona hislar
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto lg:mx-0 mb-8 lg:mb-12">
              Har bir oilaning hikoyasi - bu bizning motivatsiyamiz. Sizning
              yordamingiz bilan qancha oilaning hayoti o&apos;zgardi, ularning
              so&apos;zlari bilan tanishing.
            </p>

            {/* Enhanced Trust Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-lg mx-auto lg:mx-0">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.01 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">
                      5,000+
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 font-medium">
                      Yordam berilgan oila
                    </div>
                  </div>
                </div>
                <div className="text-gray-700 font-semibold text-xs md:text-sm">
                  Har bir oila bizning oilamiz
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.01 }}
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-green-600 fill-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900">
                      100%
                    </div>
                    <div className="text-xs md:text-sm text-gray-500 font-medium">
                      Mamnuniyat
                    </div>
                  </div>
                </div>
                <div className="text-gray-700 font-semibold text-xs md:text-sm">
                  Har bir oila mamnun
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Mobile-First Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
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
                whileHover={{ y: -6, scale: 1.02 }}
                className="group bg-white rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col h-full relative overflow-hidden"
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

                {/* Quote Icon */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div
                    className={`w-14 h-14 ${testimonial.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                  >
                    <Quote className="w-7 h-7 text-gray-600" />
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
                <div className="flex-1 mb-8 relative z-10">
                  <blockquote className="text-gray-700 text-lg leading-relaxed font-light italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                </div>

                {/* Author Section */}
                <div className="mt-auto relative z-10">
                  <div className="flex flex-col gap-4">
                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl flex items-center justify-center shadow-lg">
                        <span className="text-gray-700 font-bold text-xl">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-900 text-lg truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-500 truncate">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div
                      className={`inline-flex items-center gap-3 ${testimonial.color} px-4 py-3 rounded-2xl text-sm font-semibold w-fit shadow-md hover:shadow-lg transition-shadow duration-300`}
                    >
                      <testimonial.icon className="w-5 h-5 flex-shrink-0" />
                      <span className="truncate">{testimonial.category}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-12 md:mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Siz ham o&apos;z hikoyangizni yozing
              </h3>
              <p className="text-gray-300 text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
                Yurak Amri yordami bilan hayotingiz o&apos;zgangan bo&apos;lsa,
                boshqa oilalarga ham umid bering. Sizning hikoyangiz boshqalarga
                ilhom beradi.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg hover:bg-red-700 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <Heart className="w-4 h-4 md:w-5 md:h-5" />
                Hikoyangizni yozing
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
