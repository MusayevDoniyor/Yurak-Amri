"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

export default function VideoPhotoBanner() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-section">
        <div className="absolute inset-0 bg-navy-dark/20"></div>
      </div>

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
              <Star className="w-4 h-4" />
              Video Hikoyalar
            </div>
            <h2 className="heading-corporate text-5xl md:text-7xl font-black text-white mb-6">
              <span className="text-white">Haqiqiy</span> hikoyalar
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Yordam olgan oilalar haqida to&apos;g&apos;ridan-to&apos;g&apos;ri
              hikoyalar. Ularning yuzlaridagi baxt va shukrona hislari.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-navy group cursor-pointer"
            >
              <div className="relative aspect-video bg-gradient-card rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-navy-dark ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-secondary text-navy-dark px-3 py-1 rounded-full text-xs font-bold">
                    Yangi
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Farg&apos;ona viloyati oilasi
                </h3>
                <p className="text-text-secondary text-sm">
                  Uy ta&apos;mirlash va bolalar uchun oziq-ovqat yordami
                </p>
              </div>
            </motion.div>

            {/* Video Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-navy group cursor-pointer"
            >
              <div className="relative aspect-video bg-gradient-card rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-navy-dark ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-accent text-navy-dark px-3 py-1 rounded-full text-xs font-bold">
                    Mashhur
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Toshkent viloyati oilasi
                </h3>
                <p className="text-text-secondary text-sm">
                  Tibbiy yordam va ta&apos;lim materiallari
                </p>
              </div>
            </motion.div>

            {/* Video Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className="card-navy group cursor-pointer"
            >
              <div className="relative aspect-video bg-gradient-card rounded-t-xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-navy-dark/50 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center shadow-gold group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 text-navy-dark ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-gradient-navy text-white px-3 py-1 rounded-full text-xs font-bold">
                    Ko&apos;p ko&apos;rilgan
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Samarqand viloyati oilasi
                </h3>
                <p className="text-text-secondary text-sm">
                  Kichik biznes yaratish va ish bilan ta&apos;minlash
                </p>
              </div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-16"
          >
            <button className="btn-navy px-10 py-5 rounded-xl text-lg font-bold flex items-center gap-3 mx-auto shadow-navy">
              <Play className="w-6 h-6" />
              BARCHA HIKOYALARNI KO&apos;RISH
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
