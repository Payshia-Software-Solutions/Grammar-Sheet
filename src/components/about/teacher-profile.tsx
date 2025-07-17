import Image from "next/image";
import { GraduationCap, Star } from "lucide-react";

export function TeacherProfile() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
          Who&apos;s Behind Grammar Sheet?
        </h2>
        <div className="mt-4 h-1 w-24 bg-primary mx-auto rounded"></div>
      </div>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src="https://placehold.co/400x400.png"
            alt="Mr. Saman Silva"
            width={400}
            height={400}
            className="rounded-full object-cover shadow-2xl"
            data-ai-hint="teacher person"
          />
        </div>
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-primary font-headline">Mr. Saman Silva</h3>
          <p className="bg-yellow-100 text-yellow-800 font-semibold px-4 py-2 rounded-lg inline-block">
            B.A. in English Literature | TESL Certified
          </p>
          <h4 className="text-xl font-semibold text-foreground">
            Over 10 years of helping students from Grade 6 to 11 succeed in English
          </h4>
          <p className="text-muted-foreground text-base leading-relaxed">
            Teaching isn&apos;t just my profession—it&apos;s my passion. I believe
            every student has the potential to excel in English, and I&apos;m here
            to unlock that potential. Having grown up in Sri Lanka, I
            understand the unique challenges our students face, and I&apos;ve
            developed methods that make English both accessible and enjoyable.
          </p>
          <div className="flex items-center gap-6 pt-4">
            <div className="flex items-center gap-2 text-foreground">
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              <span className="font-semibold">500+ Students Taught</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <GraduationCap className="w-5 h-5 text-green-500" />
              <span className="font-semibold">95% Success Rate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
