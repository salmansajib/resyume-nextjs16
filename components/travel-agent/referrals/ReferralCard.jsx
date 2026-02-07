import React from "react";
import Image from "next/image";
import EmailIconFilled from "@/components/icons/EmailIconFilled";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";
import { motion } from "motion/react";

export default function ReferralCard({ item, fadeInUp }) {
  return (
    <motion.article variants={fadeInUp} className="relative group">
      <div className="">
        <Image
          src={item.photo}
          alt={`photo of ${item.name}`}
          width={500}
          height={500}
          className="w-full max-w-[400px] h-[400px] object-cover rounded-2xl overflow-hidden"
        />
      </div>

      <div className="w-full h-full rounded-2xl bg-linear-to-t from-text-primary/80 to-text-primary/0 absolute inset-0 flex flex-col items-center justify-end gap-4 pb-7 transition-all duration-500">
        {/* name and position */}
        <div className="">
          <h3 className="text-lg font-medium text-background-primary text-center">
            {item.name}
          </h3>
          <p className="text-background-primary">{item.position}</p>
        </div>
        {/* divider */}
        <div className="md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500 w-[70%] h-px bg-[#CBCBCB]"></div>
        {/* contact info */}
        <div className="flex flex-col items-start gap-2">
          <a
            href={`mailto:${item.email}`}
            aria-label={`Email ${item.email}`}
            className="flex items-center gap-2 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500"
          >
            <span className="text-background-primary">
              <EmailIconFilled />
            </span>
            <span className="text-background-primary transition-all duration-500 break-all">
              {item.email}
            </span>
          </a>
          <a
            href={`tel:${item.phone}`}
            aria-label={`tel ${item.phone}`}
            className="flex items-center gap-2 md:opacity-0 md:group-hover:opacity-100 md:translate-y-2 md:group-hover:translate-y-0 transition-all duration-500"
          >
            <span className="text-background-primary">
              <PhoneIconFilled />
            </span>
            <span className="text-background-primary transition-all duration-150">
              {item.phone}
            </span>
          </a>
        </div>
      </div>
    </motion.article>
  );
}
