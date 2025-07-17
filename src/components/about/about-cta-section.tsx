"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const translations = {
  en: {
    title: "Interested in learning more or joining a class?",
    subtitle: "Take the first step towards mastering English with personalized guidance.",
    viewDetails: "View Class Details",
    contactUs: "Contact Us"
  },
  si: {
    title: "තවත් ඉගෙන ගැනීමට හෝ පන්තියකට සම්බන්ධ වීමට කැමතිද?",
    subtitle: "පුද්ගලීකරණය කළ මගපෙන්වීම සමඟ ඉංග්‍රීසි ප්‍රගුණ කිරීම සඳහා පළමු පියවර ගන්න.",
    viewDetails: "පන්ති විස්තර බලන්න",
    contactUs: "අප අමතන්න"
  }
}

export function AboutCtaSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl mb-4">
            {t.title}
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-blue-100">
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-8">
              <Link href="/lessons">{t.viewDetails}</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 rounded-full px-8">
              <Link href="/contact">{t.contactUs}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
