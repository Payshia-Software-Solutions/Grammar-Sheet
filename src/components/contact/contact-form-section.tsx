"use client"

import ContactForm from "@/app/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const translations = {
  en: {
    title: "Send us a Message",
    subtitle: "Fill out the form below and we'll get back to you soon"
  },
  si: {
    title: "අපට පණිවිඩයක් එවන්න",
    subtitle: "පහත පෝරමය පුරවන්න, අපි ඉක්මනින් ඔබ හා සම්බන්ධ වන්නෙමු"
  }
}

export function ContactFormSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language as keyof typeof translations] || translations.en;
    
    return (
        <section className="w-full py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-headline font-bold">{t.title}</h2>
                        <p className="text-muted-foreground mt-2">{t.subtitle}</p>
                    </div>
                    <Card className="p-8 shadow-lg bg-card">
                        <CardContent className="p-0">
                           <ContactForm />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
