import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import { cn } from "@/lib/utils";

export default function ContactInfo({ heroData, className }) {
  return (
    <div
      className={cn(
        "bg-[#373543]/10 w-[calc(100%-1rem)] max-w-7xl mx-auto px-5 sm:px-10 py-20 rounded-xl ring-1 ring-text-primary/10 backdrop-blur-[7px] flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-15",
        className,
      )}
    >
      <h2 className=" capitalize text-2xl">Contact Me</h2>
      <div className="flex flex-wrap lg:flex-nowrap items-center gap-5 lg:gap-10">
        {/* phone */}
        <a
          href={`tel:${heroData.contact.phone}`}
          aria-label={`Call ${heroData.contact.phone}`}
          className="flex items-center gap-3 group"
        >
          <span className="size-10 text-text-primary border border-text-secondary rounded-full flex items-center justify-center">
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
          <span className="size-10 text-text-primary border border-text-secondary rounded-full flex items-center justify-center">
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
          <span className="size-10 text-text-primary border border-text-secondary rounded-full flex items-center justify-center">
            <LocationIcon />
          </span>
          <span className="text-text-secondary break-all group-hover:text-text-primary">
            {heroData.contact.address}
          </span>
        </a>
      </div>
    </div>
  );
}
