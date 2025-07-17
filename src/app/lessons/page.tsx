import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { ChooseYourGradeSection } from "@/components/lessons/choose-your-grade-section";
import { ClassDetailsSection } from "@/components/lessons/class-details-section";

export default function LessonsPage() {
  return (
    <div>
      <HeroHeaderSection
        title="English Classes for Grades 6 to 11"
        subtitle="Structured, effective English learning tailored to the Sri Lankan syllabus."
        imageUrl="https://placehold.co/1920x600.png"
        imageHint="students learning"
      />
      <ChooseYourGradeSection />
      <ClassDetailsSection />
    </div>
  );
}
