import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqItems = [
    {
      question: "How can I join a class?",
      answer: "Simply contact us via WhatsApp or phone, and we'll guide you through the registration process."
    },
    {
      question: "Can I do a trial lesson?",
      answer: "Yes! We offer trial lessons for new students to experience our teaching methods."
    },
    {
      question: "What are the payment options?",
      answer: "We accept bank transfers, cash payments, and mobile payment options for your convenience."
    },
  ]
  
  export function FaqSection() {
    return (
      <section className="w-full py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl">
                Frequently Asked Questions
              </h2>
            </div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white p-4 rounded-lg shadow-sm border-none">
                  <AccordionTrigger className="font-semibold text-lg hover:no-underline text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-2 text-left">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    )
  }
  