"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Lightbulb, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const newsItems = [
    {
        category: "Exam Tips",
        title: "5 Essential Grammar Rules for O/L English",
        date: "June 25, 2025",
        description: "Master these fundamental grammar concepts to excel in your O/L English examination. From subject-verb agreement to proper tense usage...",
        color: "bg-green-100 text-green-800"
    },
    {
        category: "Notice",
        title: "Class Schedule Changes - Week of July 1st",
        date: "June 22, 2025",
        description: "Important updates to our regular class schedule due to public holidays. All Grade 9 and 10 classes will be rescheduled...",
        color: "bg-red-100 text-red-800"
    },
    {
        category: "Events",
        title: "Free Trial Classes Available This Week",
        date: "June 20, 2025",
        description: "Experience our teaching methodology with free trial classes for new students. Available for all grades with limited slots...",
        color: "bg-purple-100 text-purple-800"
    },
    {
        category: "Tips",
        title: "How to Improve Your Essay Writing Skills",
        date: "June 18, 2025",
        description: "Learn effective techniques to structure your essays and improve your writing style for better marks in examinations...",
        color: "bg-cyan-100 text-cyan-800"
    }
];

const quickTips = [
    "Use active voice in essays for clearer expression",
    "Review a grammar point each morning",
    "Practice past papers weekly for better preparation",
    "Read English newspapers to improve vocabulary"
];

const upcomingEvents = [
    { name: "Trial Class", date: "July 10", color: "bg-blue-50 hover:bg-blue-100" },
    { name: "Term End Test", date: "August 5", color: "bg-orange-50 hover:bg-orange-100" },
    { name: "Holiday Break", date: "Aug 15-22", color: "bg-green-50 hover:bg-green-100" }
];

const filters = ["All", "Notices", "Tips", "Events", "Schedule"];

export function NewsList() {
    const [activeFilter, setActiveFilter] = useState("All");

    return (
        <section className="w-full py-16 md:py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex justify-center mb-12">
                    <div className="flex flex-wrap gap-2 bg-white p-2 rounded-full shadow-sm">
                        {filters.map(filter => (
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
                        {newsItems.map(item => (
                            <Card key={item.title} className="bg-white shadow-md hover:shadow-lg transition-shadow rounded-2xl overflow-hidden">
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
                                        View Details
                                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        {/* Quick Tips */}
                        <Card className="bg-white shadow-md rounded-2xl">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 font-headline">
                                    <Lightbulb className="w-6 h-6 text-yellow-500" />
                                    Quick English Tips
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-4">
                                    {quickTips.map(tip => (
                                        <li key={tip} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                            <span className="text-muted-foreground">{tip}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Upcoming Events */}
                        <Card className="bg-white shadow-md rounded-2xl">
                             <CardHeader>
                                <CardTitle className="flex items-center gap-3 font-headline">
                                    <Calendar className="w-6 h-6 text-blue-500" />
                                    Upcoming Events
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    {upcomingEvents.map(event => (
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
