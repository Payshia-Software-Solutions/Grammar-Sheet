"use client";

import Image from "next/image";
import { MapPin, Heart } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const featuresEn = [
  {
    icon: MapPin,
    title: "Sri Lankan Syllabus Focused",
    description: "Every lesson aligns perfectly with the local curriculum and exam requirements.",
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Culturally Relatable Examples",
    description: "Learn English through examples that resonate with Sri Lankan culture and daily life.",
    iconBgColor: "bg-green-100",
    iconTextColor: "text-green-600",
  },
];

const featuresSi = [
  {
    icon: MapPin,
    title: "ශ්‍රී ලංකා විෂය නිර්දේශය කේන්ද්‍ර කරගත්",
    description: "සෑම පාඩමක්ම දේශීය විෂය මාලාවට සහ විභාග අවශ්‍යතාවලට මනාව ගැලපේ.",
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "සංස්කෘතිකව අදාළ උදාහරණ",
    description: "ශ්‍රී ලාංකික සංස්කෘතිය සහ දෛනික ජීවිතය සමඟ අනුනාද වන උදාහරණ හරහා ඉංග්‍රීසි ඉගෙන ගන්න.",
    iconBgColor: "bg-green-100",
    iconTextColor: "text-green-600",
  },
];

const translations = {
    en: {
        title: "Rooted in Local Learning",
        subtitle: "Understanding our culture, enhancing your English",
        features: featuresEn
    },
    si: {
        title: "දේශීය ඉගෙනුම තුළ මුල් බැස ඇත",
        subtitle: "අපේ සංස්කෘතිය තේරුම් ගනිමින්, ඔබේ ඉංග්‍රීසි වැඩි දියුණු කරමින්",
        features: featuresSi
    }
}

export function RootedInLearning() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            {t.title}
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-lg mt-4">
            {t.subtitle}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            {t.features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${feature.iconBgColor}`}>
                    <Icon className={`w-8 h-8 ${feature.iconTextColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Students in a classroom"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="students classroom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
