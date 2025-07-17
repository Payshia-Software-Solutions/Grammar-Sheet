"use client";

import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { ContactCards } from "@/components/contact/contact-cards";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { FaqSection } from "@/components/contact/faq-section";
import { ContactCtaSection } from "@/components/contact/contact-cta-section";
import { useContext } from "react";
import { LanguageContext } from "@/components/layout/language-toggle";
import { motion } from "framer-motion";

const translations = {
  en: {
    title: "Get in Touch",
    subtitle: "We'd love to hear from you. Contact us for class details, questions, or registration."
  },
  si: {
    title: "සම්බන්ධ වන්න",
    subtitle: "අප හා සම්බන්ධ වීම ගැන අපි සතුටු වෙමු. පන්ති විස්තර, ප්‍රශ්න, හෝ ලියාපදිංචිය සඳහා අප අමතන්න."
  }
}

export default function ContactPage() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div>
      <section className="relative w-full h-[50vh] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://placehold.co/1920x800.png')" }}
          data-ai-hint="teachers group photo"
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             className="space-y-4 max-w-3xl mx-auto"
          >
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {t.title}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
              {t.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <motion.section 
        className="relative -mt-20 z-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ContactCards />
      </motion.section>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ContactFormSection />
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <FaqSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ContactCtaSection />
      </motion.div>

    </div>
  );
}
