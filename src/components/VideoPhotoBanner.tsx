"use client";

import { motion } from "framer-motion";
import { Play, Camera, Video } from "lucide-react";
import Image from "next/image";
import React from "react";

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
    imageSrc: "/photo_banner_1.png",
    title: "Yangi uyga ko'chayotgan oila",
    description: "Oila a'zolari yangi uyga ko'chish paytida",
    category: "Uy qurish loyihasi",
  },
  {
    id: 2,
    imageSrc: "/photo_banner_3.png",
    title: "Sardor Rahimxon ko'mak ko'rsatmoqda",
    description: "Sardor Rahimxon shaxsan yordam ko'rsatish paytida",
    category: "Hikoyalar",
  },
];

export default function VideoPhotoBanner() {
  const [activeTab, setActiveTab] = React.useState<"all" | "videos" | "photos">(
    "all"
  );

  return (
    <section id="video-photo" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Camera className="w-4 h-4" />
              Vizual Hikoyalar
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-medium text-gray-900 mb-6"
            >
              Haqiqiy hikoyalar
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Yordam olgan oilalar haqida to&apos;g&apos;ridan-to&apos;g&apos;ri
              hikoyalar. Ularning yuzlaridagi baxt va shukrona hislari.
            </motion.p>
          </motion.div>

          {/* Content Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex bg-gray-100 rounded-full p-1 shadow-sm flex-wrap justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("all")}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === "all"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Barcha hikoyalar
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("videos")}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === "videos"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Videolar
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab("photos")}
                className={`px-6 py-3 rounded-full font-medium transition-colors duration-300 text-sm whitespace-nowrap cursor-pointer ${
                  activeTab === "photos"
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Rasmlar
              </motion.button>
            </div>
          </motion.div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Videos */}
            {(activeTab === "all" || activeTab === "videos") &&
              videoItems.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-video"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${video.videoId}`}
                      title={video.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="inline-flex items-center gap-2 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        <Video className="w-3 h-3" />
                        Video
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {video.description}
                    </p>
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {video.category}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}

            {/* Photos */}
            {(activeTab === "all" || activeTab === "photos") &&
              photoItems.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, margin: "-50px" }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  className="group cursor-pointer"
                >
                  <motion.div
                    className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-video"
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.3, ease: "easeOut" },
                    }}
                  >
                    <Image
                      src={photo.imageSrc}
                      alt={photo.title}
                      fill
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <motion.div
                      className="absolute top-4 left-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <div className="inline-flex items-center gap-2 bg-white/90 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        <Camera className="w-3 h-3" />
                        Rasm
                      </div>
                    </motion.div>
                  </motion.div>

                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 + 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-3">
                      {photo.description}
                    </p>
                    <motion.div
                      className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      {photo.category}
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mt-16"
          >
            <motion.div
              className="bg-gray-50 rounded-3xl p-8 md:p-12"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl font-bold text-gray-900 mb-4"
              >
                Siz ham yordam qo&apos;shishingiz mumkin
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto"
              >
                Har bir yordam - bir oilaning hayotini o&apos;zgartiradi. Bugun
                emas, hoziroq yordam qo&apos;shishingiz mumkin.
              </motion.p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 cursor-pointer"
              >
                <a href="#donation" className="flex items-center gap-3">
                  Hozir yordam berish
                  <Play className="w-5 h-5" />
                </a>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
