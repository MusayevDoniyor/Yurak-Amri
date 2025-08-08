"use client";

import { motion } from "framer-motion";
import { Play, Camera, Video, Eye, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

// Video items
interface VideoItem {
  id: number;
  videoId: string;
  title: string;
  description: string;
  category: string;
  views: string;
  duration: string;
}

const videoItems: VideoItem[] = [
  {
    id: 1,
    videoId: "fmMddZ0e2nM",
    title: "Bo'ka tumanida oilaga uy topshirilmoqda",
    description:
      "Sardor Rahimxon 30 nafar oilaga uy topshirmoqda. Har bir uy - yangi hayot boshlash.",
    category: "Uy qurish loyihasi",
    views: "15K+",
    duration: "3:45",
  },
  {
    id: 2,
    videoId: "Z0xVdqDZzsI",
    title: "Yurak Amri a'zolari bilan tarbiya va ko'mak",
    description:
      "Fond a'zolari ehtiyojmandlar bilan samimiy muloqotda. Insoniy yordam.",
    category: "Faol yordam",
    views: "8K+",
    duration: "2:30",
  },
];

// Photo items
interface PhotoItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  category: string;
  impact: string;
}

const photoItems: PhotoItem[] = [
  {
    id: 1,
    imageSrc: "/photo_banner_1.png",
    title: "Yangi uyga ko'chayotgan oila",
    description: "Oila a'zolari yangi uyga ko'chish paytida. Baxtli yuzlar.",
    category: "Uy qurish loyihasi",
    impact: "30 oila yordam oldi",
  },
  {
    id: 2,
    imageSrc: "/photo_banner_3.png",
    title: "Sardor Rahimxon ko'mak ko'rsatmoqda",
    description:
      "Sardor Rahimxon shaxsan yordam ko'rsatish paytida. Bevosita yordam.",
    category: "Hikoyalar",
    impact: "Shaxsiy yordam",
  },
];

export default function VideoPhotoBanner() {
  const [activeTab, setActiveTab] = React.useState<"all" | "videos" | "photos">(
    "all"
  );

  return (
    <section
      id="video-photo"
      className="py-32 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-3 bg-red-50 text-red-700 px-6 py-3 rounded-full text-sm font-semibold mb-8 border border-red-200"
            >
              <Camera className="w-5 h-5" />
              Vizual Hikoyalar
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight"
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
              className="text-xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
            >
              Har bir video va rasm - bu haqiqiy hayot hikoyasi. Sizning
              yordamingiz bilan qancha oilaning hayoti o&apos;zgardi, ularning
              baxtli yuzlari bilan tanishing.
            </motion.p>
          </motion.div>

          {/* Enhanced Horizontal Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center mb-16"
          >
            <div className="bg-white rounded-3xl p-2 shadow-xl border border-gray-200/50 backdrop-blur-sm flex gap-1">
              {[
                { key: "all", label: "Hammasi", icon: Eye, count: "4" },
                { key: "videos", label: "Videolar", icon: Video, count: "2" },
                { key: "photos", label: "Rasmlar", icon: Camera, count: "2" },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.key;
                return (
                  <motion.button
                    key={tab.key}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() =>
                      setActiveTab(tab.key as "all" | "videos" | "photos")
                    }
                    className={`relative flex items-center gap-3 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 min-w-[120px] justify-center ${
                      isActive
                        ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }`}
                  >
                    <Icon
                      className={`w-5 h-5 ${
                        isActive ? "text-white" : "text-gray-500"
                      }`}
                    />
                    <span className="text-sm">{tab.label}</span>

                    {/* Count Badge */}
                    <div
                      className={`ml-1 px-2 py-0.5 rounded-full text-xs font-bold ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {tab.count}
                    </div>

                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl -z-10"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Enhanced Content Grid */}
          {activeTab === "all" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Videos Section */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-lg">
                    <Video className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Videolar
                    </h3>
                    <p className="text-gray-600 text-lg">
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
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Enhanced Video Thumbnail */}
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center relative">
                          {/* Play Button Overlay */}
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300 cursor-pointer"
                          >
                            <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl group-hover:bg-white transition-all duration-300">
                              <Play className="w-8 h-8 text-red-600 ml-1" />
                            </div>
                          </motion.div>

                          {/* Video Stats Overlay */}
                          <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                            {video.duration}
                          </div>

                          {/* Category Badge */}
                          <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                            {video.category}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Video Info */}
                    <div className="p-6">
                      <div className="space-y-3">
                        <h4 className="text-lg font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-300">
                          {video.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-sm font-light">
                          {video.description}
                        </p>

                        {/* Enhanced Video Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-500">
                              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                <Eye className="w-3 h-3" />
                              </div>
                              <span className="text-xs font-semibold">
                                {video.views} ko&apos;rish
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                <Heart className="w-3 h-3 text-red-600" />
                              </div>
                              <span className="text-xs font-semibold">
                                Yordam
                              </span>
                            </div>
                          </div>

                          {/* Watch Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg text-sm cursor-pointer"
                          >
                            Ko&apos;rish
                          </motion.button>
                        </div>
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
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl flex items-center justify-center shadow-lg">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">
                      Rasmlar
                    </h3>
                    <p className="text-gray-600 text-lg">
                      Baxtli yuzlar va hayot o&apos;zgardi
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
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Enhanced Photo */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={photo.imageSrc}
                        alt={photo.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />

                      {/* Enhanced Impact Badge */}
                      <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {photo.impact}
                      </div>

                      {/* Enhanced Category Badge */}
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {photo.category}
                      </div>

                      {/* Hover Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white text-lg font-bold mb-1">
                          {photo.title}
                        </h4>
                        <p className="text-white/90 text-xs">
                          {photo.description}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Photo Info */}
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-2 leading-tight group-hover:text-red-600 transition-colors duration-300">
                        {photo.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-sm font-light mb-4">
                        {photo.description}
                      </p>

                      {/* Photo Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500">
                          <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <Heart className="w-3 h-3 text-gray-600" />
                          </div>
                          <span className="text-xs font-semibold">Hikoya</span>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg text-sm cursor-pointer"
                        >
                          Ko&apos;rish
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          )}

          {/* Videos Only Layout */}
          {activeTab === "videos" && (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-12 justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-3xl flex items-center justify-center shadow-lg">
                  <Video className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900">Videolar</h3>
                  <p className="text-gray-600 text-lg">
                    Haqiqiy hikoyalar va yordam jarayoni
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoItems.map((video, index) => (
                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Enhanced Video Thumbnail */}
                    <div className="relative">
                      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-gray-300 via-gray-400 to-gray-500 flex items-center justify-center relative">
                          {/* Play Button Overlay */}
                          <motion.div
                            whileHover={{ scale: 1.2 }}
                            className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-all duration-300 cursor-pointer"
                          >
                            <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-all duration-300">
                              <Play className="w-10 h-10 text-red-600 ml-1" />
                            </div>
                          </motion.div>

                          {/* Video Stats Overlay */}
                          <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold">
                            {video.duration}
                          </div>

                          {/* Category Badge */}
                          <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            {video.category}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Video Info */}
                    <div className="p-6">
                      <div className="space-y-4">
                        <h4 className="text-xl font-bold text-gray-900 leading-tight group-hover:text-red-600 transition-colors duration-300">
                          {video.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed text-base font-light">
                          {video.description}
                        </p>

                        {/* Enhanced Video Stats */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-gray-500">
                              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                                <Eye className="w-3 h-3" />
                              </div>
                              <span className="text-xs font-semibold">
                                {video.views} ko&apos;rish
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                                <Heart className="w-3 h-3 text-red-600" />
                              </div>
                              <span className="text-xs font-semibold">
                                Yordam
                              </span>
                            </div>
                          </div>

                          {/* Watch Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-red-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg text-sm cursor-pointer"
                          >
                            Ko&apos;rish
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Photos Only Layout */}
          {activeTab === "photos" && (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-12 justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-700 rounded-3xl flex items-center justify-center shadow-lg">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-gray-900">Rasmlar</h3>
                  <p className="text-gray-600 text-lg">
                    Baxtli yuzlar va hayot o&apos;zgardi
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {photoItems.map((photo, index) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Enhanced Photo */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={photo.imageSrc}
                        alt={photo.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Enhanced Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/70 transition-all duration-300" />

                      {/* Enhanced Impact Badge */}
                      <div className="absolute top-4 left-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {photo.impact}
                      </div>

                      {/* Enhanced Category Badge */}
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-900 px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                        {photo.category}
                      </div>

                      {/* Hover Info Overlay */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                        <h4 className="text-white text-xl font-bold mb-2">
                          {photo.title}
                        </h4>
                        <p className="text-white/90 text-sm">
                          {photo.description}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Photo Info */}
                    <div className="p-6">
                      <h4 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-600 transition-colors duration-300">
                        {photo.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-base font-light mb-4">
                        {photo.description}
                      </p>

                      {/* Photo Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-gray-500">
                          <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <Heart className="w-3 h-3 text-gray-600" />
                          </div>
                          <span className="text-xs font-semibold">Hikoya</span>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-red-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-300 shadow-lg text-sm cursor-pointer"
                        >
                          Ko&apos;rish
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                Sizning hikoyangiz ham bo&apos;lishi mumkin
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Har bir video va rasm - bu haqiqiy hayot o&apos;zgardi. Sizning
                yordamingiz bilan ko&apos;proq oilalarning hikoyasi yoziladi.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg hover:bg-red-700 transition-all duration-300 shadow-lg cursor-pointer"
              >
                <Heart className="w-5 h-5" />
                Hozir yordam berish
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
