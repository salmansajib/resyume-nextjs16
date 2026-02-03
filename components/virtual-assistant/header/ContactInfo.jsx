import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function ContactInfo({ heroData }) {
  return (
    <div className="relative">
      <div className="space-y-7 bg-background-primary px-7 sm:px-15 pt-30 pb-10 rounded-2xl">
        <h4 className="text-2xl font-medium leading-none uppercase">
          Contact Me
        </h4>
        <div className="space-y-5">
          {/* phone */}
          <a
            href={`tel:${heroData.contact.phone}`}
            aria-label={`Call ${heroData.contact.phone}`}
            className="flex items-center gap-3 group"
          >
            <span className="size-10 text-text-primary border border-text-primary rounded-full flex items-center justify-center">
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
            <span className="size-10 text-text-primary border border-text-primary rounded-full flex items-center justify-center">
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
            <span className="size-10 text-text-primary border border-text-primary rounded-full flex items-center justify-center">
              <LocationIcon />
            </span>
            <span className="text-text-secondary break-all group-hover:text-text-primary">
              {heroData.contact.address}
            </span>
          </a>
        </div>
      </div>

      <div className="size-42 bg-primary rounded-full flex items-center justify-center text-center text-background-primary absolute -top-18 left-1/2 -translate-x-1/2 lg:-left-16 lg:translate-x-0">
        5+ years of experience
      </div>
      <div className="hidden lg:block size-7.5 bg-background-neutral/50 rounded-full absolute -top-20 -left-20"></div>
    </div>
  );
}
