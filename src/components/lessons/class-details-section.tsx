"use client";

import {
  BookOpen,
  CalendarDays,
  Clock,
  Tag,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const topicsEn = [
  "Advanced Grammar & Syntax",
  "Essay Writing Techniques",
  "Literature Analysis",
  "Reading Comprehension",
  "Past Paper Practice",
];

const topicsSi = [
  "උසස් ව්‍යාකරණ සහ වාක්‍ය වින්‍යාසය",
  "රචනා ලිවීමේ ශිල්පීය ක්‍රම",
  "සාහිත්‍ය විශ්ලේෂණය",
  "කියවීමේ අවබෝධය",
  "පසුගිය ප්‍රශ්න පත්‍ර අභ්‍යාස",
];

const scheduleDetailsEn = [
  {
    icon: Clock,
    text: "Saturdays & Sundays, 2-4 PM",
  },
  {
    icon: Users,
    text: "Max 15 students per batch",
  },
  {
    icon: Tag,
    text: "Rs. 8,000/month",
  },
];

const scheduleDetailsSi = [
  {
    icon: Clock,
    text: "සෙනසුරාදා සහ ඉරිදා, ප.ව. 2-4",
  },
  {
    icon: Users,
    text: "එක් කණ්ඩායමකට උපරිම සිසුන් 15",
  },
  {
    icon: Tag,
    text: "රු. 8,000/මසකට",
  },
];


const translations = {
  en: {
    title: "Grade 10 - O/L Mastery (Sample Detail)",
    topicsCovered: "Topics Covered",
    scheduleAndDetails: "Schedule & Details",
    joinClass: "Join This Class",
    topics: topicsEn,
    scheduleDetails: scheduleDetailsEn
  },
  si: {
    title: "10 ශ්‍රේණිය - සා/පෙළ ප්‍රගුණ කිරීම (නියැදි විස්තර)",
    topicsCovered: "ආවරණය වන මාතෘකා",
    scheduleAndDetails: "කාලසටහන සහ විස්තර",
    joinClass: "මෙම පන්තියට සහභාගී වන්න",
    topics: topicsSi,
    scheduleDetails: scheduleDetailsSi
  }
}

export function ClassDetailsSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <Card className="max-w-4xl mx-auto shadow-xl rounded-2xl bg-secondary">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8 text-center">
              {t.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  {t.topicsCovered}
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {t.topics.map((topic, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2 mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-3">
                  <CalendarDays className="w-6 h-6 text-primary" />
                  {t.scheduleAndDetails}
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {t.scheduleDetails.map((detail, index) => {
                    const Icon = detail.icon;
                    return (
                      <li key={index} className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-green-600" />
                        <span>{detail.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/contact">{t.joinClass}</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
