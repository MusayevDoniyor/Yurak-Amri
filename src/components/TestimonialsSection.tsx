"use client";

import { motion } from "framer-motion";
import { Star, Quote, Heart, MapPin, Home, Gift } from "lucide-react";
import Image from "next/image";

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
    color: "bg-primary",
  },
  {
    id: 2,
    name: "Sardor aka",
    location: "Bo'ka tumani",
    rating: 5,
    text: "Yurak Amri yordami bilan oilamiz yangi uyga ko'chdi. Bu faqat uy emas, bu yangi hayot boshlash imkoniyati. Hammadan rahmat!",
    category: "Oziq-ovqat",
    icon: Gift,
    color: "bg-secondary",
  },
  {
    id: 3,
    name: "Dilfuza opa",
    location: "Toshkent viloyati",
    rating: 5,
    text: "Farzandlarim uchun kiyim va oziq-ovqat yordami oldik. Bu yordam bizga juda kerak edi. Yurak Amri haqiqatan ham yurakdan ishlaydi.",
    category: "Bolalar yordami",
    icon: Heart,
    color: "bg-accent",
  },
  {
    id: 4,
    name: "Aziz aka",
    location: "Andijon viloyati",
    rating: 5,
    text: "Uy ta'mirlash uchun yordam oldik. Endi oilamiz xavfsiz va qulay sharoitda yashaydi. Bu yordamni hech qachon unutmaymiz.",
    category: "Uy ta'mirlash",
    icon: Home,
    color: "bg-primary",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-gradient-section relative overflow-hidden">
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
            <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-6 shadow-gold">
              <Heart className="w-4 h-4" />
              Foydalanuvchilar Fikri
            </div>
            <h2 className="heading-corporate text-4xl md:text-5xl font-black mb-6">
              <span className="text-primary">Hikoyalar</span>{" "}
              <span className="text-text-primary">va shukrona</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Har bir oila o&apos;z hikoyasiga ega. Ularning baxtli yuzlari -
              bizning eng katta muvaffaqiyatimiz.
            </p>
          </motion.div>

          {/* Featured Testimonial - Mavluda opa - New Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16 rounded-3xl overflow-hidden shadow-lg"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left Column - Image */}
              <div className="relative h-80 lg:h-auto">
                <Image
                  src="/yurak_amri.webp" // Placeholder - would be replaced with actual testimonial photo
                  alt="Mavluda opa hikoyasi"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                  <div className="inline-flex items-center gap-2 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold mb-4 w-fit">
                    <Quote className="w-3 h-3" />
                    Asosiy Hikoya
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    Mavluda opa hikoyasi
                  </h3>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="bg-white p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Quote className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary">Iqtibos</div>
                    <div className="text-xl font-bold text-text-primary">
                      Farg&apos;ona viloyati
                    </div>
                  </div>
                </div>

                <blockquote className="text-text-primary text-xl leading-relaxed mb-8 border-l-4 border-primary pl-4 italic">
                  &ldquo;Biz shunchaki ro&apos;yxatda turgan oilamiz deb
                  o&apos;ylagandik. Lekin Yurak Amri bizga insoniylik, or-nomus
                  va umid hadya qildi. Endi farzandim maktabga bormoqda. Rahmat
                  sizlarga.&rdquo;
                </blockquote>

                <div className="flex items-center justify-between flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-white font-bold text-lg sm:text-xl">
                        MO
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-text-primary text-base sm:text-lg">
                        Mavluda opa
                      </div>
                      <div className="text-text-secondary flex items-center gap-1 text-sm">
                        <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        <span className="whitespace-nowrap">
                          Farg&apos;ona viloyati, farzand onasi
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 sm:w-5 sm:h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Grid - New Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {testimonials.slice(1).map((testimonial, idx) => (
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
                className="card group hover:border-primary/20"
              >
                <div className="p-4 sm:p-6">
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4 sm:mb-6 gap-3">
                    <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                      <div
                        className={`w-10 h-10 sm:w-12 sm:h-12 ${testimonial.color} rounded-full flex items-center justify-center flex-shrink-0`}
                      >
                        <testimonial.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-text-primary text-sm sm:text-base truncate">
                          {testimonial.name}
                        </div>
                        <div className="text-text-secondary text-xs sm:text-sm flex items-center gap-1">
                          <MapPin className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">
                            {testimonial.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-bold flex-shrink-0">
                      {testimonial.category}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-text-primary text-base sm:text-lg leading-relaxed mb-4 sm:mb-4 relative">
                    <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/10 absolute -left-1 sm:-left-2 -top-1 sm:-top-2" />
                    <div className="pl-4 sm:pl-6">
                      &ldquo;{testimonial.text}&rdquo;
                    </div>
                  </blockquote>

                  {/* Rating */}
                  <div className="flex items-center justify-between border-t border-border pt-3 sm:pt-4">
                    <div className="text-text-secondary text-xs sm:text-sm">
                      Yurak Amri yordami bilan
                    </div>
                    <div className="flex items-center gap-1 flex-shrink-0">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3 h-3 sm:w-4 sm:h-4 fill-accent text-accent"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-16"
          >
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10 max-w-3xl mx-auto">
              <Quote className="w-12 h-12 text-primary/30 mx-auto mb-4" />
              <p className="text-text-primary text-xl mb-6">
                Har bir hikoya - bu hayotning o&apos;zgarishi. Sizning
                yordamingiz bilan yangi hikoyalar yaratiladi.
              </p>
              <button className="btn-primary px-6 py-3 text-md font-bold">
                O&apos;Z HIKOYANGIZNI ULASHING
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
