
"use client"

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { WhyChooseUsSection } from "@/components/home/why-choose-us";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { NewsSection } from "@/components/home/news-section";
import { CtaSection } from "@/components/home/cta-section";
import { ClassesSection } from "@/components/home/classes-section";
import { motion } from "framer-motion";
import { useContext } from "react";
import { LanguageContext } from "@/components/layout/language-toggle";

const translations = {
  en: {
    heroTitle: "Master English with Confidence",
    heroSubtitle1: "From Grade 6 to O/L",
    heroSubtitle2: "Trusted English classes tailored for Sri Lankan students.",
    joinClass: "Join a Class",
    seeSchedule: "See Class Schedule",
    aboutTeacherTitle: "About Your Teacher",
    aboutTeacherDesc: "10+ years of experience in teaching English for O/L and Junior Grades. Passionate about helping Sri Lankan students excel in English with personalized attention and proven methods.",
    learnMore: "Learn More"
  },
  si: {
    heroTitle: "විශ්වාසයෙන් ඉංග්‍රීසි ප්‍රගුණ කරන්න",
    heroSubtitle1: "6 ශ්‍රේණියේ සිට සා/පෙළ දක්වා",
    heroSubtitle2: "ශ්‍රී ලාංකික සිසුන් සඳහාම සැකසූ විශ්වාසනීය ඉංග්‍රීසි පන්ති.",
    joinClass: "පන්තියකට සහභාගී වන්න",
    seeSchedule: "කාලසටහන බලන්න",
    aboutTeacherTitle: "ඔබේ ගුරුවරයා ගැන",
    aboutTeacherDesc: "සා/පෙළ සහ කනිෂ්ඨ ශ්‍රේණි සඳහා ඉංග්‍රීසි ඉගැන්වීමේ වසර 10+ ක පළපුරුද්ද. පුද්ගලික අවධානය සහ ඔප්පු කළ ක්‍රම සමඟින් ශ්‍රී ලාංකික සිසුන්ට ඉංග්‍රීසි භාෂාවෙන් විශිෂ්ට වීමට උපකාර කිරීමට දැඩි කැමැත්තක් දක්වයි.",
    learnMore: "තවත් දැනගන්න"
  }
};

export default function Home() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Students studying English"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="students studying"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 px-4 md:px-6 mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {t.heroTitle}
            </h1>
            <p className="text-lg md:text-xl">
              {t.heroSubtitle1}
            </p>
            <p className="max-w-[600px] mx-auto text-gray-200 md:text-lg">
              {t.heroSubtitle2}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/lessons">{t.joinClass}</Link>
              </Button>
               <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                <Link href="/contact">{t.seeSchedule}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <section className="w-full py-16 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="bg-card rounded-2xl shadow-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="https://placehold.co/160x160.png"
                  alt="Teacher"
                  width={160}
                  height={160}
                  className="rounded-full object-cover"
                  data-ai-hint="teacher person"
                />
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-3xl font-headline font-bold">{t.aboutTeacherTitle}</h2>
                <p className="text-muted-foreground">
                  {t.aboutTeacherDesc}
                </p>
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full" size="lg">
                  <Link href="/contact">{t.learnMore}</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </motion.div>

      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ClassesSection />
      </motion.div>
      
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <WhyChooseUsSection />
      </motion.div>

      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <TestimonialsSection />
      </motion.div>

      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <NewsSection />
      </motion.div>

      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <CtaSection />
      </motion.div>

    </div>
  );
}
