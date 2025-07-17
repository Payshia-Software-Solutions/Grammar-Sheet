
"use client"

import * as React from "react"
import { Book, Pencil, GraduationCap, FileText, Trophy, Star } from "lucide-react";
import { ClassCard } from "./class-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const gradeData = [
  {
    icon: Book,
    grade: "Grade 6",
    description: "Foundation Grammar • Basic Writing • Reading Skills",
    buttonVariant: "green" as const,
  },
  {
    icon: Pencil,
    grade: "Grade 7",
    description: "Grammar Rules • Essay Writing • Comprehension",
    buttonVariant: "orange" as const,
  },
  {
    icon: GraduationCap,
    grade: "Grade 8",
    description: "Advanced Grammar • Creative Writing • Literature",
    buttonVariant: "green" as const,
  },
  {
    icon: FileText,
    grade: "Grade 9",
    description: "O/L Preparation • Past Papers • Language Skills",
    buttonVariant: "orange" as const,
  },
  {
    icon: Trophy,
    grade: "Grade 10",
    description: "O/L Focus • Exam Techniques • Literature Analysis",
    buttonVariant: "green" as const,
  },
  {
    icon: Star,
    grade: "Grade 11",
    description: "O/L Final Prep • Mock Exams • Intensive Practice",
    buttonVariant: "orange" as const,
  },
];

export function ClassesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Classes for Grades 6–11
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-lg mt-4">
            Choose the perfect class for your grade level
          </p>
        </div>
        
        {/* Carousel for mobile */}
        <div className="sm:hidden">
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                className="w-full"
            >
                <CarouselContent>
                    {gradeData.map((grade, index) => (
                        <CarouselItem key={index} className="basis-3/4">
                            <div className="p-1 h-full">
                                <ClassCard
                                    icon={grade.icon}
                                    grade={grade.grade}
                                    description={grade.description}
                                    buttonVariant={grade.buttonVariant}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>

        {/* Grid for tablet and desktop */}
        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gradeData.map((grade, index) => (
            <ClassCard
              key={index}
              icon={grade.icon}
              grade={grade.grade}
              description={grade.description}
              buttonVariant={grade.buttonVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
