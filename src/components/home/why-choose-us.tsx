
import { Card, CardContent } from "@/components/ui/card";
import { Users, LineChart, Heart, Monitor } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const translations = {
  en: {
    title: "Why Choose Grammar Seed?",
    features: [
      { icon: Users, title: "Personalized Attention", description: "Small class sizes ensure individual focus", iconBgColor: "bg-green-100 dark:bg-green-900/50", iconTextColor: "text-green-600 dark:text-green-400" },
      { icon: LineChart, title: "Proven Results", description: "95% of students improve their grades", iconBgColor: "bg-orange-100 dark:bg-orange-900/50", iconTextColor: "text-orange-500 dark:text-orange-400" },
      { icon: Heart, title: "Friendly Teaching", description: "Warm, encouraging learning environment", iconBgColor: "bg-blue-100 dark:bg-blue-900/50", iconTextColor: "text-blue-600 dark:text-blue-400" },
      { icon: Monitor, title: "Flexible Classes", description: "Both online and physical classes available", iconBgColor: "bg-green-100 dark:bg-green-900/50", iconTextColor: "text-green-600 dark:text-green-400" },
    ]
  },
  si: {
    title: "Grammar Seed තෝරා ගන්නේ ඇයි?",
    features: [
      { icon: Users, title: "පුද්ගලික අවධානය", description: "කුඩා පන්ති නිසා තනි තනිව අවධානය", iconBgColor: "bg-green-100 dark:bg-green-900/50", iconTextColor: "text-green-600 dark:text-green-400" },
      { icon: LineChart, title: "ඔප්පු කළ ප්‍රතිඵල", description: "95% සිසුන්ගේ ලකුණු වැඩි දියුණු වේ", iconBgColor: "bg-orange-100 dark:bg-orange-900/50", iconTextColor: "text-orange-500 dark:text-orange-400" },
      { icon: Heart, title: "මිත්‍රශීලී ඉගැන්වීම", description: "උණුසුම්, දිරිගන්වන ඉගෙනුම් පරිසරය", iconBgColor: "bg-blue-100 dark:bg-blue-900/50", iconTextColor: "text-blue-600 dark:text-blue-400" },
      { icon: Monitor, title: "නම්‍යශීලී පන්ති", description: "මාර්ගගත සහ භෞතික පන්ති දෙකම", iconBgColor: "bg-green-100 dark:bg-green-900/50", iconTextColor: "text-green-600 dark:text-green-400" },
    ]
  }
};

export function WhyChooseUsSection() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
            {t.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {t.features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl border-none bg-card">
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className={`w-16 h-16 mb-6 rounded-full flex items-center justify-center ${feature.iconBgColor}`}>
                    <Icon className={`w-8 h-8 ${feature.iconTextColor}`} />
                  </div>
                  <h3 className="text-lg font-bold font-headline mb-2 text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
