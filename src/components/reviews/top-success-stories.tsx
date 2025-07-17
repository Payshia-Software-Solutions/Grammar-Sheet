"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const testimonialsEn = [
  {
    quote: "My English grade improved from C to A+ in just one semester! The personalized teaching approach made all the difference.",
    name: "Sarah K.",
    role: "Grade 9 Student",
    prep: "Cambridge English Exam Prep",
    avatarSrc: "https://placehold.co/48x48.png",
    avatarFallback: "SK",
    avatarHint: "student girl",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  },
  {
    quote: "Our son gained incredible confidence in public speaking and writing. His presentation skills are now exceptional!",
    name: "Mr. & Mrs. Chen",
    role: "Parents of Grade 8 Student",
    prep: "Public Speaking & Writing",
    avatarSrc: "",
    avatarFallback: "C",
    avatarHint: "parents",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    badgeColor: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
  },
  {
    quote: "Achieved Band 8.0 in IELTS! The structured approach and practice materials were incredibly effective.",
    name: "Michael R.",
    role: "Grade 11 Student",
    prep: "IELTS Preparation",
    avatarSrc: "",
    avatarFallback: "MR",
    avatarHint: "student boy",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    badgeColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
  },
];

const testimonialsSi = [
  {
    quote: "එකම අධ්‍යයන වාරයක් තුළ මගේ ඉංග්‍රීසි ලකුණ C සිට A+ දක්වා වැඩිදියුණු වුණා! පුද්ගලාරෝපිත ඉගැන්වීමේ ප්‍රවේශය සියලු වෙනස ඇති කළා.",
    name: "සාරා කේ.",
    role: "9 ශ්‍රේණියේ ශිෂ්‍යාව",
    prep: "කේම්බ්‍රිජ් ඉංග්‍රීසි විභාග සූදානම",
    avatarSrc: "https://placehold.co/48x48.png",
    avatarFallback: "SK",
    avatarHint: "student girl",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    badgeColor: "bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300",
  },
  {
    quote: "අපේ පුතා ප්‍රසිද්ධ කථනය සහ ලිවීම පිළිබඳ ඇදහිය නොහැකි විශ්වාසයක් ලබා ගත්තා. ඔහුගේ ඉදිරිපත් කිරීමේ කුසලතා දැන් සුවිශේෂීයි!",
    name: "චෙන් මහතා සහ මහත්මිය",
    role: "8 ශ්‍රේණියේ ශිෂ්‍යයෙකුගේ දෙමාපියන්",
    prep: "ප්‍රසිද්ධ කථනය සහ ලිවීම",
    avatarSrc: "",
    avatarFallback: "C",
    avatarHint: "parents",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    badgeColor: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300",
  },
  {
    quote: "IELTS හි Band 8.0 ලබා ගත්තා! ව්‍යුහගත ප්‍රවේශය සහ පුහුණු ද්‍රව්‍ය ඇදහිය නොහැකි තරම් ඵලදායී විය.",
    name: "මයිකල් ආර්.",
    role: "11 ශ්‍රේණියේ ශිෂ්‍යයා",
    prep: "IELTS සූදානම් වීම",
    avatarSrc: "",
    avatarFallback: "MR",
    avatarHint: "student boy",
    bgColor: "bg-yellow-50 dark:bg-yellow-900/20",
    badgeColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300",
  },
];

const translations = {
  en: {
    title: "Our Top Success Stories",
    subtitle: "These remarkable achievements showcase the transformative power of dedicated English learning",
    testimonials: testimonialsEn
  },
  si: {
    title: "අපගේ ඉහළම සාර්ථක කතා",
    subtitle: "මෙම කැපී පෙනෙන ජයග්‍රහණ කැපවූ ඉංග්‍රීසි ඉගෙනීමේ පරිවර්තනීය බලය විදහා දක්වයි",
    testimonials: testimonialsSi
  }
}

export function TopSuccessStories() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            {t.title}
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg mt-4">
            {t.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.testimonials.map((testimonial, index) => (
            <Card key={index} className={`shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl border-none ${testimonial.bgColor}`}>
              <CardContent className="p-8 flex flex-col h-full space-y-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic text-base flex-grow">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
                <div className="flex items-center gap-4 pt-2">
                  {testimonial.avatarSrc && <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.avatarHint}/>
                      <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                 <Badge variant="outline" className={`border-none font-semibold ${testimonial.badgeColor}`}>{testimonial.prep}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
