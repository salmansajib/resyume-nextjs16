import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import EmailIconFilled from "@/components/icons/EmailIconFilled";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";

export default function ReferralCard({ item, fadeInUp }) {
  return (
    <motion.article variants={fadeInUp}>
      {/* image */}
      <div>
        <Image
          src={item.photo}
          alt={`${item.name} photo`}
          width={700}
          height={700}
          className="w-full h-[250px] object-cover"
        />
      </div>

      {/* info */}
      <div className="space-y-4 border border-primary border-t-0 py-5">
        <h3 className="leading-tight text-[34px] font-semibold text-primary text-center">
          {item.name}
        </h3>
        <div className="flex items-center justify-center gap-3">
          <EmailIconFilled className="text-primary" />
          <a
            href={`mailto:${item.email}`}
            className="text-xl font-jost text-text-secondary hover:text-primary transition-colors duration-150"
          >
            {item.email}
          </a>
        </div>
        <div className="flex items-center justify-center gap-3">
          <PhoneIconFilled className="text-primary" />
          <a
            href={`tel:${item.phone}`}
            className="text-xl font-jost text-text-secondary hover:text-primary transition-colors duration-150"
          >
            {item.phone}
          </a>
        </div>
      </div>
    </motion.article>
  );
}
