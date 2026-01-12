import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import { cn } from "@/lib/utils";

export default function ContactInfo({ heroData, className }) {
  return (
    <div className={cn("space-y-5", className)}>
      {/* phone */}
      <a
        href={`tel:${heroData.contact.phone}`}
        aria-label={`Call ${heroData.contact.phone}`}
        className="group flex items-center gap-5 max-w-max"
      >
        <div className="size-11 rounded-full border border-accent flex items-center justify-center group-hover:bg-primary group-hover:text-background-primary group-hover:border-primary transition-colors duration-150">
          <PhoneIcon />
        </div>
        <span className="">{heroData.contact.phone}</span>
      </a>

      {/* email */}
      <a
        href={`mailto:${heroData.contact.email}`}
        aria-label={`Email ${heroData.contact.email}`}
        className="group flex items-center gap-5 max-w-max"
      >
        <div className="size-11 rounded-full border border-accent flex items-center justify-center group-hover:bg-primary group-hover:text-background-primary group-hover:border-primary transition-colors duration-150">
          <EmailIcon />
        </div>
        <span>{heroData.contact.email}</span>
      </a>

      {/* location */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          heroData.contact.address,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View location: ${heroData.contact.address}`}
        className="group flex items-center gap-5 max-w-max"
      >
        <div className="size-11 rounded-full border border-accent flex items-center justify-center group-hover:bg-primary group-hover:text-background-primary group-hover:border-primary transition-colors duration-150">
          <LocationIcon />
        </div>
        <span>{heroData.contact.address}</span>
      </a>
    </div>
  );
}
