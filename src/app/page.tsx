import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Target, FileQuestion } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ClassesSection } from "@/components/home/classes-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Students studying English"
          layout="fill"
          objectFit="cover"
          className="z-0"
          data-ai-hint="students studying"
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container relative z-20 px-4 md:px-6 mx-auto">
          <div className="space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Master English with Confidence
            </h1>
            <p className="text-lg md:text-xl">
              From Grade 6 to O/L
            </p>
            <p className="max-w-[600px] mx-auto text-gray-200 md:text-lg">
              Trusted English classes tailored for Sri Lankan students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/lessons">Join a Class</Link>
              </Button>
               <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full">
                <Link href="/contact">See Class Schedule</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 md:py-24 bg-secondary">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <Image
                src="https://placehold.co/160x160.png"
                alt="Teacher"
                width={160}
                height={160}
                className="rounded-full object-cover"
                data-ai-hint="teacher person"
              />
            </div>
            <div className="space-y-4 text-center md:text-left">
              <h2 className="text-3xl font-headline font-bold">About Your Teacher</h2>
              <p className="text-muted-foreground">
                10+ years of experience in teaching English for O/L and Junior Grades. Passionate about helping Sri Lankan students excel in English with personalized attention and proven methods.
              </p>
              <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full" size="lg">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ClassesSection />

      <section className="w-full py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">Why Choose GrammarWise?</h2>
            <p className="max-w-[900px] text-gray-600 md:text-lg dark:text-gray-400">
              Our platform is designed to make learning grammar simple, fun, and effective.
            </p>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="gap-4">
                <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Interactive Lessons</CardTitle>
                <CardDescription>Dive into grammar topics with easy-to-understand explanations and real-world examples.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="gap-4">
                 <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <FileQuestion className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Practice Quizzes</CardTitle>
                <CardDescription>Test your knowledge with multiple-choice quizzes that provide instant feedback.</CardDescription>
              </CardHeader>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="gap-4">
                 <div className="bg-primary/20 rounded-full w-12 h-12 flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-headline">Targeted Learning</CardTitle>
                <CardDescription>Focus on specific grammar rules you want to improve, from nouns to complex sentences.</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
