"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  // {
  //   id: 1,
  //   name: "Mavluda opa",
  //   location: "Farg'ona viloyati",
  //   rating: 5,
  //   text: "Biz shunchaki ro'yxatda turgan oilamiz deb o'ylagandik. Lekin Yurak Amri bizga insoniylik, or-nomus va umid hadya qildi. Endi farzandim maktabga bormoqda. Rahmat sizlarga.",
  //   category: "Uy qurish",
  // },
  {
    id: 2,
    name: "Sardor aka",
    location: "Bo'ka tumani",
    rating: 5,
    text: "Yurak Amri yordami bilan oilamiz yangi uyga ko'chdi. Bu faqat uy emas, bu yangi hayot boshlash imkoniyati. Hammadan rahmat!",
    category: "Oziq-ovqat",
  },
  {
    id: 3,
    name: "Dilfuza opa",
    location: "Toshkent viloyati",
    rating: 5,
    text: "Farzandlarim uchun kiyim va oziq-ovqat yordami oldik. Bu yordam bizga juda kerak edi. Yurak Amri haqiqatan ham yurakdan ishlaydi.",
    category: "Bolalar yordami",
  },
  {
    id: 4,
    name: "Aziz aka",
    location: "Andijon viloyati",
    rating: 5,
    text: "Uy ta'mirlash uchun yordam oldik. Endi oilamiz xavfsiz va qulay sharoitda yashaydi. Bu yordamni hech qachon unutmaymiz.",
    category: "Uy ta'mirlash",
  },
];

export default function TestimonialsSection() {
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
            <div className="inline-flex items-center gap-2 bg-gradient-secondary text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-gold">
              <Heart className="w-4 h-4" />
              Foydalanuvchilar Fikri
            </div>
            <h2 className="heading-corporate text-5xl md:text-7xl font-black mb-6">
              <span className="text-gradient-primary">Hikoyalar</span>{" "}
              <span className="text-text-primary">va shukrona</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Har bir oila o&apos;z hikoyasiga ega. Ularning baxtli yuzlari -
              bizning eng katta muvaffaqiyatimiz.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="card group"
              >
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>

                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-secondary/20 text-secondary px-3 py-1 rounded-full text-xs font-bold mb-6">
                    {testimonial.category}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-text-secondary text-lg leading-relaxed mb-6">
                    &ldquo;{testimonial.text}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center shadow-gold">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-text-secondary text-sm">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Featured Testimonial - Mavluda opa */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-secondary rounded-3xl p-8 md:p-12 shadow-gold border-glow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/20 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Quote className="w-4 h-4" />
                  Asosiy Hikoya
                </div>
                <h3 className="heading-corporate text-3xl md:text-4xl font-black text-white mb-6">
                  Mavluda opa hikoyasi
                </h3>
                <blockquote className="text-xl text-white/90 leading-relaxed mb-8">
                  &ldquo;Biz shunchaki ro&apos;yxatda turgan oilamiz deb
                  o&apos;ylagandik. Lekin Yurak Amri bizga insoniylik, or-nomus
                  va umid hadya qildi. Endi farzandim maktabga bormoqda. Rahmat
                  sizlarga.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">MO</span>
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">
                      Mavluda opa
                    </div>
                    <div className="text-white/80">
                      Farg&apos;ona viloyati, farzand onasi
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-8xl font-black text-white/20 mb-4">
                  &ldquo;
                </div>
                <div className="text-2xl font-bold text-white mb-4">
                  Har bir oila o&apos;z hikoyasiga ega
                </div>
                <div className="text-white/80 mb-8">
                  Ularning baxtli yuzlari - bizning eng katta muvaffaqiyatimiz
                </div>
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-white text-white" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
