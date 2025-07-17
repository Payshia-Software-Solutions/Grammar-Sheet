"use client"

import { motion } from "framer-motion";
import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { ChooseYourGradeSection } from "@/components/lessons/choose-your-grade-section";
import { ClassDetailsSection } from "@/components/lessons/class-details-section";
import { StudentAchievementsSection } from "@/components/lessons/student-achievements-section";
import { WhyChooseClassesSection } from "@/components/lessons/why-choose-classes-section";
import { LessonsCtaSection } from "@/components/lessons/lessons-cta-section";

export default function LessonsPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div>
      <HeroHeaderSection
        title="English Classes for Grades 6 to 11"
        subtitle="Structured, effective English learning tailored to the Sri Lankan syllabus."
        imageUrl="https://placehold.co/1920x600.png"
        imageHint="students learning"
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ChooseYourGradeSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <ClassDetailsSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <WhyChooseClassesSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <StudentAchievementsSection />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <LessonsCtaSection />
      </motion.div>
    </div>
  );
}
