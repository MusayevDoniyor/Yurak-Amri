"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Malika Karimova",
    location: "Farg&apos;ona viloyati",
    rating: 5,
    text: "Biz shunchaki ro&apos;yxatda turgan oilamiz deb o&apos;ylagandik. Rahmat sizlarga. Endi bolalarimiz baxtli.",
    category: "Uy yordami",
  },
  {
    id: 2,
    name: "Aziz Toshmatov",
    location: "Bo&apos;ka tumani",
    rating: 5,
    text: "Yurak Amri yordami bilan hayotimiz to&apos;liq o&apos;zgardi. Endi o&apos;z uyimizda yashaymiz.",
    category: "Uy qurish",
  },
  {
    id: 3,
    name: "Dilfuza Rahimova",
    location: "Toshkent viloyati",
    rating: 5,
    text: "Bolalarim uchun ta&apos;lim materiallari va kiyimlar yuborildi. Hammadan rahmat!",
    category: "Ta&apos;lim yordami",
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
            <div className="inline-flex items-center gap-2 bg-gradient-secondary text-navy-dark px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-gold">
              <Heart className="w-4 h-4" />
              Foydalanuvchilar Fikri
            </div>
            <h2 className="heading-corporate text-5xl md:text-7xl font-black mb-6">
              <span className="text-gradient-primary">Hikoyalar</span>{" "}
              <span className="text-white">va shukrona</span>
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
                className="card-navy group"
              >
                <div className="p-8">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-gold-primary text-gold-primary"
                      />
                    ))}
                  </div>

                  {/* Category Badge */}
                  <div className="inline-flex items-center gap-2 bg-gradient-secondary/20 text-gold-primary px-3 py-1 rounded-full text-xs font-bold mb-6">
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
                      <div className="font-bold text-white">
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

          {/* Featured Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="bg-gradient-secondary rounded-3xl p-8 md:p-12 shadow-gold border-glow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-navy-dark/20 text-navy-dark px-4 py-2 rounded-full text-sm font-bold mb-6">
                  <Quote className="w-4 h-4" />
                  Asosiy Hikoya
                </div>
                <h3 className="heading-corporate text-3xl md:text-4xl font-black text-navy-dark mb-6">
                  Uy ta&apos;mirlash va hayot o&apos;zgartirgan
                </h3>
                <blockquote className="text-xl text-navy-dark/90 leading-relaxed mb-8">
                  &ldquo;Yurak Amri yordami bilan uyimiz to&apos;liq
                  ta&apos;mirlandi. Bolalarim endi xavfsiz va qulay sharoitda
                  yashaydi. Bu faqat uy emas, yangi hayot boshlanishi
                  edi.&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-navy-dark/20 rounded-full flex items-center justify-center">
                    <span className="text-navy-dark font-bold text-xl">SR</span>
                  </div>
                  <div>
                    <div className="font-bold text-navy-dark text-lg">
                      Sardor Rahimov
                    </div>
                    <div className="text-navy-dark/80">
                      Bo&apos;ka tumani, 5 ta farzand otasi
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="text-8xl font-black text-navy-dark/20 mb-4">
                  &ldquo;
                </div>
                <div className="text-2xl font-bold text-navy-dark mb-4">
                  Har bir oila o&apos;z hikoyasiga ega
                </div>
                <div className="text-navy-dark/80 mb-8">
                  Ularning baxtli yuzlari - bizning eng katta muvaffaqiyatimiz
                </div>
                <div className="flex justify-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-navy-dark text-navy-dark"
                    />
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
