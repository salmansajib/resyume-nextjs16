import React from "react";
import Image from "next/image";
import EmailIconFilled from "@/components/icons/EmailIconFilled";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";

export default function Referral({ item }) {
  return (
    <article className="w-full flex items-center justify-center">
      {/* image */}
      <div className="">
        <Image
          src={item.photo}
          alt={`${item.name} photo`}
          width={300}
          height={300}
          className="w-[200px] h-[207px] object-cover rounded-2xl overflow-hidden"
        />
      </div>

      {/* details info */}
      <div className="space-y-2 bg-linear-to-br from-[#4F4F4F]/52 to-[#1C1C1C]/52 w-full max-w-[400px] pl-5 py-7 rounded-tr-xl rounded-br-xl">
        <h3 className="font-taviraj font-medium text-xl capitalize text-primary">
          {item.name}
        </h3>
        <h4 className="text-base">{item.position}</h4>
        <div className="flex items-center gap-3 text-text-secondary">
          <EmailIconFilled />
          <a
            href={`mailto:${item.email}`}
            className="text-base hover:text-text-primary"
          >
            {item.email}
          </a>
        </div>
        <div className="flex items-center gap-3 text-text-secondary">
          <PhoneIconFilled />
          <a
            href={`tel:${item.phone}`}
            className="text-base hover:text-text-primary"
          >
            {item.phone}
          </a>
        </div>
      </div>
    </article>
  );
}
