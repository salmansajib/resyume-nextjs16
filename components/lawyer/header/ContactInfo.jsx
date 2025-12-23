import React from "react";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import DribbleIcon from "@/components/icons/DribbleIcon";
import LinkedinIcon from "@/components/icons/LinkedinIcon";
import XIcon from "@/components/icons/XIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function ContactInfo({ heroData }) {
  return (
    <div className="rounded-xl">
      <div className="space-y-8 bg-linear-to-br from-background-primary to-background-secondary px-10 py-10 rounded-xl">
        <h2 className="font-taviraj font-medium text-3xl">{heroData.title}</h2>
        {/* contact */}
        <div className="space-y-5">
          {/* phone */}
          <a
            href={`tel:${heroData.contact.phone}`}
            className="flex items-center gap-5 hover:text-primary transition-colors group"
            aria-label={`Call ${heroData.contact.phone}`}
          >
            <div>
              <PhoneIcon width={18} height={20} />
            </div>
            <p className="text-lg font-normal text-text-secondary group-hover:text-primary transition-colors">
              {heroData.contact.phone}
            </p>
          </a>
          {/* email */}
          <a
            href={`mailto:${heroData.contact.email}`}
            className="flex items-center gap-5 hover:text-primary transition-colors group"
            aria-label={`Email ${heroData.contact.email}`}
          >
            <div>
              <EmailIcon width={18} height={20} />
            </div>
            <p className="text-lg font-normal text-text-secondary group-hover:text-primary transition-colors">
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
            className="flex items-center gap-5 hover:text-primary transition-colors group"
            aria-label={`View location: ${heroData.contact.address}`}
          >
            <div>
              <LocationIcon width={18} height={20} />
            </div>
            <p className="text-lg font-normal text-text-secondary group-hover:text-primary transition-colors">
              {heroData.contact.address}
            </p>
          </a>
        </div>
      </div>

      {/* social links */}
      <div className="flex gap-8 items-center justify-center max-w-max mx-auto text-primary mt-15">
        <a
          href="/lawyer"
          className="hover:text-text-primary transition-colors duration-150"
        >
          <DribbleIcon width={22} height={22} />
        </a>
        <a
          href="/lawyer"
          className="hover:text-text-primary transition-colors duration-150"
        >
          <LinkedinIcon width={22} height={22} />
        </a>
        <a
          href="/lawyer"
          className="hover:text-text-primary transition-colors duration-150"
        >
          <XIcon width={22} height={22} />
        </a>
        <a
          href="/lawyer"
          className="hover:text-text-primary transition-colors duration-150"
        >
          <InstagramIcon width={22} height={22} />
        </a>
      </div>
    </div>
  );
}
