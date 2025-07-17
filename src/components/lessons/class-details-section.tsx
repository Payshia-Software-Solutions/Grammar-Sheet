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

const topics = [
  "Advanced Grammar & Syntax",
  "Essay Writing Techniques",
  "Literature Analysis",
  "Reading Comprehension",
  "Past Paper Practice",
];

const scheduleDetails = [
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

export function ClassDetailsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <Card className="max-w-4xl mx-auto shadow-xl rounded-2xl bg-secondary">
          <CardContent className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold font-headline mb-8 text-center">
              Grade 10 - O/L Mastery (Sample Detail)
            </h2>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Topics Covered
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  {topics.map((topic, index) => (
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
                  Schedule & Details
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  {scheduleDetails.map((detail, index) => {
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
                <Link href="/contact">Join This Class</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
