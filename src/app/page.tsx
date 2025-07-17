import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Target, FileQuestion } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full py-20 md:py-32 bg-primary/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl md:text-6xl text-gray-900 dark:text-gray-50">
                Master English Grammar with <span className="text-primary">GrammarWise</span>
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl dark:text-gray-400">
                Engaging lessons, interactive quizzes, and clear examples to help you conquer grammar and write with confidence.
              </p>
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/lessons">Start Learning Now</Link>
              </Button>
            </div>
            <div className="flex justify-center">
                <BookOpen className="w-48 h-48 text-primary" />
            </div>
          </div>
        </div>
      </section>

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
