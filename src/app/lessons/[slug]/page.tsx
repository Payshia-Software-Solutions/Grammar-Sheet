import { lessons, quizzes } from "@/lib/data";
import { notFound } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Lightbulb, FileQuestion } from "lucide-react";

export async function generateStaticParams() {
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default function LessonDetailPage({ params }: { params: { slug: string } }) {
  const lesson = lessons.find((l) => l.slug === params.slug);
  const quiz = quizzes.find((q) => q.lessonId === lesson?.id);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">{lesson.title}</h1>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Lesson Content</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground">{lesson.content}</p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-headline text-2xl flex items-center">
              <Lightbulb className="mr-2 h-6 w-6 text-accent" /> Examples
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {lesson.examples.map((example, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary font-bold mr-2 text-lg">›</span>
                  <p 
                    className="text-lg text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: example.replace(/`([^`]+)`/g, '<code class="bg-primary/20 text-primary-foreground-dark p-1 rounded font-semibold">$1</code>') }}
                  />
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {quiz && (
          <div className="text-center bg-card p-8 rounded-lg border">
            <h2 className="text-2xl font-headline font-bold mb-4">Ready to test your knowledge?</h2>
            <p className="text-muted-foreground mb-6">Take our short quiz to see what you've learned from this lesson.</p>
            <Button asChild size="lg">
              <Link href={`/quizzes/${quiz.slug}`}>
                <FileQuestion className="mr-2 h-5 w-5" />
                Go to Quiz
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
