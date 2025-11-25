import React from "react";
import SocialLinksFooter from "./SocialLinksFooter";
import Image from "next/image";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary" role="contentinfo">
      <div className="mx-auto">
        {/* Main Content */}
        <div className="text-center py-15">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center mb-3">
            <Image
              src="/assets/uiuxdesigner/logos/rezyume-logo-footer.svg"
              alt="razyume logo"
              width={300}
              height={300}
              className="w-56 h-auto object-cover"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-medium text-text-primary mb-4">
            Let&apos;s Talk Today
          </h2>

          {/* Email Link */}
          <a
            href="mailto:richardsonVFred02@gmail.com"
            className="inline-flex items-center gap-2 text-text-dimmed hover:text-purple-600 transition-colors group"
            aria-label="Send email to richardsonVFred02@gmail.com"
          >
            <span className="text-lg">richardsonVFred02@gmail.com</span>
            <Image
              src="/assets/uiuxdesigner/icons/arrow-up-icon.svg"
              alt="arrow up icon"
              width={50}
              height={50}
              className="w-3.5 h-auto object-cover"
            />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="py-6 border-t border-gray-200 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 items-center md:justify-between">
            {/* Social Links */}
            <SocialLinksFooter />
            {/* Copyright */}
            <p className="text-gray-600 text-sm">
              Copyright © {currentYear} | Powered by Rezyume
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
