"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";
  
const faqItemsEn = [
  {
    question: "How can I join a class?",
    answer: "Simply contact us via WhatsApp or phone, and we'll guide you through the registration process."
  },
  {
    question: "Can I do a trial lesson?",
    answer: "Yes! We offer trial lessons for new students to experience our teaching methods."
  },
  {
    question: "What are the payment options?",
    answer: "We accept bank transfers, cash payments, and mobile payment options for your convenience."
  },
]

const faqItemsSi = [
  {
    question: "මම පන්තියකට සම්බන්ධ වන්නේ කෙසේද?",
    answer: "සරලව WhatsApp හෝ දුරකථනය හරහා අපව සම්බන්ධ කරගන්න, අපි ලියාපදිංචි වීමේ ක්‍රියාවලිය හරහා ඔබට මග පෙන්වන්නෙමු."
  },
  {
    question: "මට ආදර්ශ පාඩමක් කළ හැකිද?",
    answer: "ඔව්! නව සිසුන්ට අපගේ ඉගැන්වීමේ ක්‍රම අත්විඳීමට අපි ආදර්ශ පාඩම් පිරිනමන්නෙමු."
  },
  {
    question: "ගෙවීම් විකල්ප මොනවාද?",
    answer: "ඔබගේ පහසුව සඳහා අපි බැංකු මාරු කිරීම්, මුදල් ගෙවීම්, සහ ජංගම ගෙවීම් විකල්ප පිළිගන්නෙමු."
  },
]

const translations = {
  en: {
    title: "Frequently Asked Questions",
    faqs: faqItemsEn
  },
  si: {
    title: "නිතර අසන ප්‍රශ්න",
    faqs: faqItemsSi
  }
}
  
export function FaqSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
              {t.title}
            </h2>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {t.faqs.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card p-4 rounded-lg shadow-sm border-none">
                <AccordionTrigger className="font-semibold text-lg hover:no-underline text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pt-2 text-left">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
