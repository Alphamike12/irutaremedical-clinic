import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Plus } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Plus className="h-5 w-5" strokeWidth={3} />
            </span>
            <span className="font-display text-lg font-semibold">Irutare Medical Clinic Ltd</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            Affordable, accessible, and quality healthcare for the people of Irutare and surrounding communities in Rwanda.
          </p>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Explore</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-foreground">Home</Link></li>
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold text-foreground">Contact</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />Irutare, Rwanda</li>
            <li className="flex items-start gap-2"><Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href="tel:+250785198123" className="hover:text-foreground">+250 785 198 123</a></li>
            <li className="flex items-start gap-2"><Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" /><a href="mailto:simpachrys@gmail.com" className="hover:text-foreground">simpachrys@gmail.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Irutare Medical Clinic Ltd. All rights reserved.
      </div>
    </footer>
  );
}
