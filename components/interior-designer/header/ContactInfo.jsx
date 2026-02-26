"use client";
import React from "react";
import Image from "next/image";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import CircularText from "@/components/CircularText";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export default function ContactInfo({ data, className }) {
  const { hero } = data;
  const heroData = hero;

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-center gap-5 justify-between mt-10 lg:mt-15",
        className,
      )}
    >
      <div className="relative bg-primary max-w-max px-10 py-10 rounded-lg">
        <div className="space-y-5 relative z-10">
          {/* phone */}
          <a
            href={`tel:${heroData.contact.phone}`}
            aria-label={`Call ${heroData.contact.phone}`}
            className="flex items-center gap-3 group"
          >
            <span className="size-10 text-background-primary border border-background-primary rounded-full flex items-center justify-center">
              <PhoneIcon />
            </span>
            <span className="text-background-primary group-hover:text-text-primary">
              {heroData.contact.phone}
            </span>
          </a>
          {/* email */}
          <a
            href={`mailto:${heroData.contact.email}`}
            aria-label={`Email ${heroData.contact.email}`}
            className="flex items-center gap-3 group"
          >
            <span className="size-10 text-background-primary border border-background-primary rounded-full flex items-center justify-center">
              <EmailIcon />
            </span>
            <span className="text-background-primary break-all group-hover:text-text-primary">
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
            <span className="size-10 text-background-primary border border-background-primary rounded-full flex items-center justify-center">
              <LocationIcon />
            </span>
            <span className="text-background-primary break-all group-hover:text-text-primary">
              {heroData.contact.address}
            </span>
          </a>
        </div>
        <div className="absolute w-full h-full -top-2 -right-2 md:-top-4 md:-right-4 border border-primary rounded-lg"></div>
      </div>

      {/* download cv link */}
      <motion.a
        href="/assets/cv/resume.pdf"
        download="resume.pdf"
        className="text-primary max-h-max rounded-full"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <CircularText
          text="• Download CV • Download CV"
          className="size-30 text-text-secondary"
          radius={41}
          fontSize={16}
          duration={25}
        >
          <Image
            src="/assets/interior-designer/icons/download-cv-icon.svg"
            alt="download cv icon"
            width={20}
            height={20}
            priority
            className="w-[17px] h-auto object-cover"
          />
        </CircularText>
      </motion.a>
    </div>
  );
}
