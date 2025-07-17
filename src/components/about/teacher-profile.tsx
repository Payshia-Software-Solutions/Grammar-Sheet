"use client";

import Image from "next/image";
import { GraduationCap, Star } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const translations = {
  en: {
    title: "Who's Behind Grammar Sheet?",
    name: "Mr. Saman Silva",
    qualification: "B.A. in English Literature | TESL Certified",
    experience: "Over 10 years of helping students from Grade 6 to 11 succeed in English",
    bio: "Teaching isn't just my profession—it's my passion. I believe every student has the potential to excel in English, and I'm here to unlock that potential. Having grown up in Sri Lanka, I understand the unique challenges our students face, and I've developed methods that make English both accessible and enjoyable.",
    studentsTaught: "500+ Students Taught",
    successRate: "95% Success Rate"
  },
  si: {
    title: "Grammar Sheet පිටුපස සිටින්නේ කවුද?",
    name: "සමන් සිල්වා මහතා",
    qualification: "ඉංග්‍රීසි සාහිත්‍යය පිළිබඳ B.A. | TESL සහතික ලත්",
    experience: "6 ශ්‍රේණියේ සිට 11 ශ්‍රේණිය දක්වා සිසුන්ට ඉංග්‍රීසි සාර්ථක කර ගැනීමට වසර 10කට වැඩි කාලයක් උපකාර කර ඇත",
    bio: "ඉගැන්වීම මගේ වෘත්තිය පමණක් නොවේ - එය මගේ ආශාවයි. සෑම සිසුවෙකුටම ඉංග්‍රීසි භාෂාවෙන් විශිෂ්ට වීමේ හැකියාව ඇති බව මම විශ්වාස කරමි, එම හැකියාව විවෘත කිරීමට මම මෙහි සිටිමි. ශ්‍රී ලංකාවේ හැදී වැඩුණු මට, අපගේ සිසුන් මුහුණ දෙන අද්විතීය අභියෝග තේරුම් ගත හැකි අතර, මම ඉංග්‍රීසි ප්‍රවේශ විය හැකි සහ විනෝදජනක කරන ක්‍රම දියුණු කර ඇත්තෙමි.",
    studentsTaught: "සිසුන් 500+",
    successRate: "95% සාර්ථකත්ව අනුපාතය"
  }
};

export function TeacherProfile() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
          {t.title}
        </h2>
        <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/400x400.png"
            alt={t.name}
            width={400}
            height={400}
            className="rounded-full object-cover shadow-2xl"
            data-ai-hint="teacher person"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-primary font-headline">{t.name}</h3>
          <p className="bg-yellow-100 text-yellow-800 font-semibold px-4 py-2 rounded-lg inline-block">
            {t.qualification}
          </p>
          <h4 className="text-xl font-semibold text-foreground">
            {t.experience}
          </h4>
          <p className="text-muted-foreground text-base leading-relaxed">
            {t.bio}
          </p>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-foreground">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">{t.studentsTaught}</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <GraduationCap className="w-5 h-5 text-green-500" />
              <span className="font-semibold">{t.successRate}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
