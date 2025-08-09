"use client";

import { motion } from "framer-motion";
import { Heart, Quote, Star } from "lucide-react";
import Image from "next/image";
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Aziza Karimova",
    role: "Oila rahbari",
    text: "Yurak Amri fondi bizning oilamizga juda katta yordam berdi. Uy qurish loyihasi orqali yangi hayot boshladik. Rahmat!",
    rating: 5,
    avatar: "/Sardor_Rahimxon.png",
    bgColor: "bg-red-50",
    color: "bg-red-100 text-red-700",
  },
  {
    id: 2,
    name: "Sardor Rahimxon",
    role: "Fond asoschisi",
    text: "Har bir oila bizning oilamiz. Yurak Amri orqali ko'proq odamlarga yordam berishni xohlaymiz. Hamkorlikda kuch bor.",
    rating: 5,
    avatar: "/Sardor_Rahimxon.png",
    bgColor: "bg-blue-50",
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    name: "Malika Yusupova",
    role: "Ijtimoiy ishchi",
    text: "Fond bilan ishlash tajribasi juda yaxshi. Har bir loyiha - bu hayot o'zgardi. Oilalarning baxtli yuzlari - bizning eng katta muvaffaqiyati.",
    rating: 5,
    avatar: "/Sardor_Rahimxon.png",
    bgColor: "bg-green-50",
    color: "bg-green-100 text-green-700",
  },
  {
    id: 4,
    name: "Jamshid Toshmatov",
    role: "Hamkor",
    text: "Yurak Amri fondi shaffof va ishonchli. Har bir so'm qayerda sarflanganini ko'rish mumkin. Buyuk ish qilayotganlar.",
    rating: 5,
    avatar: "/Sardor_Rahimxon.png",
    bgColor: "bg-purple-50",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white"
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
              className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold border border-red-200 mb-6 font-secondary"
            >
              <Heart className="w-5 h-5" />
              Foydalanuvchilar Fikri
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display"
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                NIMA DEYDI?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg text-gray-600 max-w-3xl mx-auto lg:mx-0 font-light leading-relaxed font-primary"
            >
              Har bir foydalanuvchi fikri - bizning eng katta boyligimiz.
              Oilalarning baxtli yuzlari va ularning minnatdorchiligi - bizning
              eng katta muvaffaqiyati.
            </motion.p>
          </motion.div>

          {/* Enhanced Testimonials Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
          >
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
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
                  <blockquote className="text-gray-700 text-lg leading-relaxed font-light italic font-primary">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>
                </div>

                {/* Author Section */}
                <div className="mt-auto relative z-10">
                  <div className="flex flex-col gap-4">
                    {/* Author Info */}
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-gray-900 font-secondary">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600 font-primary">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
