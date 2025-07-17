"use client"

import * as React from "react"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CommentCard, type CommentCardProps } from "./comment-card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"


const testimonials: CommentCardProps[] = [
    {
        name: "Amaya Perera",
        role: "Grade 10 Student",
        avatarSrc: "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwzfHxzdHVkZW50JTIwZ2lybHxlbnwwfHx8fDE3NTI3NzcxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        avatarFallback: "AP",
        avatarHint: "student girl",
        quote: "Teacher's explanations are so clear and easy to understand. My English grades improved significantly!"
    },
    {
        name: "Sunil Fernando",
        role: "Parent",
        avatarSrc: "https://images.unsplash.com/photo-1549231567-950cb741e796?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw1fHxwYXJlbnQlMjBtYW58ZW58MHx8fHwxNzUyNzc3MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        avatarFallback: "SF",
        avatarHint: "parent man",
        quote: "Excellent teaching methods. My daughter loves attending classes and her confidence has grown tremendously."
    },
    {
        name: "Nimali De Silva",
        role: "Grade 8 Student",
        avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxzdHVkZW50JTIwZ2lybHxlbnwwfHx8fDE3NTI3NzcxMTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        avatarFallback: "NDS",
        avatarHint: "student girl",
        quote: "The online classes are just as good as the physical ones. Very interactive and fun!"
    },
    {
        name: "Mr. Bandara",
        role: "Parent",
        avatarSrc: "https://images.unsplash.com/photo-1549231634-8633391d04b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwYXJlbnQlMjBtYW58ZW58MHx8fHwxNzUyNzc3MTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
        avatarFallback: "B",
        avatarHint: "parent man",
        quote: "A very dedicated teacher. My son is no longer afraid of English grammar."
    }
]

export function TestimonialsSection() {
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )

    return (
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                        What Students Say
                    </h2>
                </div>
                <div className="max-w-4xl mx-auto mb-12">
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
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="md:basis-1/2">
                                    <div className="p-1">
                                        <CommentCard {...testimonial} />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
                <div className="text-center">
                    <Button asChild size="lg" className="bg-green-200 hover:bg-green-300 text-green-800 rounded-full px-8">
                        <Link href="/reviews">Read All Reviews</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
