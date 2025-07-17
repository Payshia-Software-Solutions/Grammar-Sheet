"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Target, Pencil, FileText, Users } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const teachingMethodsEn = [
  {
    icon: Target,
    title: "Focused Grammar Drills",
    description: "Clear breakdown of essential grammar points with real examples that make sense to Sri Lankan students.",
    iconBgColor: "bg-blue-100 dark:bg-blue-900/50",
    iconTextColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Pencil,
    title: "Practical Writing Practice",
    description: "Improve essays, comprehension, and structured answers with step-by-step guidance.",
    iconBgColor: "bg-green-100 dark:bg-green-900/50",
    iconTextColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: FileText,
    title: "Past Paper Strategies",
    description: "O/L and school paper preparation techniques that boost confidence and performance.",
    iconBgColor: "bg-orange-100 dark:bg-orange-900/50",
    iconTextColor: "text-orange-500 dark:text-orange-400",
  },
  {
    icon: Users,
    title: "Individual Attention",
    description: "Each student receives guidance tailored to their specific needs and learning style.",
    iconBgColor: "bg-purple-100 dark:bg-purple-900/50",
    iconTextColor: "text-purple-600 dark:text-purple-400",
  },
];

const teachingMethodsSi = [
    {
    icon: Target,
    title: "අවධානය යොමු කළ ව්‍යාකරණ අභ්‍යාස",
    description: "ශ්‍රී ලාංකික සිසුන්ට තේරුම් ගත හැකි සැබෑ උදාහරණ සමඟ අත්‍යවශ්‍ය ව්‍යාකරණ කරුණු පැහැදිලිව බිඳ දැමීම.",
    iconBgColor: "bg-blue-100 dark:bg-blue-900/50",
    iconTextColor: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Pencil,
    title: "ප්‍රායෝගික ලිවීමේ පුහුණුව",
    description: "පියවරෙන් පියවර මගපෙන්වීම සමඟ රචනා, අවබෝධය, සහ ව්‍යුහගත පිළිතුරු වැඩි දියුණු කිරීම.",
    iconBgColor: "bg-green-100 dark:bg-green-900/50",
    iconTextColor: "text-green-600 dark:text-green-400",
  },
  {
    icon: FileText,
    title: "පසුගිය ප්‍රශ්න පත්‍ර ක්‍රමෝපායන්",
    description: "විශ්වාසය සහ කාර්ය සාධනය ඉහළ නංවන සා/පෙළ සහ පාසල් ප්‍රශ්න පත්‍ර සකස් කිරීමේ ශිල්පීය ක්‍රම.",
    iconBgColor: "bg-orange-100 dark:bg-orange-900/50",
    iconTextColor: "text-orange-500 dark:text-orange-400",
  },
  {
    icon: Users,
    title: "තනි පුද්ගල අවධානය",
    description: "සෑම සිසුවෙකුටම ඔවුන්ගේ විශේෂිත අවශ්‍යතා සහ ඉගෙනුම් විලාසයට ගැලපෙන මගපෙන්වීමක් ලැබේ.",
    iconBgColor: "bg-purple-100 dark:bg-purple-900/50",
    iconTextColor: "text-purple-600 dark:text-purple-400",
  },
];


const translations = {
    en: {
        title: "Our Teaching Approach",
        subtitle: "Every lesson is designed with care, combining proven methods with personalized attention to help you succeed.",
        methods: teachingMethodsEn
    },
    si: {
        title: "අපගේ ඉගැන්වීමේ ප්‍රවේශය",
        subtitle: "සෑම පාඩමක්ම සැලකිල්ලෙන් නිර්මාණය කර ඇත, ඔබට සාර්ථක වීමට උපකාර කිරීම සඳහා ඔප්පු කළ ක්‍රම සහ පුද්ගලීකරණය කළ අවධානය ඒකාබද්ධ කරයි.",
        methods: teachingMethodsSi
    }
}


export function TeachingApproach() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;
  
  return (
    <section className="w-full py-16 md:py-24 bg-secondary">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            {t.title}
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-lg">
            {t.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {t.methods.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl border-none bg-card text-center">
                <CardContent className="p-8 flex flex-col items-center">
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${feature.iconBgColor}`}>
                    <Icon className={`w-8 h-8 ${feature.iconTextColor}`} />
                  </div>
                  <h3 className="text-lg font-bold font-headline mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
