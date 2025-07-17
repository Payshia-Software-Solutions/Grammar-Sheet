import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Facebook, Youtube, MessageCircle } from "lucide-react";

export function ContactCtaSection() {
  return (
    <>
      <section className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-2xl font-headline font-bold mb-6">Follow Grammar Sheet for updates and tips!</h2>
            <div className="flex justify-center gap-4">
              <Link href="#" className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </Link>
              <Link href="#" className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center hover:bg-red-700 transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gradient-to-r from-blue-500 to-green-400 text-white">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl mb-6">
              Ready to join a class or ask a question?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="outline" className="bg-white border-white text-blue-600 hover:bg-gray-100 rounded-lg px-8">
                <Link href="/lessons">View Class Details</Link>
              </Button>
               <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg px-8">
                <Link href="#">Start on WhatsApp</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
