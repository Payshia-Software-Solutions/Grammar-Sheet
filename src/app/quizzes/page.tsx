import { quizzes, lessons } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function QuizzesPage() {
  const getLessonTitle = (lessonId: string) => {
    return lessons.find(lesson => lesson.id === lessonId)?.title || "Grammar Topic";
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">Practice Quizzes</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Test your understanding with our interactive quizzes.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {quizzes.map((quiz) => (
          <Card key={quiz.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">{quiz.title}</CardTitle>
              <CardDescription className="text-base pt-2">A quiz on {getLessonTitle(quiz.lessonId)}.</CardDescription>
            </CardHeader>
            <CardFooter className="mt-auto">
              <Button asChild className="w-full" variant="secondary">
                <Link href={`/quizzes/${quiz.slug}`}>
                  Start Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
