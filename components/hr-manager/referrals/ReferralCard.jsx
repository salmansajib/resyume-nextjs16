import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";
import EmailIconFilled from "@/components/icons/EmailIconFilled";

export default function ReferralCard({ item, fadeInUp }) {
  return (
    <motion.article variants={fadeInUp} className="relative">
      {/* image */}
      <div>
        <Image
          src={item.photo}
          alt={`${item.name} photo`}
          width={500}
          height={500}
          className="w-[375px] h-auto object-cover rounded-2xl overflow-hidden"
        />
      </div>

      {/* contact  */}
      <div className="w-full h-full absolute inset-0 flex flex-col items-center justify-end gap-4 pb-7 ">
        <div className="bg-background-primary/10 border border-background-primary/20 backdrop-blur-lg rounded-xl px-12 py-7">
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
              className="flex items-center gap-2"
            >
              <span className="text-text-secondary">
                <EmailIconFilled />
              </span>
              <span className="text-text-secondary transition-all duration-500 break-all">
                {item.email}
              </span>
            </a>
            <a
              href={`tel:${item.phone}`}
              aria-label={`tel ${item.phone}`}
              className="flex items-center gap-2"
            >
              <span className="text-text-secondary">
                <PhoneIconFilled />
              </span>
              <span className="text-text-secondary transition-all duration-150">
                {item.phone}
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
