import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    quote: "My English grade improved from C to A+ in just one semester! The personalized teaching approach made all the difference.",
    name: "Sarah K.",
    role: "Grade 9 Student",
    prep: "Cambridge English Exam Prep",
    avatarSrc: "https://placehold.co/48x48.png",
    avatarFallback: "SK",
    avatarHint: "student girl",
    bgColor: "bg-blue-50",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    quote: "Our son gained incredible confidence in public speaking and writing. His presentation skills are now exceptional!",
    name: "Mr. & Mrs. Chen",
    role: "Parents of Grade 8 Student",
    prep: "Public Speaking & Writing",
    avatarSrc: "",
    avatarFallback: "C",
    avatarHint: "parents",
    bgColor: "bg-green-50",
    badgeColor: "bg-green-100 text-green-800",
  },
  {
    quote: "Achieved Band 8.0 in IELTS! The structured approach and practice materials were incredibly effective.",
    name: "Michael R.",
    role: "Grade 11 Student",
    prep: "IELTS Preparation",
    avatarSrc: "",
    avatarFallback: "MR",
    avatarHint: "student boy",
    bgColor: "bg-yellow-50",
    badgeColor: "bg-yellow-100 text-yellow-800",
  },
];

export function TopSuccessStories() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Our Top Success Stories
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground md:text-lg mt-4">
            These remarkable achievements showcase the transformative power of dedicated English learning
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
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
