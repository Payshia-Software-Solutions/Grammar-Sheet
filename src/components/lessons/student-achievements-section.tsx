import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    value: "92%",
    label: "A Pass Rate",
    color: "text-green-600",
  },
  {
    value: "500+",
    label: "Students Taught",
    color: "text-blue-600",
  },
  {
    value: "8",
    label: "Years Experience",
    color: "text-orange-500",
  },
];

export function StudentAchievementsSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-foreground">
            Student Achievements
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-background border-none shadow-lg rounded-xl">
              <CardContent className="p-8 text-center flex flex-col justify-center items-center h-full">
                <p className={`text-5xl font-bold ${stat.color} mb-2`}>{stat.value}</p>
                <p className="font-semibold text-muted-foreground mt-2">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
