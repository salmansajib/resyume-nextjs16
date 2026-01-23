import React from "react";
import Image from "next/image";
import EmailIconFilled from "@/components/icons/EmailIconFilled";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";

export default function ReferralCard({ item }) {
  return (
    <article className="flex flex-col sm:flex-row items-center gap-10 bg-background-primary p-5 rounded-lg">
      {/* image */}
      <div className="rounded-md overflow-hidden">
        <Image
          src={item.photo}
          alt={`${item.name} photo`}
          width={300}
          height={300}
          className="w-[270px] h-[245px] object-cover"
        />
      </div>

      {/* details info */}
      <div className="space-y-3">
        <h4 className="text-2xl font-medium font-chakraPetch capitalize">
          {item.name}
        </h4>
        <p className="text-text-secondary uppercase">{item.position}</p>
        <a
          href={`mailto:${item.email}`}
          aria-label={`Email ${item.email}`}
          className="text-text-secondary flex items-center gap-3 hover:text-text-primary break-all"
        >
          <span className="size-[32px] rounded-full border border-text-secondary/30 flex items-center justify-center">
            <EmailIconFilled />
          </span>
          {item.email}
        </a>
        <a
          href={`tel:${item.phone}`}
          aria-label={`tel ${item.phone}`}
          className="text-text-secondary flex items-center gap-3 hover:text-text-primary"
        >
          <span className="size-[32px] rounded-full border border-text-secondary/30 flex items-center justify-center">
            <PhoneIconFilled />
          </span>
          {item.phone}
        </a>
      </div>
    </article>
  );
}
