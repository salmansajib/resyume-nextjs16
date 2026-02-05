import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import { cn } from "@/lib/utils";

export default function ContactInfo({ heroData, className }) {
  return (
    <div className={cn("bg-background-neutral", className)}>
      <div className="w-full max-w-7xl mx-auto px-4 py-20 lg:pb-30 grid grid-cols-1 lg:grid-cols-2 gap-10 md:justify-items-center lg:justify-items-normal">
        <div className="hidden lg:block"></div>
        <div className="space-y-5 relative z-10">
          {/* phone */}
          <a
            href={`tel:${heroData.contact.phone}`}
            aria-label={`Call ${heroData.contact.phone}`}
            className="flex items-center gap-3 group"
          >
            <span className="size-10 text-primary border border-primary rounded-full flex items-center justify-center">
              <PhoneIcon />
            </span>
            <span className="text-text-secondary group-hover:text-text-primary">
              {heroData.contact.phone}
            </span>
          </a>
          {/* email */}
          <a
            href={`mailto:${heroData.contact.email}`}
            aria-label={`Email ${heroData.contact.email}`}
            className="flex items-center gap-3 group"
          >
            <span className="size-10 text-primary border border-primary rounded-full flex items-center justify-center">
              <EmailIcon />
            </span>
            <span className="text-text-secondary break-all group-hover:text-text-primary">
              {heroData.contact.email}
            </span>
          </a>
          {/* location */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              heroData.contact.address,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View location: ${heroData.contact.address}`}
            className="flex items-center gap-3 group"
          >
            <span className="size-10 text-primary border border-primary rounded-full flex items-center justify-center">
              <LocationIcon />
            </span>
            <span className="text-text-secondary break-all group-hover:text-text-primary">
              {heroData.contact.address}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
