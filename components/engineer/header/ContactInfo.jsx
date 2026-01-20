import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import { cn } from "@/lib/utils";

export default function ContactInfo({ heroData, className }) {
  return (
    <div className={cn("space-y-4 relative z-10 max-w-max", className)}>
      {/* phone */}
      <a
        href={`tel:${heroData.contact.phone}`}
        aria-label={`Call ${heroData.contact.phone}`}
        className="group flex items-center gap-5 text-text-secondary hover:text-text-primary transition-all duration-150"
      >
        <div
          className="size-12 bg-background-secondary flex items-center justify-center"
          style={{
            clipPath:
              "polygon(0% 0%,calc(100% - 8px) 0%,100% 8px,100% 100%,8px 100%,0% calc(100% - 8px))",
          }}
        >
          <PhoneIcon />
        </div>
        <span className="text-lg">{heroData.contact.phone}</span>
      </a>
      {/* email */}
      <a
        href={`mailto:${heroData.contact.email}`}
        aria-label={`Email ${heroData.contact.email}`}
        className="group flex items-center gap-5 text-text-secondary hover:text-text-primary transition-all duration-150"
      >
        <div
          className="size-12 bg-background-secondary flex items-center justify-center"
          style={{
            clipPath:
              "polygon(0% 0%,calc(100% - 8px) 0%,100% 8px,100% 100%,8px 100%,0% calc(100% - 8px))",
          }}
        >
          <EmailIcon />
        </div>
        <span className="text-lg break-all md:break-normal">
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
        className="group flex items-center gap-5 text-text-secondary hover:text-text-primary transition-all duration-150"
      >
        <div
          className="size-12 bg-background-secondary flex items-center justify-center"
          style={{
            clipPath:
              "polygon(0% 0%,calc(100% - 8px) 0%,100% 8px,100% 100%,8px 100%,0% calc(100% - 8px))",
          }}
        >
          <LocationIcon />
        </div>
        <span className="text-lg">{heroData.contact.address}</span>
      </a>
    </div>
  );
}
