"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";

interface VisualItem {
  id: number;
  videoId: string;
  title: string;
  description: string;
  category: string;
}

const visualItems: VisualItem[] = [
  {
    id: 1,
    videoId: "fmMddZ0e2nM",
    title: "Bo'ka tumanida oilaga uy topshirilmoqda",
    description: "Sardor Rahimxon 30 nafar oilaga uy topshirmoqda",
    category: "Uy qurish loyihasi",
  },
  {
    id: 2,
    videoId: "Z0xVdqDZzsI",
    title: "Yurak Amri a'zolari bilan tarbiya va ko'mak",
    description: "Fond a'zolari ehtiyojmandlar bilan samimiy muloqotda",
    category: "Faol yordam",
  },
  {
    id: 3,
    videoId: "9hyu1730W4g",
    title: "Oilalar hayoti o'zgardi",
    description: "Yurak Amri yordami bilan oilalarning hayoti to'ldi",
    category: "Hikoyalar",
  },
];

export default function VideoPhotoBanner() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Uy qurish loyihasi":
        return "bg-gradient-secondary text-white";
      case "Faol yordam":
        return "bg-gradient-accent text-white";
      case "Hikoyalar":
        return "bg-gradient-primary text-white";
      default:
        return "bg-gradient-secondary text-white";
    }
  };

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-section">
        <div className="absolute inset-0 bg-primary/5"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-secondary text-white px-6 py-3 rounded-full text-sm font-bold mb-8 shadow-gold">
              <Star className="w-5 h-5" />
              Video Hikoyalar
            </div>
            <h2 className="heading-corporate text-6xl md:text-8xl font-black text-text-primary mb-8">
              <span className="text-gradient-primary">Haqiqiy</span> hikoyalar
            </h2>
            <p className="text-2xl md:text-3xl text-text-secondary max-w-4xl mx-auto font-light leading-relaxed">
              Yordam olgan oilalar haqida to&apos;g&apos;ridan-to&apos;g&apos;ri
              hikoyalar. Ularning yuzlaridagi baxt va shukrona hislari.
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {visualItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1 * (index + 1),
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="card group cursor-pointer"
              >
                <div className="relative aspect-video bg-gradient-card rounded-2xl overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${item.videoId}`}
                    title={item.title}
                    className="w-full h-full rounded-2xl"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute top-6 left-6">
                    <span
                      className={`${getCategoryColor(
                        item.category
                      )} px-4 py-2 rounded-full text-sm font-bold`}
                    >
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-text-primary mb-4">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {item.description}
                  </p>
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
            className="text-center mt-20"
          >
            <button className="btn-navy px-6 py-3 md:px-12 md:py-6 rounded-2xl text-md md:text-xl font-bold flex items-center gap-4 mx-auto shadow-navy">
              <Play className="w-7 h-7" />
              BARCHA HIKOYALARNI KO&apos;RISH
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
