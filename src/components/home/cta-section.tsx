
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const translations = {
  en: {
    title: "Have Questions? Get in Touch Today!",
    subtitle: "Ready to start your English learning journey? Contact us for more information.",
    buttonText: "Contact Us"
  },
  si: {
    title: "ප්‍රශ්න තිබේද? අදම සම්බන්ධ වන්න!",
    subtitle: "ඔබගේ ඉංග්‍රීසි ඉගෙනීමේ ගමන ආරම්භ කිරීමට සූදානම්ද? වැඩි විස්තර සඳහා අප අමතන්න.",
    buttonText: "අප අමතන්න"
  }
}

export function CtaSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;
  
  return (
    <section className="w-full bg-gradient-to-r from-blue-500 to-green-400">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center text-white p-4">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl mb-4">
            {t.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-blue-100">
            {t.subtitle}
          </p>
          <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-bold rounded-full px-8">
            <Link href="/contact">{t.buttonText}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
