import { Button } from "@/components/ui/button";
import Link from "next/link";

export function LessonsCtaSection() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl mb-4">
            Ready to build your English skills?
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-blue-100">
            Join thousands of successful students
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-200 hover:bg-green-300 text-green-800 rounded-lg px-8">
              <Link href="/contact">Book a Trial</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 rounded-lg px-8">
              <Link href="/contact">Contact Teacher</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
