import Image from "next/image";
import { MapPin, Heart } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Sri Lankan Syllabus Focused",
    description: "Every lesson aligns perfectly with the local curriculum and exam requirements.",
    iconBgColor: "bg-blue-100",
    iconTextColor: "text-blue-600",
  },
  {
    icon: Heart,
    title: "Culturally Relatable Examples",
    description: "Learn English through examples that resonate with Sri Lankan culture and daily life.",
    iconBgColor: "bg-green-100",
    iconTextColor: "text-green-600",
  },
];

export function RootedInLearning() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Rooted in Local Learning
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground md:text-lg mt-4">
            Understanding our culture, enhancing your English
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center ${feature.iconBgColor}`}>
                    <Icon className={`w-8 h-8 ${feature.iconTextColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-headline mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Image
              src="https://placehold.co/600x400.png"
              alt="Students in a classroom"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="students classroom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
