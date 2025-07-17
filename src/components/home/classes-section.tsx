import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Pencil, GraduationCap, FileText, Trophy, Star } from "lucide-react";
import Link from "next/link";

const gradeData = [
  {
    icon: Book,
    grade: "Grade 6",
    description: "Foundation Grammar • Basic Writing • Reading Skills",
    buttonVariant: "green",
  },
  {
    icon: Pencil,
    grade: "Grade 7",
    description: "Grammar Rules • Essay Writing • Comprehension",
    buttonVariant: "orange",
  },
  {
    icon: GraduationCap,
    grade: "Grade 8",
    description: "Advanced Grammar • Creative Writing • Literature",
    buttonVariant: "green",
  },
  {
    icon: FileText,
    grade: "Grade 9",
    description: "O/L Preparation • Past Papers • Language Skills",
    buttonVariant: "orange",
  },
  {
    icon: Trophy,
    grade: "Grade 10",
    description: "O/L Focus • Exam Techniques • Literature Analysis",
    buttonVariant: "green",
  },
  {
    icon: Star,
    grade: "Grade 11",
    description: "O/L Final Prep • Mock Exams • Intensive Practice",
    buttonVariant: "orange",
  },
];

export function ClassesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            Classes for Grades 6–11
          </h2>
          <p className="max-w-xl mx-auto text-muted-foreground md:text-lg mt-4">
            Choose the perfect class for your grade level
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {gradeData.map((grade, index) => {
            const Icon = grade.icon;
            return (
              <Card key={index} className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <CardContent className="p-8 text-center flex flex-col items-center">
                  <Icon className="w-8 h-8 mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-bold font-headline mb-3">{grade.grade}</h3>
                  <p className="text-muted-foreground text-sm flex-grow min-h-[60px]">
                    {grade.description}
                  </p>
                  <Button asChild variant="outline" size="lg" className={`rounded-full mt-4 ${grade.buttonVariant === 'green' ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' : 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'}`}>
                    <Link href="/lessons">View Class Details</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
