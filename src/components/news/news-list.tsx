"use client"

import { useState, useContext } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Lightbulb, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { LanguageContext } from "../layout/language-toggle";

const newsItemsEn = [
    {
        category: "Exam Tips",
        title: "5 Essential Grammar Rules for O/L English",
        date: "June 25, 2025",
        description: "Master these fundamental grammar concepts to excel in your O/L English examination. From subject-verb agreement to proper tense usage...",
        color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
    },
    {
        category: "Notice",
        title: "Class Schedule Changes - Week of July 1st",
        date: "June 22, 2025",
        description: "Important updates to our regular class schedule due to public holidays. All Grade 9 and 10 classes will be rescheduled...",
        color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
    },
    {
        category: "Events",
        title: "Free Trial Classes Available This Week",
        date: "June 20, 2025",
        description: "Experience our teaching methodology with free trial classes for new students. Available for all grades with limited slots...",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
    },
    {
        category: "Tips",
        title: "How to Improve Your Essay Writing Skills",
        date: "June 18, 2025",
        description: "Learn effective techniques to structure your essays and improve your writing style for better marks in examinations...",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300"
    }
];
const newsItemsSi = [
    {
        category: "විභාග උපදෙස්",
        title: "සා/පෙළ ඉංග්‍රීසි සඳහා අත්‍යවශ්‍ය ව්‍යාකරණ රීති 5ක්",
        date: "2025 ජූනි 25",
        description: "ඔබගේ සා/පෙළ ඉංග්‍රීසි විභාගයෙන් විශිෂ්ට වීමට මෙම මූලික ව්‍යාකරණ සංකල්ප ප්‍රගුණ කරන්න. විෂය-ක්‍රියා ගිවිසුමේ සිට නිසි කාල භාවිතය දක්වා...",
        color: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
    },
    {
        category: "දැන්වීම",
        title: "පන්ති කාලසටහන් වෙනස්වීම් - ජූලි 1 වන සතිය",
        date: "2025 ජූනි 22",
        description: "පොදු නිවාඩු හේතුවෙන් අපගේ සාමාන්‍ය පන්ති කාලසටහනට වැදගත් යාවත්කාලීන කිරීම්. සියලුම 9 සහ 10 ශ්‍රේණිවල පන්ති නැවත කාලසටහන්ගත කෙරේ...",
        color: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
    },
    {
        category: "සිදුවීම්",
        title: "මෙම සතියේ නොමිලේ ආදර්ශ පන්ති තිබේ",
        date: "2025 ජූනි 20",
        description: "නව සිසුන් සඳහා නොමිලේ ආදර්ශ පන්ති සමඟ අපගේ ඉගැන්වීමේ ක්‍රමවේදය අත්විඳින්න. සීමිත ස්ථාන සහිත සියලුම ශ්‍රේණි සඳහා තිබේ...",
        color: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
    },
    {
        category: "උපදෙස්",
        title: "ඔබේ රචනා ලිවීමේ කුසලතා වැඩි දියුණු කර ගන්නේ කෙසේද",
        date: "2025 ජූනි 18",
        description: "විභාගවලදී වඩා හොඳ ලකුණු සඳහා ඔබේ රචනා ව්‍යුහගත කිරීමට සහ ඔබේ ලිවීමේ ශෛලිය වැඩිදියුණු කිරීමට ඵලදායී ශිල්පීය ක්‍රම ඉගෙන ගන්න...",
        color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300"
    }
];

const quickTipsEn = [
    "Use active voice in essays for clearer expression",
    "Review a grammar point each morning",
    "Practice past papers weekly for better preparation",
    "Read English newspapers to improve vocabulary"
];
const quickTipsSi = [
    "පැහැදිලි ප්‍රකාශනය සඳහා රචනාවලදී Active Voice භාවිතා කරන්න",
    "සෑම උදෑසනකම ව්‍යාකරණ කරුණක් සමාලෝචනය කරන්න",
    "වඩා හොඳ සූදානමක් සඳහා සතිපතා පසුගිය ප්‍රශ්න පත්‍ර පුහුණු වන්න",
    "වචන මාලාව වැඩි දියුණු කිරීම සඳහා ඉංග්‍රීසි පුවත්පත් කියවන්න"
];

const upcomingEventsEn = [
    { name: "Trial Class", date: "July 10", color: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50" },
    { name: "Term End Test", date: "August 5", color: "bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/30 dark:hover:bg-orange-900/50" },
    { name: "Holiday Break", date: "Aug 15-22", color: "bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-900/50" }
];
const upcomingEventsSi = [
    { name: "ආදර්ශ පන්තිය", date: "ජූලි 10", color: "bg-blue-50 hover:bg-blue-100 dark:bg-blue-900/30 dark:hover:bg-blue-900/50" },
    { name: "වාර අවසාන පරීක්ෂණය", date: "අගෝස්තු 5", color: "bg-orange-50 hover:bg-orange-100 dark:bg-orange-900/30 dark:hover:bg-orange-900/50" },
    { name: "නිවාඩු කාලය", date: "අගෝ 15-22", color: "bg-green-50 hover:bg-green-100 dark:bg-green-900/30 dark:hover:bg-green-900/50" }
];

const filtersEn = ["All", "Notices", "Tips", "Events", "Schedule"];
const filtersSi = ["සියල්ල", "දැන්වීම්", "උපදෙස්", "සිදුවීම්", "කාලසටහන"];

const translations = {
    en: {
        filters: filtersEn,
        newsItems: newsItemsEn,
        viewDetails: "View Details",
        quickTipsTitle: "Quick English Tips",
        quickTips: quickTipsEn,
        upcomingEventsTitle: "Upcoming Events",
        upcomingEvents: upcomingEventsEn,
    },
    si: {
        filters: filtersSi,
        newsItems: newsItemsSi,
        viewDetails: "විස්තර බලන්න",
        quickTipsTitle: "ඉක්මන් ඉංග්‍රීසි උපදෙස්",
        quickTips: quickTipsSi,
        upcomingEventsTitle: "ඉදිරි සිදුවීම්",
        upcomingEvents: upcomingEventsSi,
    }
}

export function NewsList() {
    const { language } = useContext(LanguageContext);
    const t = translations[language as keyof typeof translations] || translations.en;
    const [activeFilter, setActiveFilter] = useState(t.filters[0]);
    
    // Effect to update active filter when language changes
    useState(() => {
        setActiveFilter(t.filters[0]);
    });

    return (
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap gap-2 bg-card p-2 rounded-full shadow-sm">
                        {t.filters.map(filter => (
                            <Button
                                key={filter}
                                variant={activeFilter === filter ? "default" : "ghost"}
                                className={cn(
                                    "rounded-full px-6",
                                    activeFilter === filter ? "bg-primary text-primary-foreground" : "text-muted-foreground"
                                )}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                            </Button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* News Articles */}
                    <div className="lg:col-span-2 space-y-8">
                        {t.newsItems.map(item => (
                            <Card key={item.title} className="bg-card shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
                                <CardContent className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <Badge variant="outline" className={`font-semibold border-none ${item.color}`}>
                                            {item.category}
                                        </Badge>
                                        <p className="text-sm text-muted-foreground">{item.date}</p>
                                    </div>
                                    <h3 className="text-2xl font-bold font-headline mb-3">{item.title}</h3>
                                    <p className="text-muted-foreground mb-6">{item.description}</p>
                                    <Link href="#" className="font-semibold text-primary inline-flex items-center gap-2 group">
                                        {t.viewDetails}
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Quick Tips */}
                        <Card className="bg-card shadow-md rounded-2xl">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 font-headline">
                                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                                    {t.quickTipsTitle}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {t.quickTips.map(tip => (
                                        <li key={tip} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Upcoming Events */}
                        <Card className="bg-card shadow-md rounded-2xl">
                             <CardHeader>
                                <CardTitle className="flex items-center gap-3 font-headline">
                                    <Calendar className="w-6 h-6 text-blue-500" />
                                    {t.upcomingEventsTitle}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {t.upcomingEvents.map(event => (
                                        <li key={event.name}>
                                            <Link href="#" className={cn("block p-4 rounded-xl transition-colors", event.color)}>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="font-semibold text-foreground">{event.name}</p>
                                                        <p className="text-sm text-muted-foreground">{event.date}</p>
                                                    </div>
                                                    <ArrowRight className="w-5 h-5 text-muted-foreground" />
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
