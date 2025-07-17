import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ContactCards() {
  return (
    <div className="container mx-auto px-4 md:px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        
        {/* Phone/WhatsApp Card */}
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-green-100 flex-shrink-0">
                <Phone className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold font-headline mb-2 text-foreground">Phone / WhatsApp</h3>
            <p className="text-muted-foreground mb-6">Call or Message: +94 7XX XXX XXX</p>
            <Button asChild className="bg-green-500 hover:bg-green-600 text-white rounded-lg w-full mt-auto">
              <Link href="#">Message on WhatsApp</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Email Card */}
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-8 text-center flex flex-col items-center justify-center h-full">
            <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-blue-100 flex-shrink-0">
                <Mail className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold font-headline mb-2 text-foreground">Email</h3>
            <p className="text-muted-foreground mb-6">grammarsheet@gmail.com</p>
            <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg w-full mt-auto">
              <Link href="mailto:grammarsheet@gmail.com">Send Email</Link>
            </Button>
          </CardContent>
        </Card>

        {/* Location Card */}
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-8 text-center flex flex-col items-center h-full">
             <div className="w-16 h-16 mb-6 rounded-full flex items-center justify-center bg-orange-100 flex-shrink-0">
                <MapPin className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-xl font-bold font-headline mb-2 text-foreground">Location</h3>
            <p className="text-muted-foreground mb-4">No. 123, Kandy Road, Gampaha</p>
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
