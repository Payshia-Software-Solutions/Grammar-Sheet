"use client"

import * as React from "react"
import { Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type LanguageContextType = {
  language: string;
  setLanguage: (language: string) => void;
};

export const LanguageContext = React.createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
});


export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = React.useState("en");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function LanguageToggle() {
  const { setLanguage } = React.useContext(LanguageContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Toggle language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("si")}>
          සිංහල (Sinhala)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}