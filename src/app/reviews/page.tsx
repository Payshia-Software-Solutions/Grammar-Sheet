"use client"

import { motion } from "framer-motion";
import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { TopSuccessStories } from "@/components/reviews/top-success-stories";
import { StudentVideos } from "@/components/reviews/student-videos";
import { AllTestimonials } from "@/components/reviews/all-testimonials";

export default function ReviewsPage() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div>
      <HeroHeaderSection
        title="Hear From Our Students"
        subtitle="Real success stories from Grade 6-11 students who have transformed their English skills and achieved their academic goals"
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
