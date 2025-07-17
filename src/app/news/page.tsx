"use client"

import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { FeaturedNews } from "@/components/news/featured-news";
import { NewsList } from "@/components/news/news-list";
import { StayUpdatedSection } from "@/components/news/stay-updated-section";
import { useContext } from "react";
import { LanguageContext } from "@/components/layout/language-toggle";
import { motion } from "framer-motion";

const translations = {
  en: {
    title: "News & Notices",
    subtitle: "Stay updated with the latest announcements, class schedules, and exam tips."
  },
  si: {
    title: "පුවත් සහ නිවේදන",
    subtitle: "නවතම නිවේදන, පන්ති කාලසටහන්, සහ විභාග උපදෙස් සමඟ යාවත්කාලීනව සිටින්න."
  }
}

export default function NewsPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-background">
      <HeroHeaderSection
        title={t.title}
        subtitle={t.subtitle}
        imageUrl="https://placehold.co/1920x600.png"
        imageHint="students teachers group photo"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <FeaturedNews />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <NewsList />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <StayUpdatedSection />
      </motion.div>
    </div>
  );
}
