"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Monitor, Clock } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const gradeDataEn = [
  {
    grade: 6,
    title: "Grade 6 - Foundation Grammar",
    description: "Basic grammar, simple tenses, vocabulary building, and reading comprehension",
    type: "Online/Physical",
    duration: "2 hrs/week",
    color: "green",
  },
  {
    grade: 7,
    title: "Grade 7 - Grammar Plus",
    description: "Advanced grammar, essay writing, comprehension, and vocabulary expansion",
    type: "Hybrid",
    duration: "2.5 hrs/week",
    color: "blue",
  },
  {
    grade: 8,
    title: "Grade 8 - Language Skills",
    description: "Complex grammar, creative writing, literature basics, and speaking skills",
    type: "Online/Physical",
    duration: "3 hrs/week",
    color: "orange",
  },
  {
    grade: 9,
    title: "Grade 9 - O/L Prep",
    description: "O/L focused grammar, essay techniques, literature analysis, past papers",
    type: "Hybrid",
    duration: "3.5 hrs/week",
    color: "purple",
  },
  {
    grade: 10,
    title: "Grade 10 - O/L Mastery",
    description: "Intensive O/L preparation, advanced writing, literature, exam strategies",
    type: "Online/Physical",
    duration: "4 hrs/week",
    color: "red",
  },
  {
    grade: 11,
    title: "Grade 11 - A/L Foundation",
    description: "A/L English preparation, advanced literature, critical analysis, research skills",
    type: "Hybrid",
    duration: "4 hrs/week",
    color: "indigo",
  },
];

const gradeDataSi = [
  {
    grade: 6,
    title: "6 ශ්‍රේණිය - මූලික ව්‍යාකරණ",
    description: "මූලික ව්‍යාකරණ, සරල කාල, වචන මාලාව ගොඩනැගීම සහ කියවීමේ අවබෝධය",
    type: "මාර්ගගත/භෞතික",
    duration: "සතියකට පැය 2",
    color: "green",
  },
  {
    grade: 7,
    title: "7 ශ්‍රේණිය - ව්‍යාකරණ ප්ලස්",
    description: "උසස් ව්‍යාකරණ, රචනා ලිවීම, අවබෝධය සහ වචන මාලාව පුළුල් කිරීම",
    type: "දෙමුහුන්",
    duration: "සතියකට පැය 2.5",
    color: "blue",
  },
  {
    grade: 8,
    title: "8 ශ්‍රේණිය - භාෂා කුසලතා",
    description: "සංකීර්ණ ව්‍යාකරණ, නිර්මාණාත්මක ලිවීම, සාහිත්‍ය මූලික කරුණු සහ කථන කුසලතා",
    type: "මාර්ගගත/භෞතික",
    duration: "සතියකට පැය 3",
    color: "orange",
  },
  {
    grade: 9,
    title: "9 ශ්‍රේණිය - සා/පෙළ සූදානම් කිරීම",
    description: "සා/පෙළ ඉලක්ක කරගත් ව්‍යාකරණ, රචනා ශිල්පීය ක්‍රම, සාහිත්‍ය විශ්ලේෂණය, පසුගිය ප්‍රශ්න පත්‍ර",
    type: "දෙමුහුන්",
    duration: "සතියකට පැය 3.5",
    color: "purple",
  },
  {
    grade: 10,
    title: "10 ශ්‍රේණිය - සා/පෙළ ප්‍රගුණ කිරීම",
    description: "දැඩි සා/පෙළ සූදානම, උසස් ලිවීම, සාහිත්‍යය, විභාග උපාය මාර්ග",
    type: "මාර්ගගත/භෞතික",
    duration: "සතියකට පැය 4",
    color: "red",
  },
  {
    grade: 11,
    title: "11 ශ්‍රේණිය - උ/පෙළ පදනම",
    description: "උ/පෙළ ඉංග්‍රීසි සූදානම, උසස් සාහිත්‍යය, විවේචනාත්මක විශ්ලේෂණය, පර්යේෂණ කුසලතා",
    type: "දෙමුහුන්",
    duration: "සතියකට පැය 4",
    color: "indigo",
  },
];

const colorClasses = {
  green: {
    circle: "bg-green-500",
    button: "bg-green-500 hover:bg-green-600 text-white",
  },
  blue: {
    circle: "bg-blue-600",
    button: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  orange: {
    circle: "bg-orange-500",
    button: "bg-orange-500 hover:bg-orange-600 text-white",
  },
  purple: {
    circle: "bg-purple-600",
    button: "bg-purple-600 hover:bg-purple-700 text-white",
  },
  red: {
    circle: "bg-red-600",
    button: "bg-red-600 hover:bg-red-700 text-white",
  },
  indigo: {
    circle: "bg-indigo-600",
    button: "bg-indigo-600 hover:bg-indigo-700 text-white",
  },
};

const translations = {
  en: {
    title: "Choose Your Grade",
    viewDetails: "View Details",
    grades: gradeDataEn,
  },
  si: {
    title: "ඔබේ ශ්‍රේණිය තෝරන්න",
    viewDetails: "විස්තර බලන්න",
    grades: gradeDataSi,
  }
}

export function ChooseYourGradeSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            {t.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {t.grades.map((item) => {
            const colors = colorClasses[item.color as keyof typeof colorClasses];
            return (
              <Card key={item.grade} className="shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-2xl flex flex-col bg-card">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={cn("w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0", colors.circle)}>
                      {item.grade}
                    </div>
                    <h3 className="text-xl font-bold font-headline flex-1 text-left">{item.title.split(' - ')[1]}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 flex-grow min-h-[60px]">
                    {item.description}
                  </p>
                  <div className="space-y-3 text-muted-foreground text-sm mb-6">
                      <div className="flex items-center gap-2">
                        <Monitor className="w-4 h-4" />
                        <span>{item.type}</span>
                      </div>
                       <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{item.duration}</span>
                      </div>
                  </div>
                  <Button asChild className={cn("w-full mt-auto rounded-lg", colors.button)}>
                    <Link href="/contact">{t.viewDetails}</Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  );
}
