"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const translations = {
  en: {
    title: "Stay Updated",
    subtitle: "Want updates sent to your WhatsApp or Email?",
    namePlaceholder: "Your Name",
    mobilePlaceholder: "Mobile Number",
    gradePlaceholder: "Select Grade",
    emailPlaceholder: "Email Address",
    subscribeButton: "Subscribe Now",
    grades: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11"]
  },
  si: {
    title: "යාවත්කාලීනව සිටින්න",
    subtitle: "ඔබේ WhatsApp හෝ විද්‍යුත් තැපෑලට යාවත්කාලීන කිරීම් අවශ්‍යද?",
    namePlaceholder: "ඔබේ නම",
    mobilePlaceholder: "ජංගම දුරකථන අංකය",
    gradePlaceholder: "ශ්‍රේණිය තෝරන්න",
    emailPlaceholder: "විද්‍යුත් තැපැල් ලිපිනය",
    subscribeButton: "දැන් දායක වන්න",
    grades: ["6 ශ්‍රේණිය", "7 ශ්‍රේණිය", "8 ශ්‍රේණිය", "9 ශ්‍රේණිය", "10 ශ්‍රේණිය", "11 ශ්‍රේණිය"]
  }
}

export function StayUpdatedSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-500 to-green-400">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto p-8 md:p-12 shadow-xl rounded-2xl bg-card">
          <CardContent className="p-0">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-card-foreground">
                {t.title}
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                {t.subtitle}
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder={t.namePlaceholder} />
                <Input placeholder={t.mobilePlaceholder} />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder={t.gradePlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {t.grades.map((grade, index) => (
                       <SelectItem key={index} value={(index + 6).toString()}>{grade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input type="email" placeholder={t.emailPlaceholder} />
              </div>
              <Button type="submit" className="w-full" size="lg">
                {t.subscribeButton}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
