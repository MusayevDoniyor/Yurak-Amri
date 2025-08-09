"use client";

import { motion } from "framer-motion";
import { Camera, Video, Heart } from "lucide-react";
import Image from "next/image";
import React from "react";

// Video items
interface VideoItem {
  id: number;
  videoId: string;
  title: string;
  description: string;
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    videoId: "fmMddZ0e2nM",
    title: "Bo'ka tumanida oilaga uy topshirilmoqda",
    description:
      "Sardor Rahimxon 30 nafar oilaga uy topshirmoqda. Har bir uy - yangi hayot boshlash.",
  },
  {
    id: 2,
    videoId: "Z0xVdqDZzsI",
    title: "Yurak Amri a'zolari bilan tarbiya va ko'mak",
    description:
      "Fond a'zolari ehtiyojmandlar bilan samimiy muloqotda. Insoniy yordam.",
  },
];

// Photo items
interface PhotoItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  impact: string;
}

const photoItems: PhotoItem[] = [
  {
    id: 1,
    imageSrc: "/photo_banner_1.png",
    title: "Yangi uyga ko'chayotgan oila",
    description: "Oila a'zolari yangi uyga ko'chish paytida. Baxtli yuzlar.",
    impact: "30 oila yordam oldi",
  },
  {
    id: 2,
    imageSrc: "/photo_banner_3.png",
    title: "Sardor Rahimxon ko'mak ko'rsatmoqda",
    description:
      "Sardor Rahimxon shaxsan yordam ko'rsatish paytida. Bevosita yordam.",
    impact: "Shaxsiy yordam",
  },
];

export default function VideoPhotoBanner() {
  return (
    <section
      id="video-photo"
      className="py-12 md:py-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
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
              className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-6 border border-red-200 font-secondary"
            >
              <Camera className="w-5 h-5" />
              Vizual Hikoyalar
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight font-display"
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                Haqiqiy hikoyalar
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-lg text-gray-600 max-w-3xl mx-auto font-light leading-relaxed font-primary"
            >
              Har bir video va rasm - bu haqiqiy hayot hikoyasi. Sizning
              yordamingiz bilan qancha oilaning hayoti o&apos;zgardi, ularning
              baxtli yuzlari bilan tanishing.
            </motion.p>
          </motion.div>

          {/* Enhanced Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Videos Section */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Video className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-secondary">
                    Videolar
                  </h3>
                  <p className="text-gray-600 font-primary">
                    Haqiqiy hikoyalar va yordam jarayoni
                  </p>
                </div>
              </div>

              {videoItems.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500"
                >
                  {/* YouTube Iframe */}
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <iframe
                        src={`https://www.youtube.com/embed/${video.videoId}?rel=0&modestbranding=1`}
                        title={video.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  {/* Enhanced Video Info */}
                  <div className="p-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-300 font-secondary">
                        {video.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm font-primary">
                        {video.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Photos Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Camera className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 font-secondary">
                    Rasmlar
                  </h3>
                  <p className="text-gray-600 font-primary">
                    Hayot hikoyalari va yordam natijalari
                  </p>
                </div>
              </div>

              {photoItems.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.01 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500"
                >
                  {/* Photo */}
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={photo.imageSrc}
                        alt={photo.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Enhanced Photo Info */}
                  <div className="p-6">
                    <div className="space-y-3">
                      <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-blue-600 transition-colors duration-300 font-secondary">
                        {photo.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm font-primary">
                        {photo.description}
                      </p>

                      {/* Impact Badge */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-gray-500">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                            <Heart className="w-3 h-3 text-blue-600" />
                          </div>
                          <span className="text-xs font-semibold font-primary">
                            {photo.impact}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
