"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const translations = {
  en: {
    featured: "Featured",
    date: "June 28, 2025",
    title: "New Grade 11 Class Starts – July 10th",
    description: "Join our comprehensive Grade 11 English program designed specifically for O/L preparation. Limited seats available with personalized attention and proven teaching methods.",
    readMore: "Read More"
  },
  si: {
    featured: "විශේෂාංග",
    date: "2025 ජූනි 28",
    title: "නව 11 ශ්‍රේණියේ පන්තිය ජූලි 10 වන දා ආරම්භ වේ",
    description: "සා/පෙළ සූදානම සඳහා විශේෂයෙන් නිර්මාණය කර ඇති අපගේ පුළුල් 11 ශ්‍රේණියේ ඉංග්‍රීසි වැඩසටහනට සම්බන්ධ වන්න. පුද්ගලාරෝපිත අවධානය සහ ඔප්පු කළ ඉගැන්වීමේ ක්‍රම සමඟ සීමිත ආසන සංඛ්‍යාවක් ඇත.",
    readMore: "වැඩිදුර කියවන්න"
  }
};

export function FeaturedNews() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-green-500/10 text-green-900 dark:text-green-200 rounded-2xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                        <Badge variant="outline" className="bg-white dark:bg-green-900/50 border-none text-green-800 dark:text-green-200 font-semibold">
                            <Bookmark className="w-4 h-4 mr-2" />
                            {t.featured}
                        </Badge>
                        <p className="text-sm font-medium text-green-700 dark:text-green-300">{t.date}</p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">
                        {t.title}
                    </h2>
                    <p className="text-base text-green-800 dark:text-green-200/90 max-w-3xl">
                        {t.description}
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Button asChild variant="outline" size="lg" className="bg-white dark:bg-green-900/50 text-green-800 dark:text-green-200 hover:bg-gray-50 dark:hover:bg-green-900/80">
                        <Link href="#">{t.readMore}</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
