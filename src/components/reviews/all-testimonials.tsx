"use client"

import * as React from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

const testimonials = [
  {
    name: "Kamal Silva",
    role: "Grade 10 Student",
    quote: "The grammar lessons are so well structured. I finally understand tenses and sentence construction properly.",
    rating: 5,
    avatarSrc: "https://images.unsplash.com/photo-1525748822304-6807cb1348ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw0fHxzdHVkZW50JTIwYm95fGVufDB8fHx8MTc1Mjc3NzE3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "KS",
    avatarHint: "student boy",
  },
  {
    name: "Mrs. Perera",
    role: "Parent",
    quote: "My daughter's confidence in English improved dramatically. The teacher is very patient and understanding.",
    rating: 5,
    avatarSrc: "https://images.unsplash.com/photo-1621150271061-c560073aa854?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwYXJlbnQlMjB3b21hbnxlbnwwfHx8fDE3NTI3NzcyNzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "P",
    avatarHint: "parent woman",
  },
  {
    name: "Sandun Fernando",
    role: "Grade 9 Student",
    quote: "Online classes are convenient and interactive. The worksheets help me practice at home effectively.",
    rating: 4,
    avatarSrc: "https://images.unsplash.com/photo-1571193161738-deaba9b6cc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxzdHVkZW50JTIwYm95fGVufDB8fHx8MTc1Mjc3NzE3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "SF",
    avatarHint: "student boy",
  },
  {
    name: "Amaya Wickrama",
    role: "Grade 8 Student",
    quote: "Sir makes learning fun with examples from our daily life. Grammar is no longer boring for me!",
    rating: 5,
    avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzdHVkZW50JTIwZ2lybHxlbnwwfHx8fDE3NTI3NzcxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "AW",
    avatarHint: "student girl",
  },
  {
    name: "Mr. Rajapaksha",
    role: "Parent",
    quote: "Excellent value for money. My son's school marks improved significantly after joining Grammar Sheet.",
    rating: 5,
    avatarSrc: "https://images.unsplash.com/photo-1549231567-950cb741e796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwYXJlbnQlMjBtYW58ZW58MHx8fHwxNzUyNzc3MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "R",
    avatarHint: "parent man",
  },
  {
    name: "Tharushi Mendis",
    role: "Grade 11 Student",
    quote: "The essay writing techniques taught here helped me excel in my A/L English literature exam.",
    rating: 5,
    avatarSrc: "https://images.unsplash.com/photo-1629872430082-93d8912beccf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8c3R1ZGVudCUyMGdpcmx8ZW58MHx8fHwxNzUyNzc3MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
    avatarFallback: "TM",
    avatarHint: "student girl",
  },
];

const ITEMS_PER_PAGE = 6;

export function AllTestimonials() {
  const [currentPage, setCurrentPage] = React.useState(1);

  const totalPages = Math.ceil(testimonials.length / ITEMS_PER_PAGE);
  const currentTestimonials = testimonials.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            All Testimonials
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg mt-4">
            Browse through all the wonderful feedback from our students and parents
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Select defaultValue="all-grades">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Grade Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-grades">All Grade Levels</SelectItem>
              <SelectItem value="6-8">Grade 6-8</SelectItem>
              <SelectItem value="9-11">Grade 9-11</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all-types">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Class Types" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-types">All Class Types</SelectItem>
              <SelectItem value="online">Online</SelectItem>
              <SelectItem value="physical">Physical</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="newest">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Sort by Newest</SelectItem>
              <SelectItem value="oldest">Sort by Oldest</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentTestimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg rounded-xl p-6 flex flex-col">
              <CardContent className="flex flex-col gap-4 p-0 flex-grow">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.avatarHint} />
                    <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                  ))}
                </div>
                <blockquote className="text-muted-foreground italic flex-grow">
                  &quot;{testimonial.quote}&quot;
                </blockquote>
              </CardContent>
              <div className="mt-4">
                <a href="#" className="text-sm font-semibold text-primary hover:underline">Read more</a>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                    <PaginationPrevious 
                        href="#" 
                        onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.max(p - 1, 1)); }}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : undefined}
                    />
                    </PaginationItem>
                    {[...Array(totalPages)].map((_, i) => (
                        <PaginationItem key={i}>
                            <PaginationLink 
                                href="#"
                                isActive={currentPage === i + 1}
                                onClick={(e) => { e.preventDefault(); setCurrentPage(i + 1); }}
                            >
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    <PaginationItem>
                    <PaginationNext 
                        href="#"
                        onClick={(e) => { e.preventDefault(); setCurrentPage(p => Math.min(p + 1, totalPages)); }}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : undefined}
                     />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
      </div>
    </section>
  )
}
