import React from "react";
import EmailIconFilled from "@/components/icons/EmailIconFilled";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";
import Image from "next/image";
import { motion } from "motion/react";

export default function ReferralCard({ item, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="space-y-2 border border-border-primary p-8 hover:border-primary"
    >
      <div>
        <h4 className="text-[26px] font-medium font-lora text-primary capitalize">
          {item.name}
        </h4>
        <p className="font-medium text-base capitalize">{item.position}</p>
      </div>
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
      <div className="mt-4">
        <Image
          src={item.photo}
          alt={`photo of ${item.name}`}
          width={500}
          height={500}
          className="w-[400px] h-auto object-cover"
        />
      </div>
    </motion.article>
  );
}
