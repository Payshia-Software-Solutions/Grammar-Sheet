"use client";

import Link from "next/link";
import { FileText, Phone, Mail, Facebook, Youtube, Instagram, MessageCircle } from "lucide-react";
import { useContext } from "react";
import { LanguageContext } from "./language-toggle";

const translations = {
  en: {
    slogan: "Excellence in English Education for Sri Lankan Students",
    quickLinks: "Quick Links",
    home: "Home",
    about: "About",
    classes: "Classes",
    reviews: "Reviews",
    classGrades: {
      title: "Classes",
      g6_8: "Grade 6-8",
      g9_10: "Grade 9-10",
      g11: "Grade 11",
      trial: "Trial Classes"
    },
    contact: "Contact",
    copyright: "Grammar Sheet. All rights reserved.",
  },
  si: {
    slogan: "ශ්‍රී ලාංකික සිසුන් සඳහා ඉංග්‍රීසි අධ්‍යාපනයේ විශිෂ්ටත්වය",
    quickLinks: "త్వరిత සබැඳි",
    home: "මුල් පිටුව",
    about: "අප ගැන",
    classes: "පන්ති",
    reviews: "විචාර",
    classGrades: {
      title: "පන්ති",
      g6_8: "6-8 ශ්‍රේණිය",
      g9_10: "9-10 ශ්‍රේණිය",
      g11: "11 ශ්‍රේණිය",
      trial: "ආදර්ශ පන්ති"
    },
    contact: "සම්බන්ධ වන්න",
    copyright: "Grammar Sheet. සියලුම හිමිකම් ඇවිරිණි.",
  }
};

export function Footer() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-white">Grammar Sheet</span>
            </Link>
            <p className="text-gray-400">
              {t.slogan}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Youtube className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-4">{t.quickLinks}</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">{t.home}</Link></li>
              <li><Link href="/about" className="hover:text-white">{t.about}</Link></li>
              <li><Link href="/lessons" className="hover:text-white">{t.classes}</Link></li>
              <li><Link href="/reviews" className="hover:text-white">{t.reviews}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-4">{t.classGrades.title}</h3>
            <ul className="space-y-2">
              <li><Link href="/lessons" className="hover:text-white">{t.classGrades.g6_8}</Link></li>
              <li><Link href="/lessons" className="hover:text-white">{t.classGrades.g9_10}</Link></li>
              <li><Link href="/lessons" className="hover:text-white">{t.classGrades.g11}</Link></li>
              <li><Link href="/lessons" className="hover:text-white">{t.classGrades.trial}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-4">{t.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>info@grammarsheet.lk</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
