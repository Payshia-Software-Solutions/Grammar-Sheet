"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const videoTestimonialsEn = [
  {
    title: "Emma's IGCSE Success Story",
    description: "Grade 10 student shares how she achieved an A* in IGCSE English Literature.",
  },
  {
    title: "Parent Testimonial: James's Journey",
    description: "Parents discuss their son's remarkable improvement in creative writing skills.",
  },
];

const videoTestimonialsSi = [
  {
    title: "එමාගේ IGCSE සාර්ථක කතාව",
    description: "10 ශ්‍රේණියේ ශිෂ්‍යාවක් IGCSE ඉංග්‍රීසි සාහිත්‍යය සඳහා A* සාමාර්ථයක් ලබාගත් ආකාරය බෙදා ගනී.",
  },
  {
    title: "දෙමාපියන්ගේ සාක්ෂි: ජේම්ස්ගේ ගමන",
    description: "දෙමව්පියන් තම පුතාගේ නිර්මාණාත්මක ලිවීමේ කුසලතාවන්හි කැපී පෙනෙන දියුණුවක් ගැන සාකච්ඡා කරයි.",
  },
];

const translations = {
  en: {
    title: "Watch Our Students Share Their Stories",
    subtitle: "See firsthand how our English programs have transformed students' academic journeys.",
    videos: videoTestimonialsEn
  },
  si: {
    title: "අපගේ සිසුන් ඔවුන්ගේ කථා බෙදාගන්නා ආකාරය නරඹන්න",
    subtitle: "අපගේ ඉංග්‍රීසි වැඩසටහන් ශිෂ්‍යයන්ගේ අධ්‍යාපනික ගමන් පරිවර්තනය කර ඇති ආකාරය මුලින්ම බලන්න.",
    videos: videoTestimonialsSi
  }
}

export function StudentVideos() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            {t.title}
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg mt-4">
            {t.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.videos.map((video, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <div className="relative bg-slate-900 aspect-video flex items-center justify-center cursor-pointer group">
                  <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-headline mb-2">{video.title}</h3>
                <p className="text-muted-foreground">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
