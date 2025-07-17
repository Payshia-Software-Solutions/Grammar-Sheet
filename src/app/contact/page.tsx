import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ContactForm from "./contact-form";
import { HeroHeaderSection } from "@/components/layout/hero-header-section";

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
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-headline font-bold">About Your Teacher</h2>
              <div className="flex items-center gap-4">
                <Avatar className="h-24 w-24 border-2 border-primary">
                  <AvatarImage src="https://placehold.co/100x100.png" alt="Teacher Jane Doe" data-ai-hint="teacher person" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-2xl font-semibold font-headline">Jane Doe</h3>
                  <p className="text-primary">Grammar Enthusiast & Educator</p>
                </div>
              </div>
              <p className="text-muted-foreground text-base">
                With over 10 years of experience in teaching English, Jane is passionate about making grammar accessible and understandable for everyone. She believes that a strong foundation in grammar is key to effective communication. This website is her way of sharing her knowledge with a wider audience.
              </p>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-headline font-bold">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
