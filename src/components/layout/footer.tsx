import Link from "next/link";
import { FileText, Phone, Mail, Facebook, Youtube, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <FileText className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-white">Grammar Sheet</span>
            </Link>
            <p className="text-gray-400">
              Excellence in English Education for Sri Lankan Students
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Youtube className="h-5 w-5" /></Link>
              <Link href="#" className="text-gray-400 hover:text-white"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white">Home</Link></li>
              <li><Link href="/contact" className="hover:text-white">About</Link></li>
              <li><Link href="/lessons" className="hover:text-white">Classes</Link></li>
              <li><Link href="/reviews" className="hover:text-white">Reviews</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-4">Classes</h3>
            <ul className="space-y-2">
              <li><Link href="/lessons" className="hover:text-white">Grade 6-8</Link></li>
              <li><Link href="/lessons" className="hover:text-white">Grade 9-10</Link></li>
              <li><Link href="/lessons" className="hover:text-white">Grade 11</Link></li>
              <li><Link href="/lessons" className="hover:text-white">Trial Classes</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5" />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span>info@grammarsheet.lk</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Grammar Sheet. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
