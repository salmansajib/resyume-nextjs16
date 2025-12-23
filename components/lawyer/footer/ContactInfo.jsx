import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

export default function ContactInfo({ heroData }) {
  return (
    <div className="flex gap-5 flex-wrap items-center justify-between">
      {/* phone */}
      <a
        href={`tel:${heroData.contact.phone}`}
        className="flex items-center gap-5 text-primary hover:text-text-primary transition-colors group"
        aria-label={`Call ${heroData.contact.phone}`}
      >
        <div>
          <PhoneIcon width={18} height={20} />
        </div>
        <p className="text-lg font-normal text-text-secondary group-hover:text-text-primary transition-colors">
          {heroData.contact.phone}
        </p>
      </a>
      {/* email */}
      <a
        href={`mailto:${heroData.contact.email}`}
        className="flex items-center gap-5 text-primary hover:text-text-primary transition-colors group"
        aria-label={`Email ${heroData.contact.email}`}
      >
        <div>
          <EmailIcon width={18} height={20} />
        </div>
        <p className="text-lg font-normal text-text-secondary group-hover:text-text-primary transition-colors">
          {heroData.contact.email}
        </p>
      </a>
      {/* location */}
      <a
        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
          heroData.contact.address,
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-5 text-primary hover:text-text-primary transition-colors group"
        aria-label={`View location: ${heroData.contact.address}`}
      >
        <div>
          <LocationIcon width={18} height={20} />
        </div>
        <p className="text-lg font-normal text-text-secondary group-hover:text-text-primary transition-colors">
          {heroData.contact.address}
        </p>
      </a>
    </div>
  );
}
