import React from "react";
import Image from "next/image";
import EmailIconFilled from "@/components/icons/EmailIconFilled";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";

export default function ReferralCard({ item }) {
  return (
    <article className="relative">
      {/* image */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src={item.photo}
          alt={`photo of ${item.name}`}
          width={500}
          height={500}
          className="w-[375px] h-auto object-cover"
        />
      </div>

      {/* details info */}
      <div className="relative z-10 bg-background-primary w-full max-w-[90%] mx-auto -mt-30 flex flex-col items-center px-3 py-5 inset-shadow-sm border border-[#979797]/30 rounded-lg">
        <h3 className="text-center font-syne font-medium text-2xl capitalize">
          {item.name}
        </h3>
        <p className="text-center uppercase text-text-dimmed mt-1">
          {item.position}
        </p>
        <div className="flex flex-col items-start mt-4 gap-2">
          <a
            href={`mailto:${item.email}`}
            aria-label={`Email ${item.email}`}
            className="flex items-center gap-2 group"
          >
            <span className="size-[35px] border border-[#979797]/30 rounded-full flex items-center justify-center">
              <EmailIconFilled />
            </span>
            <span className="text-text-dimmed group-hover:text-text-primary transition-all duration-150 break-all">
              {item.email}
            </span>
          </a>
          <a
            href={`tel:${item.phone}`}
            aria-label={`tel ${item.phone}`}
            className="flex items-center gap-2 group"
          >
            <span className="size-[35px] border border-[#979797]/30 rounded-full flex items-center justify-center">
              <PhoneIconFilled />
            </span>
            <span className="text-text-dimmed group-hover:text-text-primary transition-all duration-150">
              {item.phone}
            </span>
          </a>
        </div>
      </div>
    </article>
  );
}
