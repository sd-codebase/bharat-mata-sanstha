import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { ORG_NAME, CONTACT_INFO, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">{ORG_NAME}</h3>
            <p className="text-sm leading-relaxed">
              A multipurpose educational organization dedicated to empowering
              communities through quality education, social welfare, and
              inclusive development since 1993.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-saffron transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin size={18} className="text-saffron shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-saffron shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-saffron shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-light mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {ORG_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
