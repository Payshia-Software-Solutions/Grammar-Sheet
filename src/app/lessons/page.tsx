import { lessons } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroHeaderSection } from "@/components/layout/hero-header-section";

export default function LessonsPage() {
  return (
    <div>
      <HeroHeaderSection
        title="English Classes for Grades 6 to 11"
        subtitle="Structured, effective English learning tailored to the Sri Lankan syllabus."
        imageUrl="https://placehold.co/1920x600.png"
        imageHint="students learning"
      />
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Our Lessons</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Browse our collection of lessons to improve your grammar skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lessons.map((lesson) => (
            <Card key={lesson.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{lesson.title}</CardTitle>
                <CardDescription className="text-base pt-2">{lesson.description}</CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Button asChild className="w-full">
                  <Link href={`/lessons/${lesson.slug}`}>
                    Start Lesson <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
