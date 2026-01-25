import React from "react";
import EmailIcon from "@/components/icons/EmailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import { cn } from "@/lib/utils";

export default function ContactInfo({ data, className }) {
  return (
    <div
      className={cn(
        "bg-background-neutral py-10 lg:py-20 flex items-center justify-center lg:justify-end lg:pr-30 lg:pl-4",
        className,
      )}
    >
      <div className="space-y-6">
        <h2 className="text-2xl font-bold font-syne">Contact Me</h2>
        <div className="space-y-5">
          {/* phone */}
          <a
            href={`tel:${data.hero.contact.phone}`}
            aria-label={`Call ${data.hero.contact.phone}`}
            className="flex items-center gap-3 group"
          >
            <span className="size-[38px] border border-b-text-dimmed rounded-md flex items-center justify-center">
              <PhoneIcon />
            </span>
            <span className="text-text-dimmed group-hover:text-text-primary">
              {data.hero.contact.phone}
            </span>
          </a>
          {/* email */}
          <a
            href={`mailto:${data.hero.contact.email}`}
            aria-label={`Email ${data.hero.contact.email}`}
            className="flex items-center gap-3 group"
          >
            <span className="size-[38px] border border-b-text-dimmed rounded-md flex items-center justify-center">
              <EmailIcon />
            </span>
            <span className="text-text-dimmed break-all group-hover:text-text-primary">
              {data.hero.contact.email}
            </span>
          </a>
          {/* location */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              data.hero.contact.address,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View location: ${data.hero.contact.address}`}
            className="flex items-center gap-3 group"
          >
            <span className="size-[38px] border border-b-text-dimmed rounded-md flex items-center justify-center">
              <LocationIcon />
            </span>
            <span className="text-text-dimmed break-all group-hover:text-text-primary">
              {data.hero.contact.address}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
