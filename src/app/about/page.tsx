"use client"

import { motion } from "framer-motion";
import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { TeacherProfile } from "@/components/about/teacher-profile";
import { TeachingApproach } from "@/components/about/teaching-approach";
import { WhyItWorks } from "@/components/about/why-it-works";
import { RootedInLearning } from "@/components/about/rooted-in-learning";
import { AboutCtaSection } from "@/components/about/about-cta-section";
import { useContext } from "react";
import { LanguageContext } from "@/components/layout/language-toggle";

const translations = {
  en: {
    title: "Meet Your English Guide",
    subtitle: "Passionate about helping every Sri Lankan student master English."
  },
  si: {
    title: "ඔබේ ඉංග්‍රීසි මගපෙන්වන්නා හමුවන්න",
    subtitle: "සෑම ශ්‍රී ලාංකික සිසුවෙකුටම ඉංග්‍රීසි ප්‍රගුණ කිරීමට උපකාර කිරීමට කැපවී සිටී."
  }
}

export default function AboutPage() {
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
        imageHint="students classroom"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
          <TeacherProfile />
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <TeachingApproach />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <WhyItWorks />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <RootedInLearning />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <AboutCtaSection />
      </motion.div>
    </div>
  );
}
