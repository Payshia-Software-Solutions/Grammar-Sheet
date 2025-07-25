
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { LanguageContext } from "../layout/language-toggle";

const newsDataEn = [
    { imageSrc: "https://images.unsplash.com/photo-1749068146084-6ca014673056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2xhc3Nyb29tJTIwbm90aWNlJTIwYm9hcmR8ZW58MHx8fHwxNzUyNzc2NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080", imageAlt: "A classroom notice board with announcements.", imageHint: "classroom notice board", title: "New Batch Starting February 2024", description: "Registration now open for Grades 6-11. Limited seats available.", date: "Jan 15, 2024" },
    { imageSrc: "https://images.unsplash.com/photo-1741699428083-ddb73b95d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxlZHVjYXRpb24lMjBleGFtfGVufDB8fHx8fDE3NTI3NzY0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080", imageAlt: "Graphic with text O Level", imageHint: "education exam", title: "O/L Exam Tips Released", description: "Essential preparation strategies for the upcoming O/L examination.", date: "Jan 10, 2024" },
    { imageSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBjbGFzc3xlbnwwfHx8fDE3NTI3NzY0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080", imageAlt: "A person taking an online class on a laptop.", imageHint: "online class", title: "Online Classes Now Available", description: "Join from anywhere in Sri Lanka with our new online platform.", date: "Jan 5, 2024" }
]

const newsDataSi = [
    { imageSrc: "https://images.unsplash.com/photo-1749068146084-6ca014673056?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxMHx8Y2xhc3Nyb29tJTIwbm90aWNlJTIwYm9hcmR8ZW58MHx8fHwxNzUyNzc2NDM3fDA&ixlib=rb-4.1.0&q=80&w=1080", imageAlt: "A classroom notice board with announcements.", imageHint: "classroom notice board", title: "නව කණ්ඩායම 2024 පෙබරවාරි සිට", description: "6-11 ශ්‍රේණි සඳහා ලියාපදිංචිය දැන් විවෘතයි. සීමිත ආසන සංඛ්‍යාවක් ඇත.", date: "ජන 15, 2024" },
    { imageSrc: "https://images.unsplash.com/photo-1741699428083-ddb73b95d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw5fHxlZHVjYXRpb24lMjBleGFtfGVufDB8fHx8fDE3NTI3NzY0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080", imageAlt: "Graphic with text O Level", imageHint: "education exam", title: "සා/පෙළ විභාග උපදෙස් නිකුත් කෙරේ", description: "ඉදිරි සා/පෙළ විභාගය සඳහා අත්‍යවශ්‍ය සූදානම් වීමේ ක්‍රමෝපායන්.", date: "ජන 10, 2024" },
    { imageSrc: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxvbmxpbmUlMjBjbGFzc3xlbnwwfHx8fDE3NTI3NzY0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080", imageAlt: "A person taking an online class on a laptop.", imageHint: "online class", title: "මාර්ගගත පන්ති දැන් තිබේ", description: "අපගේ නව මාර්ගගත වේදිකාව සමඟ ශ්‍රී ලංකාවේ ඕනෑම තැනක සිට සම්බන්ධ වන්න.", date: "ජන 5, 2024" }
]

const translations = {
  en: {
    title: "Latest News & Updates",
    buttonText: "View All News",
    news: newsDataEn
  },
  si: {
    title: "නවතම පුවත් සහ යාවත්කාලීන කිරීම්",
    buttonText: "සියලුම පුවත් බලන්න",
    news: newsDataSi
  }
}

export function NewsSection() {
    const { language } = useContext(LanguageContext);
    const t = translations[language as keyof typeof translations] || translations.en;

    return (
        <section className="w-full py-16 md:py-24 bg-secondary" id="news">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                        {t.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
                    {t.news.map((newsItem, index) => (
                        <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl group">
                            <div className="overflow-hidden">
                                <Image
                                    src={newsItem.imageSrc}
                                    alt={newsItem.imageAlt}
                                    width={600}
                                    height={400}
                                    className="w-full h-48 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    data-ai-hint={newsItem.imageHint}
                                />
                            </div>
                            <CardContent className="p-6">
                                <h3 className="text-lg font-bold font-headline mb-2">{newsItem.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{newsItem.description}</p>
                                <p className="text-sm text-orange-500 font-medium">{newsItem.date}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="text-center">
                    <Button asChild size="lg" className="rounded-full px-8">
                        <Link href="/news">{t.buttonText}</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
