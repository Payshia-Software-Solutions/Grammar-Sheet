import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const stats = [
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

const testimonials = [
  {
    quote: "Miss Priyanka made English so easy to understand. My grades improved from C to A within 6 months!",
    name: "Kasun Perera",
    grade: "Grade 10",
    avatarSrc: "https://placehold.co/48x48.png",
    avatarFallback: "KP",
    avatarHint: "student boy",
  },
  {
    quote: "The best English teacher I've ever had. She explains everything clearly and makes learning fun!",
    name: "Nethmi Silva",
    grade: "Grade 11",
    avatarSrc: "https://placehold.co/48x48.png",
    avatarFallback: "NS",
    avatarHint: "student girl",
  },
];

export function WhyItWorks() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Why Grammar Sheet Works
          </h2>
          <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className={`${stat.bgColor} border-none shadow-lg rounded-2xl`}>
              <CardContent className="p-8 text-center">
                <p className={`text-4xl font-bold ${stat.textColor} mb-2`}>{stat.value}</p>
                <p className={`font-semibold ${stat.textColor}`}>{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-secondary/50 border-none shadow-lg rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <div className="flex">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                </div>
                <blockquote className="text-muted-foreground italic text-base">
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
          ))}
        </div>
      </div>
    </section>
  );
}
