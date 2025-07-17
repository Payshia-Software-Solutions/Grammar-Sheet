import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Pencil, GraduationCap, FileText, Trophy, Star } from "lucide-react";
import Link from "next/link";

const classData = [
    {
        icon: BookOpen,
        grade: "Grade 6",
        topics: ["Foundation Grammar", "Basic Writing", "Reading Skills"],
        buttonVariant: "green"
    },
    {
        icon: Pencil,
        grade: "Grade 7",
        topics: ["Grammar Rules", "Essay Writing", "Comprehension"],
        buttonVariant: "orange"
    },
    {
        icon: GraduationCap,
        grade: "Grade 8",
        topics: ["Advanced Grammar", "Creative Writing", "Literature"],
        buttonVariant: "green"
    },
    {
        icon: FileText,
        grade: "Grade 9",
        topics: ["O/L Preparation", "Past Papers", "Language Skills"],
        buttonVariant: "orange"
    },
    {
        icon: Trophy,
        grade: "Grade 10",
        topics: ["O/L Focus", "Exam Techniques", "Literature Analysis"],
        buttonVariant: "green"
    },
    {
        icon: Star,
        grade: "Grade 11",
        topics: ["O/L Final Prep", "Mock Exams", "Intensive Practice"],
        buttonVariant: "orange"
    },
]

export function ClassesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Classes for Grades 6-11
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-lg dark:text-gray-400">
            Choose the perfect class for your grade level
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {classData.map((item) => {
                const Icon = item.icon;
                const iconColorClass = item.buttonVariant === 'green' ? 'text-green-600' : 'text-orange-500';
                const buttonBgClass = item.buttonVariant === 'green' ? 'bg-green-100 hover:bg-green-200' : 'bg-orange-100 hover:bg-orange-200';
                const buttonTextClass = item.buttonVariant === 'green' ? 'text-green-800' : 'text-orange-800';

                return (
                    <Card key={item.grade} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                        <CardContent className="p-8 flex flex-col items-center text-center">
                            <Icon className={`w-10 h-10 mb-4 ${iconColorClass}`} />
                            <h3 className="text-xl font-bold font-headline mb-2">{item.grade}</h3>
                            <p className="text-muted-foreground mb-6 min-h-[40px]">
                                {item.topics.join(' • ')}
                            </p>
                            <Button asChild size="lg" className={`${buttonBgClass} ${buttonTextClass} rounded-full w-full`}>
                                <Link href="/lessons">View Class Details</Link>
                            </Button>
                        </CardContent>
                    </Card>
                )
            })}
        </div>
      </div>
    </section>
  );
}
