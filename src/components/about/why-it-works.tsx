"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const statsEn = [
  {
    value: "500+",
    label: "Students Taught",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    value: "95%",
    label: "Success Rate",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    value: "10+",
    label: "Years Experience",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
];

const statsSi = [
  {
    value: "500+",
    label: "ඉගැන්වූ සිසුන්",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  {
    value: "95%",
    label: "සාර්ථකත්ව අනුපාතය",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  {
    value: "10+",
    label: "වසරක පළපුරුද්ද",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
];

const testimonialsEn = [
  {
    quote: "Miss Priyanka made English so easy to understand. My grades improved from C to A within 6 months!",
    name: "Kasun Perera",
    grade: "Grade 10",
    avatarSrc: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYm95fGVufDB8fHx8MTc1Mjc3NzE3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "KP",
    avatarHint: "student boy",
  },
  {
    quote: "The best English teacher I've ever had. She explains everything clearly and makes learning fun!",
    name: "Nethmi Silva",
    grade: "Grade 11",
    avatarSrc: "https://images.unsplash.com/photo-1623945194105-cd36c4433390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzdHVkZW50JTIwZ2lybHxlbnwwfHx8fDE3NTI3NzcxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "NS",
    avatarHint: "student girl",
  },
  {
    quote: "The focused grammar drills were incredibly helpful for my O/L exams. I felt so much more confident.",
    name: "Fathima Rizvi",
    grade: "Grade 11",
    avatarSrc: "https://images.unsplash.com/photo-1618355776464-8666794d2520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzdHVkZW50JTIwZ2lybHxlbnwwfHx8fDE3NTI3NzcxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "FR",
    avatarHint: "student girl",
  },
    {
    quote: "A fantastic teacher who is patient and supportive. My son's English has improved beyond my expectations.",
    name: "Suresh Gamage",
    grade: "Parent of Grade 8 Student",
    avatarSrc: "https://images.unsplash.com/photo-1721736738624-12958f388434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwYXJlbnQlMjBtYW58ZW58MHx8fHwxNzUyNzc3MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "SG",
    avatarHint: "parent man",
  },
];

const testimonialsSi = [
  {
    quote: "ප්‍රියංකා මිස් ඉංග්‍රීසි තේරුම් ගැනීමට ඉතා පහසු කළා. මාස 6ක් ඇතුළත මගේ ලකුණු C සිට A දක්වා වැඩිදියුණු වුණා!",
    name: "කසුන් පෙරේරා",
    grade: "10 ශ්‍රේණිය",
    avatarSrc: "https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYm95fGVufDB8fHx8MTc1Mjc3NzE3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "KP",
    avatarHint: "student boy",
  },
  {
    quote: "මට හිටපු හොඳම ඉංග්‍රීසි ගුරුවරිය. ඇය හැමදේම පැහැදිලිව විස්තර කරනවා, ඉගෙනීම විනෝදජනක කරනවා!",
    name: "නෙත්මි සිල්වා",
    grade: "11 ශ්‍රේණිය",
    avatarSrc: "https://images.unsplash.com/photo-1623945194105-cd36c4433390?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzdHVkZW50JTIwZ2lybHxlbnwwfHx8fDE3NTI3NzcxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "NS",
    avatarHint: "student girl",
  },
  {
    quote: "සා/පෙළ විභාගයට අවධානය යොමු කළ ව්‍යාකරණ අභ්‍යාස ඉතා ප්‍රයෝජනවත් වුණා. මට ගොඩක් විශ්වාසයක් දැනුණා.",
    name: "ෆාතිමා රිස්වි",
    grade: "11 ශ්‍රේණිය",
    avatarSrc: "https://images.unsplash.com/photo-1618355776464-8666794d2520?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxzdHVkZW50JTIwZ2lybHxlbnwwfHx8fDE3NTI3NzcxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "FR",
    avatarHint: "student girl",
  },
    {
    quote: "ඉවසිලිවන්ත සහ සහයෝගය දක්වන විශිෂ්ට ගුරුවරයෙක්. මගේ පුතාගේ ඉංග්‍රීසි මගේ බලාපොරොත්තු ඉක්මවා වැඩිදියුණු වෙලා.",
    name: "සුරේෂ් ගමගේ",
    grade: "8 ශ්‍රේණියේ ශිෂ්‍යයෙකුගේ දෙමාපිය",
    avatarSrc: "https://images.unsplash.com/photo-1721736738624-12958f388434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw4fHxwYXJlbnQlMjBtYW58ZW58MHx8fHwxNzUyNzc3MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "SG",
    avatarHint: "parent man",
  },
];


const translations = {
  en: {
    title: "Why Grammar Seed Works",
    stats: statsEn,
    testimonials: testimonialsEn,
  },
  si: {
    title: "Grammar Seed ක්‍රියාත්මක වන්නේ ඇයි",
    stats: statsSi,
    testimonials: testimonialsSi,
  }
}

export function WhyItWorks() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;
  
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            {t.title}
          </h2>
          <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {t.stats.map((stat) => (
            <Card key={stat.label} className={`${stat.bgColor} border-none shadow-lg rounded-2xl`}>
              <CardContent className="p-8 text-center">
                <p className={`text-4xl font-bold ${stat.textColor} mb-2`}>{stat.value}</p>
                <p className={`font-semibold ${stat.textColor}`}>{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {t.testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-2">
                    <Card className="bg-secondary/50 border-none shadow-lg rounded-2xl h-full">
                      <CardContent className="p-8 space-y-4 flex flex-col h-full">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                            ))}
                        </div>
                        <blockquote className="text-muted-foreground italic text-base min-h-[72px] flex-grow">
                          &quot;{testimonial.quote}&quot;
                        </blockquote>
                        <div className="flex items-center gap-4 pt-2">
                            <Avatar className="h-12 w-12">
                                <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.avatarHint}/>
                                <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <p className="text-sm text-muted-foreground">{testimonial.grade}</p>
                            </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
