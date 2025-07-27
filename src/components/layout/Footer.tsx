"use client";

import clsx from "clsx";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAVIGATIONS } from "@/constants/navigations";

function Footer() {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "Youtube" },
  ];

  const contactInfo = [
    { icon: Mail, text: "info@baliwanderlust.com" },
    { icon: Phone, text: "+62 123 456 789" },
    { icon: MapPin, text: "Jl. Raya Ubud No. 123, Bali, Indonesia" },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-3 gap-8">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/icons/bw-default.svg"
                width={50}
                height={50}
                alt="Bali Wanderlust Logo"
                className="filter brightness-0 invert"
              />
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed">
              Discover the magic of Indonesia with our expertly crafted tour
              packages. We create unforgettable experiences that connect you
              with local culture, stunning landscapes, and authentic adventures.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className={clsx(
                    "w-10 h-10 bg-neutral-800 rounded-lg flex items-center justify-center hover:bg-yellow-500 transition-colors duration-300 group"
                  )}
                  aria-label={social.label}>
                  <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAVIGATIONS.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={clsx(
                      "text-sm transition-colors duration-300",
                      pathname === link.href
                        ? "text-yellow-500"
                        : "text-gray-300 hover:text-yellow-500"
                    )}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-6">
              Contact Info
            </h3>
            <ul className="space-y-4">
              {contactInfo.map((contact, index) => (
                <li key={index} className="flex items-start gap-3">
                  <contact.icon className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {contact.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Bali Wanderlust. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm">
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-400 hover:text-yellow-500 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
