
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

type ClassCardProps = {
  icon: LucideIcon;
  grade: string;
  description: string;
  buttonVariant: "green" | "orange";
};

const translations = {
  en: {
    viewDetails: "View Class Details"
  },
  si: {
    viewDetails: "විස්තර බලන්න"
  }
}

export function ClassCard({ icon: Icon, grade, description, buttonVariant }: ClassCardProps) {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;
  
  return (
    <Card className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
      <CardContent className="p-8 text-center flex flex-col items-center">
        <Icon className="w-8 h-8 mb-4 text-muted-foreground" />
        <h3 className="text-xl font-bold font-headline mb-3">{grade}</h3>
        <p className="text-muted-foreground text-sm flex-grow min-h-[60px]">
          {description}
        </p>
        <Button asChild variant="outline" size="lg" className={`rounded-full mt-4 ${buttonVariant === 'green' ? 'bg-green-50 text-green-700 border-green-200 hover:bg-green-100' : 'bg-orange-50 text-orange-700 border-orange-200 hover:bg-orange-100'}`}>
          <Link href="/lessons">{t.viewDetails}</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
