"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FileText, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "About" },
  { href: "/lessons", label: "Classes" },
  { href: "/quizzes", label: "Reviews" },
  { href: "/#news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, label, className }: { href: string; label: string, className?: string }) => (
    <Link
      href={href}
      className={cn(
        "transition-colors hover:text-primary",
        pathname === href ? "text-primary font-semibold" : "text-muted-foreground",
        className
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center mx-auto px-4 md:px-6 justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <FileText className="h-8 w-8 text-green-600" />
          <span className="text-xl font-bold font-headline sm:inline-block text-foreground">Grammar Sheet</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href+link.label} {...link} />
          ))}
        </nav>
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
                <Link href="/" className="flex items-center space-x-2 px-4">
                    <FileText className="h-8 w-8 text-green-600" />
                    <span className="text-xl font-bold font-headline text-foreground">Grammar Sheet</span>
                </Link>
                <div className="flex flex-col gap-4 px-4">
                  {navLinks.map((link) => (
                      <NavLink key={link.href+link.label} {...link} className="text-lg"/>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
