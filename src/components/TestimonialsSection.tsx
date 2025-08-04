"use client";

import { motion } from "framer-motion";
import { Star, Heart, Home, Gift } from "lucide-react";

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
  {
    id: 5,
    name: "Malika opa",
    location: "Namangan viloyati",
    rating: 5,
    text: "Bolalarim uchun ta'lim materiallari oldik. Endi ular maktabda yaxshi o'qiyapti. Yurak Amri haqiqatan ham oilalarga yordam beradi.",
    category: "Ta'lim yordami",
    icon: Gift,
    color: "bg-secondary",
  },
  {
    id: 6,
    name: "Rustam aka",
    location: "Qashqadaryo viloyati",
    rating: 5,
    text: "Tibbiy yordam oldik. Endi sog'ligim yaxshilandi va oilamni qo'llab-quvvatlay olaman. Rahmat Yurak Amri jamoasiga!",
    category: "Tibbiy yordam",
    icon: Heart,
    color: "bg-accent",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Section - Header and Introduction */}
            <div className="lgmb-12 lg:mb-0 lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-6 lg:sticky lg:top-10"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
                >
                  <Heart className="w-4 h-4" />
                  Foydalanuvchilar Fikri{" "}
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-medium text-gray-900">
                  <span className="text-gray-900">Hikoyalar</span> va shukrona
                  hislar
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Har bir oila o&apos;z hikoyasiga ega. Ularning baxtli yuzlari
                  - bizning eng katta muvaffaqiyatimiz.
                </p>
              </motion.div>
            </div>

            {/* Right Section - Testimonial Cards */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 border border-gray-200 flex flex-col h-full"
                  >
                    {/* Star Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-gray-900 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-900 text-sm leading-relaxed mb-4 flex-grow">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>

                    {/* Client Profile */}
                    <div className="flex items-center mt-auto">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                        <testimonial.icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600 text-xs">
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
