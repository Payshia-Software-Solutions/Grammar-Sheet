import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";

const testimonials = [
    {
        name: "Amaya Perera",
        role: "Grade 10 Student",
        avatarSrc: "https://placehold.co/40x40.png",
        avatarFallback: "AP",
        avatarHint: "student girl",
        quote: "Teacher's explanations are so clear and easy to understand. My English grades improved significantly!"
    },
    {
        name: "Sunil Fernando",
        role: "Parent",
        avatarSrc: "https://placehold.co/40x40.png",
        avatarFallback: "SF",
        avatarHint: "parent man",
        quote: "Excellent teaching methods. My daughter loves attending classes and her confidence has grown tremendously."
    }
]

export function TestimonialsSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-background">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                        What Students Say
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-white shadow-lg rounded-xl p-6">
                            <CardContent className="flex flex-col gap-4 p-0">
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
                                        <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
                                    ))}
                                </div>
                                <blockquote className="text-muted-foreground italic">
                                    "{testimonial.quote}"
                                </blockquote>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <Button asChild size="lg" className="bg-green-200 hover:bg-green-300 text-green-800 rounded-full px-8">
                        <Link href="/quizzes">Read All Reviews</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
