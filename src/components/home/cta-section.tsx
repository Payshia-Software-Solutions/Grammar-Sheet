import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CtaSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-blue-500 to-green-400 p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl mb-4">
            Have Questions? Get in Touch Today!
          </h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-blue-100">
            Ready to start your English learning journey? Contact us for more information.
          </p>
          <Button asChild size="lg" className="bg-white text-green-700 hover:bg-gray-100 font-bold rounded-full px-8">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
