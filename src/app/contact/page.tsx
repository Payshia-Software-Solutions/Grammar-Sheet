import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import ContactForm from "./contact-form";
import { TeacherProfile } from "@/components/about/teacher-profile";

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
        <div className="max-w-4xl mx-auto mt-16 md:mt-24">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-headline font-bold">Have Questions? Send a Message</h2>
            <div className="max-w-xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
