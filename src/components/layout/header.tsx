"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useContext } from "react";
import { FileText, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";
import { LanguageToggle, LanguageContext } from "./language-toggle";

const navLinks = [
  { href: "/", label: "Home", siLabel: "මුල් පිටුව" },
  { href: "/about", label: "About", siLabel: "අප ගැන" },
  { href: "/lessons", label: "Classes", siLabel: "පන්ති" },
  { href: "/reviews", label: "Reviews", siLabel: "විචාර" },
  { href: "/news", label: "News", siLabel: "පුවත්" },
  { href: "/contact", label: "Contact", siLabel: "සම්බන්ධ වන්න" },
];

export function Header() {
  const { language } = useContext(LanguageContext);

  const NavLinks = () => (
    <>
      {navLinks.map((link) => (
        <NavLink 
          key={link.href} 
          href={link.href} 
          label={language === 'si' ? link.siLabel : link.label} 
        />
      ))}
    </>
  );

  const MobileNavLinks = () => (
     <>
      {navLinks.map((link) => (
        <NavLink 
          key={link.href} 
          href={link.href} 
          label={language === 'si' ? link.siLabel : link.label}
          className="text-lg"
          isMobile={true}
        />
      ))}
    </>
  )

  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, className, isMobile = false }: { href: string; label: string, className?: string, isMobile?: boolean }) => (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-green-600 dark:hover:text-green-400",
        pathname === href ? "text-green-700 dark:text-green-400 font-semibold" : "text-green-900 dark:text-green-200",
        className
      )}
      onClick={() => isMobile && setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4 md:px-6 justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold font-headline sm:inline-block text-foreground">Grammar Seed</span>
        </Link>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <NavLinks />
          </nav>
          <LanguageToggle />
          <ThemeToggle />
          <div className="flex items-center justify-end md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="flex flex-col gap-6 pt-6">
                  <Link href="/" className="flex items-center space-x-2 px-4" onClick={() => setIsMobileMenuOpen(false)}>
                      <FileText className="h-8 w-8 text-green-600" />
                      <span className="text-xl font-bold font-headline text-foreground">Grammar Seed</span>
                  </Link>
                  <div className="flex flex-col gap-4 px-4">
                    <MobileNavLinks />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
