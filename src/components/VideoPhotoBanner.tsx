"use client";

import { motion } from "framer-motion";
import { Play, Star, Heart, Home, Camera, Video } from "lucide-react";
import Image from "next/image";

// Video items
interface VideoItem {
  id: number;
  videoId: string;
  title: string;
  description: string;
  category: string;
}

const videoItems: VideoItem[] = [
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
];

// Photo items
interface PhotoItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
}

const photoItems: PhotoItem[] = [
  {
    id: 1,
    imageSrc: "/yurak_amri.webp", // Placeholder - would be replaced with actual emotional photos
    title: "Yangi uyga ko'chayotgan oila",
    description: "Oila a'zolari yangi uyga ko'chish paytida",
    category: "Uy qurish loyihasi",
  },
  {
    id: 2,
    imageSrc: "/yurak_amri.webp", // Placeholder - would be replaced with actual emotional photos
    title: "Nonga yetmagan bola bilan suhbat",
    description: "Ehtiyojmand oilalar bilan samimiy muloqot",
    category: "Faol yordam",
  },
  {
    id: 3,
    imageSrc: "/yurak_amri.webp", // Placeholder - would be replaced with actual emotional photos
    title: "Sardor Rahimxon ko'mak ko'rsatmoqda",
    description: "Sardor Rahimxon shaxsan yordam ko'rsatish paytida",
    category: "Hikoyalar",
  },
];

export default function VideoPhotoBanner() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Uy qurish loyihasi":
        return "bg-primary text-white";
      case "Faol yordam":
        return "bg-accent text-white";
      case "Hikoyalar":
        return "bg-secondary text-white";
      default:
        return "bg-primary text-white";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Uy qurish loyihasi":
        return <Home className="w-4 h-4" />;
      case "Faol yordam":
        return <Heart className="w-4 h-4" />;
      case "Hikoyalar":
        return <Star className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-gold">
              <Camera className="w-5 h-5" />
              Vizual Hikoyalar
            </div>
            <h2 className="heading-corporate text-4xl md:text-5xl font-black text-text-primary mb-6">
              <span className="text-primary">Haqiqiy</span> hikoyalar
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Yordam olgan oilalar haqida to&apos;g&apos;ridan-to&apos;g&apos;ri
              hikoyalar. Ularning yuzlaridagi baxt va shukrona hislari.
            </p>
          </motion.div>

          {/* Featured Photo Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[21/9]">
              <Image
                src="/yurak_amri.webp" // Placeholder - would be replaced with actual emotional photo
                alt="Yurak Amri - Emotsional lahza"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 md:p-12">
                <div className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-full text-sm font-bold mb-4 w-fit">
                  <Heart className="w-4 h-4" />
                  Yurakdan chiqqan yordam
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 max-w-2xl">
                  Har bir yordam - bir oilaning hayotini o&apos;zgartiradi
                </h3>
                <p className="text-white/90 text-lg max-w-2xl mb-6">
                  Yurak Amri xayriya fondi O&apos;zbekistonning eng chekka
                  hududlaridagi ehtiyojmand oilalarga yordam qo&apos;lini
                  cho&apos;zmoqda.
                </p>
                <button className="btn-primary px-6 py-3 text-md font-bold flex items-center gap-3 w-fit">
                  <Play className="w-5 h-5" />
                  Hikoyani ko&apos;rish
                </button>
              </div>
            </div>
          </motion.div>

          {/* Content Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-white rounded-full p-2 shadow-sm">
              <button className="px-6 py-3 rounded-full bg-primary text-white font-medium">
                Barcha hikoyalar
              </button>
              <button className="px-6 py-3 rounded-full text-text-secondary font-medium">
                Videolar
              </button>
              <button className="px-6 py-3 rounded-full text-text-secondary font-medium">
                Rasmlar
              </button>
            </div>
          </div>

          {/* Photos Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                <Camera className="w-5 h-5 text-primary" />
                Emotsional lahzalar
              </h3>
              <button className="text-primary font-medium flex items-center gap-1">
                Barchasini ko&apos;rish
                <Play className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photoItems.map((item, index) => (
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
                  className="card group cursor-pointer overflow-hidden"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span
                        className={`${getCategoryColor(
                          item.category
                        )} px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}
                      >
                        {getCategoryIcon(item.category)}
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Videos Grid */}
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-text-primary flex items-center gap-2">
                <Video className="w-5 h-5 text-secondary" />
                Video hikoyalar
              </h3>
              <button className="text-secondary font-medium flex items-center gap-1">
                Barchasini ko&apos;rish
                <Play className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoItems.map((item, index) => (
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
                  <div className="relative aspect-video bg-card rounded-t-2xl overflow-hidden">
                    <iframe
                      src={`https://www.youtube.com/embed/${item.videoId}`}
                      title={item.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    <div className="absolute top-4 left-4">
                      <span
                        className={`${getCategoryColor(
                          item.category
                        )} px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1`}
                      >
                        {getCategoryIcon(item.category)}
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-text-primary mb-2">
                      {item.title}
                    </h3>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center"
          >
            <button className="btn-primary px-8 py-4 text-md font-bold flex items-center gap-3 mx-auto">
              <Heart className="w-5 h-5" />
              BARCHA HIKOYALARNI KO&apos;RISH
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
