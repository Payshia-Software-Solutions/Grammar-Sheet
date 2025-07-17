import { Card, CardContent } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

const videoTestimonials = [
  {
    title: "Emma's IGCSE Success Story",
    description: "Grade 10 student shares how she achieved an A* in IGCSE English Literature.",
  },
  {
    title: "Parent Testimonial: James's Journey",
    description: "Parents discuss their son's remarkable improvement in creative writing skills.",
  },
];

export function StudentVideos() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Watch Our Students Share Their Stories
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground md:text-lg mt-4">
            See firsthand how our English programs have transformed students' academic journeys.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videoTestimonials.map((video, index) => (
            <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
              <div className="relative bg-slate-900 aspect-video flex items-center justify-center cursor-pointer group">
                  <PlayCircle className="w-16 h-16 text-white/70 group-hover:text-white transition-colors" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold font-headline mb-2">{video.title}</h3>
                <p className="text-muted-foreground">{video.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
