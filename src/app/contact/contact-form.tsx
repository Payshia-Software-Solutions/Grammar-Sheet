"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useState, useContext } from "react"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LanguageContext } from "@/components/layout/language-toggle"


const translations = {
  en: {
    nameLabel: "Name",
    namePlaceholder: "Your Name",
    nameError: "Name must be at least 2 characters.",
    gradeLabel: "Grade",
    gradePlaceholder: "Select Grade",
    gradeError: "Please select a grade.",
    mobileLabel: "Mobile Number",
    mobilePlaceholder: "Your Mobile Number",
    mobileError: "Mobile number must be at least 10 digits.",
    emailLabel: "Email (Optional)",
    emailPlaceholder: "your.email@example.com",
    emailError: "Please enter a valid email address.",
    messageLabel: "Message",
    messagePlaceholder: "Your question or comment...",
    messageErrorMin: "Message must be at least 10 characters.",
    messageErrorMax: "Message cannot be longer than 500 characters.",
    submitButton: "Submit Message",
    successTitle: "Message Sent!",
    successDescription: "Thanks for reaching out. We've received your message. (This is a demo and no email was actually sent).",
    grades: ["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11"],
  },
  si: {
    nameLabel: "නම",
    namePlaceholder: "ඔබේ නම",
    nameError: "නම අවම වශයෙන් අක්ෂර 2ක් විය යුතුය.",
    gradeLabel: "ශ්‍රේණිය",
    gradePlaceholder: "ශ්‍රේණිය තෝරන්න",
    gradeError: "කරුණාකර ශ්‍රේණියක් තෝරන්න.",
    mobileLabel: "ජංගම දුරකථන අංකය",
    mobilePlaceholder: "ඔබගේ ජංගම දුරකථන අංකය",
    mobileError: "ජංගම දුරකථන අංකය අවම වශයෙන් ඉලක්කම් 10ක් විය යුතුය.",
    emailLabel: "විද්‍යුත් තැපෑල (අත්‍යවශ්‍ය නොවේ)",
    emailPlaceholder: "your.email@example.com",
    emailError: "කරුණාකර වලංගු විද්‍යුත් තැපැල් ලිපිනයක් ඇතුළත් කරන්න.",
    messageLabel: "පණිවිඩය",
    messagePlaceholder: "ඔබගේ ප්‍රශ්නය හෝ අදහස...",
    messageErrorMin: "පණිවිඩය අවම වශයෙන් අක්ෂර 10ක් විය යුතුය.",
    messageErrorMax: "පණිවිඩය අක්ෂර 500කට වඩා දිගු විය නොහැක.",
    submitButton: "පණිවිඩය යවන්න",
    successTitle: "පණිවිඩය යවන ලදි!",
    successDescription: "අප හා සම්බන්ධ වීම ගැන ස්තුතියි. අපට ඔබගේ පණිවිඩය ලැබී ඇත. (මෙය නිරූපණයක් වන අතර සැබෑවටම විද්‍යුත් තැපෑලක් යවා නොමැත).",
    grades: ["6 ශ්‍රේණිය", "7 ශ්‍රේණිය", "8 ශ්‍රේණිය", "9 ශ්‍රේණිය", "10 ශ්‍රේණිය", "11 ශ්‍රේණිය"],
  }
}

export default function ContactForm() {
  const { language } = useContext(LanguageContext);
  const t = translations[language as keyof typeof translations] || translations.en;

  const formSchema = z.object({
    name: z.string().min(2, { message: t.nameError }),
    grade: z.string({ required_error: t.gradeError }),
    mobile: z.string().min(10, { message: t.mobileError }),
    email: z.string().email({ message: t.emailError }).optional().or(z.literal('')),
    message: z.string().min(10, { message: t.messageErrorMin }).max(500, { message: t.messageErrorMax })
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      mobile: "",
      email: "",
      message: "",
    },
  });
 
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setIsSubmitted(true);
    form.reset();
  }

  if (isSubmitted) {
    return (
        <Alert variant="default" className="border-green-500 text-green-700">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>{t.successTitle}</AlertTitle>
            <AlertDescription>{t.successDescription}</AlertDescription>
        </Alert>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>{t.nameLabel}</FormLabel>
                <FormControl>
                    <Input placeholder={t.namePlaceholder} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
                control={form.control}
                name="grade"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>{t.gradeLabel}</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                        <SelectTrigger>
                            <SelectValue placeholder={t.gradePlaceholder} />
                        </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {t.grades.map((grade, index) => (
                                <SelectItem key={grade} value={(index + 6).toString()}>{grade}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                    </FormItem>
                )}
            />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="mobile"
            render={({ field }) => (
                <FormItem>
                <FormLabel>{t.mobileLabel}</FormLabel>
                <FormControl>
                    <Input placeholder={t.mobilePlaceholder} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>{t.emailLabel}</FormLabel>
                <FormControl>
                    <Input placeholder={t.emailPlaceholder} {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t.messageLabel}</FormLabel>
              <FormControl>
                <Textarea placeholder={t.messagePlaceholder} className="min-h-[120px]" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">{t.submitButton}</Button>
      </form>
    </Form>
  )
}
