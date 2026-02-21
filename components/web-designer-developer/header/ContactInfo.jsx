import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import { cn } from "@/lib/utils";

export default function ContactInfo({ heroData, className }) {
  return (
    <div
      className={cn(
        "relative w-full xl:max-w-max overflow-hidden bg-background-secondary/15 rounded-2xl ring-1 ring-border-primary backdrop-blur-[3px] px-8 py-10",
        className,
      )}
    >
      <div className="relative z-10 space-y-10">
        <h2 className="text-2xl font-rajdhani font-semibold leading-none uppercase">
          Contact Me
        </h2>
        <dißv className="space-y-7">
          {/* phone */}
          <a
            href={`tel:${heroData.contact.phone}`}
            aria-label={`Call ${heroData.contact.phone}`}
            className="flex items-center gap-5 group"
          >
            <span className="size-10 text-text-secondary border border-text-secondary rounded-full flex items-center justify-center">
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
            className="flex items-center gap-5 group"
          >
            <span className="size-10 text-text-secondary border border-text-secondary rounded-full flex items-center justify-center">
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
            className="flex items-center gap-5 group"
          >
            <span className="size-10 text-text-secondary border border-text-secondary rounded-full flex items-center justify-center">
              <LocationIcon />
            </span>
            <span className="text-text-secondary break-all group-hover:text-text-primary">
              {heroData.contact.address}
            </span>
          </a>
        </dißv>
      </div>

      {/* gradient circle */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 size-120 rounded-full bg-radial-[circle_at_center] from-[#E80567]/60 from-0% via-[#0E1724]/0 via-50% to-transparent to-70%"></div>
    </div>
  );
}
