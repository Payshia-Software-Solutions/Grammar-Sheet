import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { TeacherProfile } from "@/components/about/teacher-profile";
import { TeachingApproach } from "@/components/about/teaching-approach";
import { WhyItWorks } from "@/components/about/why-it-works";
import { RootedInLearning } from "@/components/about/rooted-in-learning";
import { AboutCtaSection } from "@/components/about/about-cta-section";

export default function AboutPage() {
  return (
    <div>
      <HeroHeaderSection
        title="Meet Your English Guide"
        subtitle="Passionate about helping every Sri Lankan student master English."
        imageUrl="https://placehold.co/1920x600.png"
        imageHint="students classroom"
      />
      <div className="container mx-auto py-16 md:py-24 px-4 md:px-6">
        <TeacherProfile />
      </div>
      <TeachingApproach />
      <WhyItWorks />
      <RootedInLearning />
      <AboutCtaSection />
    </div>
  );
}
