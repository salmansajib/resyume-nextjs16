"use client";
import React from "react";
import Image from "next/image";
import EmailIconFilled from "@/components/icons/EmailIconFilled";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";
import { motion } from "motion/react";

export default function ReferralCard({ item, fadeInUp }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
      }}
      variants={fadeInUp}
      className="w-full max-w-[297px] bg-[#E5F6F4] border border-primary flex items-center justify-center p-4 rounded-lg inset-shadow-[0_0_2px_rgba(245,245,245)] backdrop-blur-xs"
    >
      <article className="space-y-1">
        <div className="rounded-md overflow-hidden mb-5">
          <Image
            src={item.photo}
            alt={`${item.name} image`}
            width={300}
            height={300}
            className="w-[269px] h-auto object-cover"
          />
        </div>
        <h3 className="text-2xl font-medium capitalize font-ebGaramond">
          {item.name}
        </h3>
        <p className="capitalize">{item.position}</p>
        <div className="space-y-1">
          <a
            href={`mailto:${item.email}`}
            aria-label={`Email ${item.email}`}
            className="flex items-center gap-3 text-text-secondary hover:text-primary"
          >
            <EmailIconFilled className="text-primary" />
            {item.email}
          </a>
          <a
            href={`tel:${item.phone}`}
            aria-label={`tel ${item.phone}`}
            className="flex items-center gap-3 text-text-secondary hover:text-primary"
          >
            <PhoneIconFilled className="text-primary" />
            {item.phone}
          </a>
        </div>
      </article>
    </motion.div>
  );
}
