import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";
import EmailIconFilled from "@/components/icons/EmailIconFilled";

export default function ReferralCard({ item, fadeInUp }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="relative ring-1 ring-text-primary/10 rounded-2xl group overflow-hidden"
    >
      {/* image */}
      <div className="overflow-hidden">
        <Image
          src={item.photo}
          alt={`${item.name} photo`}
          width={500}
          height={500}
          className="w-[375px] h-auto object-cover rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-200"
        />
      </div>

      {/* contact  */}
      <div className="w-full h-full absolute inset-0 flex flex-col items-center justify-end gap-4 pb-7 ">
        <div className="bg-linear-to-r from-[#74708A]/41 to-[#373543]/22 backdrop-blur-sm ring-1 ring-text-primary/10 rounded-xl px-12 py-7">
          {/* name and position */}
          <div className="mb-4 space-y-1">
            <h3 className="text-xl font-medium text-text-primary text-center">
              {item.name}
            </h3>
            <p className="text-text-secondary text-center">{item.position}</p>
          </div>
          {/* contact info */}
          <div className="flex flex-col items-start gap-3">
            <a
              href={`mailto:${item.email}`}
              aria-label={`Email ${item.email}`}
              className="flex items-center gap-2 group/contact"
            >
              <span className="text-text-primary">
                <EmailIconFilled />
              </span>
              <span className="text-text-primary group-hover/contact:text-text-secondary transition-all duration-150 break-all">
                {item.email}
              </span>
            </a>
            <a
              href={`tel:${item.phone}`}
              aria-label={`tel ${item.phone}`}
              className="flex items-center gap-2 group/contact"
            >
              <span className="text-text-primary">
                <PhoneIconFilled />
              </span>
              <span className="text-text-primary group-hover/contact:text-text-secondary transition-all duration-150">
                {item.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
