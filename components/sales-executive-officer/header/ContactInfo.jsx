import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import { cn } from "@/lib/utils";

export default function ContactInfo({ heroData, className }) {
  return (
    <div
      className={cn(
        "flex flex-row max-[1304px]:flex-col items-center max-[1304px]:items-start gap-5",
        className,
      )}
    >
      <h2 className="text-2xl font-medium leading-none capitalize">
        Contact Me
      </h2>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
        {/* phone */}
        <a
          href={`tel:${heroData.contact.phone}`}
          aria-label={`Call ${heroData.contact.phone}`}
          className="flex items-center gap-5 group"
        >
          <span className="size-10 text-text-secondary border border-text-secondary rounded-full flex items-center justify-center shrink-0">
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
          <span className="size-10 text-text-secondary border border-text-secondary rounded-full flex items-center justify-center shrink-0">
            <EmailIcon />
          </span>
          <span className="text-text-secondary break-all group-hover:text-text-primary">
            {heroData.contact.email}
          </span>
        </a>
      </div>
    </div>
  );
}
