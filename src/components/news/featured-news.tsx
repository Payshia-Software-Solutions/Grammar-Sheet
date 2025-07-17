import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import Link from "next/link";

export function FeaturedNews() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-green-100 text-green-900 rounded-2xl p-8 shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex-1 space-y-4">
                    <div className="flex items-center gap-4">
                        <Badge variant="outline" className="bg-white border-none text-green-800 font-semibold">
                            <Bookmark className="w-4 h-4 mr-2" />
                            Featured
                        </Badge>
                        <p className="text-sm font-medium text-green-700">June 28, 2025</p>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold font-headline">
                        New Grade 11 Class Starts – July 10th
                    </h2>
                    <p className="text-base text-green-800 max-w-3xl">
                        Join our comprehensive Grade 11 English program designed specifically for O/L preparation. Limited seats available with personalized attention and proven teaching methods.
                    </p>
                </div>
                <div className="flex-shrink-0">
                    <Button asChild variant="outline" size="lg" className="bg-white text-green-800 hover:bg-gray-50">
                        <Link href="#">Read More</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}