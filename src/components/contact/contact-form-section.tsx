import ContactForm from "@/app/contact/contact-form";
import { Card, CardContent } from "@/components/ui/card";

export function ContactFormSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-headline font-bold">Send us a Message</h2>
                        <p className="text-muted-foreground mt-2">Fill out the form below and we'll get back to you soon</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
