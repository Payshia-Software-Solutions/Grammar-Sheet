import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function StayUpdatedSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-gradient-to-r from-blue-500 to-green-400">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto p-8 md:p-12 shadow-xl rounded-2xl bg-card">
          <CardContent className="p-0">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl text-card-foreground">
                Stay Updated
              </h2>
              <p className="mt-4 text-muted-foreground md:text-lg">
                Want updates sent to your WhatsApp or Email?
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input placeholder="Your Name" />
                <Input placeholder="Mobile Number" />
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">Grade 6</SelectItem>
                    <SelectItem value="7">Grade 7</SelectItem>
                    <SelectItem value="8">Grade 8</SelectItem>
                    <SelectItem value="9">Grade 9</SelectItem>
                    <SelectItem value="10">Grade 10</SelectItem>
                    <SelectItem value="11">Grade 11</SelectItem>
                  </SelectContent>
                </Select>
                <Input type="email" placeholder="Email Address" />
              </div>
              <Button type="submit" className="w-full" size="lg">
                Subscribe Now
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
