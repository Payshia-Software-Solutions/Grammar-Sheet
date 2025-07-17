"use client";

import { BookOpen, FileText, Monitor, Users } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const featuresEn = [
    {
        icon: Users,
        title: "Experienced Teacher",
        description: "15+ years teaching experience"
    },
    {
        icon: BookOpen,
        title: "Syllabus-Aligned",
        description: "Following official curriculum"
    },
    {
        icon: FileText,
        title: "Past Paper Practice",
        description: "Extensive exam preparation"
    },
    {
        icon: Monitor,
        title: "Flexible Learning",
        description: "Online & in-person options"
    }
];

const featuresSi = [
    {
        icon: Users,
        title: "පළපුරුදු ගුරුවරයා",
        description: "වසර 15+ ඉගැන්වීමේ පළපුරුද්ද"
    },
    {
        icon: BookOpen,
        title: "විෂය නිර්දේශයට අනුකූලයි",
        description: "නිල විෂය මාලාව අනුගමනය කිරීම"
    },
    {
        icon: FileText,
        title: "පසුගිය ප්‍රශ්න පත්‍ර අභ්‍යාස",
        description: "පුළුල් විභාග සූදානම"
    },
    {
        icon: Monitor,
        title: "නම්‍යශීලී ඉගෙනීම",
        description: "මාර්ගගත සහ භෞතික විකල්ප"
    }
];

const translations = {
  en: {
    title: "Why Choose Our Classes",
    features: featuresEn
  },
  si: {
    title: "අපගේ පන්ති තෝරා ගන්නේ ඇයි",
    features: featuresSi
  }
}

export function WhyChooseClassesSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language as keyof typeof translations] || translations.en;

    return (
        <section className="w-full py-16 md:py-24 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-green-900 dark:text-green-100">
                        {t.title}
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-center">
                    {t.features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div key={index} className="flex flex-col items-center gap-4">
                                <Icon className="w-10 h-10 text-green-700 dark:text-green-300" />
                                <h3 className="text-lg font-bold font-headline text-green-900 dark:text-green-100">{feature.title}</h3>
                                <p className="text-green-800 dark:text-green-200">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
