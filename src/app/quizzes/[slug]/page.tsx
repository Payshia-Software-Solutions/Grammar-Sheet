import { quizzes } from "@/lib/data";
import { notFound } from "next/navigation";
import { Quiz } from "@/components/quiz";

export async function generateStaticParams() {
  return quizzes.map((quiz) => ({
    slug: quiz.slug,
  }));
}

export default function QuizDetailPage({ params }: { params: { slug:string }}) {
  const quizData = quizzes.find((q) => q.slug === params.slug);

  if (!quizData) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-headline font-bold tracking-tighter sm:text-5xl">{quizData.title}</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Select the best answer for each question. Good luck!
            </p>
        </div>
        <div className="max-w-2xl mx-auto">
            <Quiz quiz={quizData} />
        </div>
    </div>
  );
}
