"use client";

import { motion } from "framer-motion";
import { Quote, Star, Heart } from "lucide-react";

const testimonials = [
  {
    name: "Mavluda opa",
    location: "Farg'ona viloyati",
    content:
      "Biz shunchaki ro'yxatda turgan oilamiz deb o'ylagandik. Lekin Yurak Amri bizga insoniylik, or-nomus va umid hadya qildi. Endi farzandim maktabga bormoqda. Rahmat sizlarga.",
    rating: 5,
    category: "Uy qurish",
  },
  {
    name: "Sardor aka",
    location: "Bo'ka tumani",
    content:
      "Yurak Amri yordami bilan oilamiz yangi uyga ko'chdi. Bu faqat uy emas, bu yangi hayot boshlash imkoniyati. Hammadan rahmat!",
    rating: 5,
    category: "Oziq-ovqat",
  },
  {
    name: "Dilfuza opa",
    location: "Toshkent viloyati",
    content:
      "Farzandlarim uchun kiyim va oziq-ovqat yordami oldik. Bu yordam bizga juda kerak edi. Yurak Amri haqiqatan ham yurakdan ishlaydi.",
    rating: 5,
    category: "Bolalar yordami",
  },
  {
    name: "Aziz aka",
    location: "Andijon viloyati",
    content:
      "Uy ta'mirlash uchun yordam oldik. Endi oilamiz xavfsiz va qulay sharoitda yashaydi. Bu yordamni hech qachon unutmaymiz.",
    rating: 5,
    category: "Uy ta'mirlash",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            <span className="text-gradient-primary">Hikoyalar</span> va{" "}
            <span className="text-gradient-secondary">shukrona</span>
          </h2>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Har bir hikoya orqasida yuzlab oilalar va ularning hayotini
            o&apos;zgartirgan yordam turibdi.{" "}
            <span className="text-gradient-primary font-semibold">
              Bu sizning yordamingiz natijasidir.
            </span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-slate-200"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                <Heart className="w-3 h-3" />
                {testimonial.category}
              </div>

              <blockquote className="text-slate-700 mb-4 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <div className="font-semibold text-slate-900">
                    {testimonial.name}
                  </div>

                  <div className="text-sm text-slate-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-secondary text-white rounded-3xl p-8 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Quote className="w-4 h-4" />
                ASOSIY HIKOYA
              </div>

              <h3 className="text-3xl font-bold mb-4">
                Mavluda opaning hikoyasi
              </h3>

              <blockquote className="text-lg text-white/90 leading-relaxed mb-6">
                &ldquo;Biz shunchaki ro&apos;yxatda turgan oilamiz deb
                o&apos;ylagandik. Lekin Yurak Amri bizga insoniylik, or-nomus va
                umid hadya qildi. Endi farzandim maktabga bormoqda. Rahmat
                sizlarga.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-white text-white" />
                  ))}
                </div>

                <div className="text-sm text-white/80">
                  Farg&apos;ona viloyati
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-center">
                <div className="text-6xl font-bold mb-2">15,200+</div>
                <div className="text-white/90 text-xl">Shukurona oila</div>
                <div className="mt-4 text-md text-white/80">
                  Har bir oila o&apos;z hikoyasiga ega
                </div>

                <div className="mt-6">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/70 rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
