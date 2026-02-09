"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

export default function ReferenceCard({ reference, itemVariants }) {
  return (
    <motion.article
      variants={itemVariants}
      className="bg-background-secondary flex items-center gap-7 max-w-lg p-5"
    >
      {/* avatar image */}
      <div className="shrink-0">
        <Image
          src={reference.image}
          alt={`Portrait of ${reference.name}`}
          width={200}
          height={200}
          className="w-25 md:w-36 h-auto object-cover"
        />
      </div>

      {/* info */}
      <div className="space-y-1">
        <h3 className="text-text-secondary font-medium text-xl">
          {reference.name}
        </h3>
        <p className="text-base font-normal text-text-dimmed">
          {reference.position}
        </p>
        <address className="mt-3 space-y-2">
          <div className="flex items-center gap-5">
            <Image
              src={reference.phone.icon}
              alt="phone icon"
              width={20}
              height={20}
              className="w-4 h-auto object-cover"
            />
            <a
              href={`tel:${reference.phone.number.replace(/\s/g, "")}`}
              className="hover:text-primary transition-colors text-base font-normal text-text-dimmed break-all"
              aria-label={`Call ${reference.name} at ${reference.phone.number}`}
            >
              {reference.phone.number}
            </a>
          </div>
          <div className="flex items-center gap-5">
            <Image
              src={reference.email.icon}
              alt="phone icon"
              width={20}
              height={20}
              className="w-4 h-auto object-cover"
            />
            <a
              href={`mailto:${reference.email.number}`}
              className="hover:text-purple-600 transition-colors text-base font-normal text-text-dimmed break-all"
              aria-label={`Email ${reference.name} at ${reference.email.number}`}
            >
              {reference.email.number}
            </a>
          </div>
        </address>
      </div>
    </motion.article>
  );
}
