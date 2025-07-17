"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const translations = {
  en: {
    phoneTitle: "Phone / WhatsApp",
    phoneDesc: "Call or Message: +94 7XX XXX XXX",
    phoneButton: "Message on WhatsApp",
    emailTitle: "Email",
    emailDesc: "grammarsheet@gmail.com",
    emailButton: "Send Email",
    locationTitle: "Location",
    locationDesc: "No. 123, Kandy Road, Gampaha",
  },
  si: {
    phoneTitle: "දුරකථන / WhatsApp",
    phoneDesc: "අමතන්න හෝ පණිවිඩයක් එවන්න: +94 7XX XXX XXX",
    phoneButton: "WhatsApp පණිවිඩයක් එවන්න",
    emailTitle: "විද්‍යුත් තැපෑල",
    emailDesc: "grammarsheet@gmail.com",
    emailButton: "විද්‍යුත් තැපෑල යවන්න",
    locationTitle: "ස්ථානය",
    locationDesc: "නො. 123, මහනුවර පාර, ගම්පහ",
  }
}

export function ContactCards() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Phone/WhatsApp Card */}
        <Card className="shadow-xl rounded-2xl bg-card">
          <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-green-100 dark:bg-green-900/50 flex-shrink-0">
                <Phone className="w-8 h-8 text-green-600 dark:text-green-400" />
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
              <h3 className="text-xl font-bold font-headline mb-2 text-foreground">{t.phoneTitle}</h3>
              <p className="text-muted-foreground mb-6">{t.phoneDesc}</p>
            </div>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white rounded-lg w-full mt-auto">
              <Link href="#">{t.phoneButton}</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Email Card */}
        <Card className="shadow-xl rounded-2xl bg-card">
          <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-blue-100 dark:bg-blue-900/50 flex-shrink-0">
                <Mail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
              <h3 className="text-xl font-bold font-headline mb-2 text-foreground">{t.emailTitle}</h3>
              <p className="text-muted-foreground mb-6">{t.emailDesc}</p>
            </div>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-full mt-auto">
              <Link href="mailto:grammarsheet@gmail.com">{t.emailButton}</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Location Card */}
        <Card className="shadow-xl rounded-2xl bg-card">
          <CardContent className="p-8 text-center flex flex-col items-center h-full">
             <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-orange-100 dark:bg-orange-900/50 flex-shrink-0">
                <MapPin className="w-8 h-8 text-orange-500 dark:text-orange-400" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold font-headline mb-2 text-foreground">{t.locationTitle}</h3>
              <p className="text-muted-foreground mb-4">{t.locationDesc}</p>
            </div>
            <div className="w-full h-32 rounded-lg overflow-hidden mt-auto">
                <Image 
                    src="https://placehold.co/400x200.png" 
                    alt="Map location" 
                    width={400} 
                    height={200} 
                    className="w-full h-full object-cover"
                    data-ai-hint="street map"
                />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
