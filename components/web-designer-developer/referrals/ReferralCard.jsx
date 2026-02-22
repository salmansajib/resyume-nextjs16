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
        scale: 1.03,
      }}
      variants={fadeInUp}
      className="w-full max-w-[390px] bg-linear-to-br from-[#FFFEFE]/5 to-[#B49696]/0 flex items-center justify-center px-4 pt-4 pb-8 rounded-3xl ring-1 ring-[#E8E8E8]/10 backdrop-blur-xs"
    >
      <article className="space-y-3">
        <div className="rounded-2xl overflow-hidden mb-5">
          <Image
            src={item.photo}
            alt={`${item.name} image`}
            width={500}
            height={500}
            className="w-[369px] h-auto object-cover"
          />
        </div>
        <h3 className="text-2xl font-semibold capitalize font-rajdhani leading-none">
          {item.name}
        </h3>
        <p className="capitalize text-text-secondary">{item.position}</p>
        <div className="space-y-2">
          <a
            href={`mailto:${item.email}`}
            aria-label={`Email ${item.email}`}
            className="flex items-center gap-3 text-text-secondary hover:text-text-primary"
          >
            <EmailIconFilled className="text-text-secondary" />
            {item.email}
          </a>
          <a
            href={`tel:${item.phone}`}
            aria-label={`tel ${item.phone}`}
            className="flex items-center gap-3 text-text-secondary hover:text-text-primary"
          >
            <PhoneIconFilled className="text-text-secondary" />
            {item.phone}
          </a>
        </div>
      </article>
    </motion.div>
  );
}
