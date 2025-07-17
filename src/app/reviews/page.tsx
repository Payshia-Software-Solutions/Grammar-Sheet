"use client"

import { motion } from "framer-motion";
import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { TopSuccessStories } from "@/components/reviews/top-success-stories";
import { StudentVideos } from "@/components/reviews/student-videos";
import { AllTestimonials } from "@/components/reviews/all-testimonials";
import { useContext } from "react";
import { LanguageContext } from "@/components/layout/language-toggle";

const translations = {
  en: {
    title: "Hear From Our Students",
    subtitle: "Real success stories from Grade 6-11 students who have transformed their English skills and achieved their academic goals"
  },
  si: {
    title: "අපේ සිසුන්ගෙන් අසන්න",
    subtitle: "6-11 ශ්‍රේණිවල සිසුන්ගේ ඉංග්‍රීසි කුසලතා වැඩිදියුණු කරගත් සහ ඔවුන්ගේ අධ්‍යාපනික අරමුණු ඉටුකරගත් සැබෑ සාර්ථක කතා"
  }
}

export default function ReviewsPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div>
      <HeroHeaderSection
        title={t.title}
        subtitle={t.subtitle}
        imageUrl="https://placehold.co/1920x600.png"
        imageHint="students group photo"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <TopSuccessStories />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <StudentVideos />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AllTestimonials />
      </motion.div>
    </div>
  );
}
