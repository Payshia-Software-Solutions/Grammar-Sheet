import { HeroHeaderSection } from "@/components/layout/hero-header-section";
import { ContactCards } from "@/components/contact/contact-cards";
import { ContactFormSection } from "@/components/contact/contact-form-section";
import { FaqSection } from "@/components/contact/faq-section";
import { ContactCtaSection } from "@/components/contact/contact-cta-section";

export default function ContactPage() {
  return (
    <div>
      <section className="relative w-full py-32 md:py-48 bg-gray-100">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://placehold.co/1920x800.png')" }}
          data-ai-hint="teachers group photo"
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-200">
            We&apos;d love to hear from you. Contact us for class details, questions, or registration.
          </p>
        </div>
      </section>

      <section className="relative -mt-32 z-20">
        <ContactCards />
      </section>
      
      <ContactFormSection />

      <FaqSection />

      <ContactCtaSection />

    </div>
  );
}
