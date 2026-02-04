import React from "react";
import Image from "next/image";
import EmailIconFilled from "@/components/icons/EmailIconFilled";
import PhoneIconFilled from "@/components/icons/PhoneIconFilled";

export default function ReferralCard({ item }) {
  return (
    <article className="relative group">
      <div className="">
        <Image
          src={item.photo}
          alt={`photo of ${item.name}`}
          width={500}
          height={500}
          className="w-full max-w-[400px] h-[400px] object-cover rounded-2xl overflow-hidden"
        />
      </div>

      <div className="w-[280px] h-[330px] rounded-2xl border border-background-primary bg-linear-to-t from-text-primary/80 to-text-primary/0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-end pb-7 md:group-hover:border-transparent md:group-hover:bg-linear md:group-hover:from-background-neutral md:group-hover:to-background-neutral transition-all duration-200">
        <h3 className="text-lg font-medium text-background-primary">
          {item.name}
        </h3>
        <p className="text-background-primary">{item.position}</p>
        <div className="flex flex-col items-start mt-4 gap-2">
          <a
            href={`mailto:${item.email}`}
            aria-label={`Email ${item.email}`}
            className="md:hidden md:group-hover:flex flex items-center gap-2 transition-all duration-200"
          >
            <span className="text-background-primary">
              <EmailIconFilled />
            </span>
            <span className="text-background-primary transition-all duration-150 break-all">
              {item.email}
            </span>
          </a>
          <a
            href={`tel:${item.phone}`}
            aria-label={`tel ${item.phone}`}
            className="md:hidden md:group-hover:flex flex items-center gap-2 transition-all duration-200"
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
    </article>
  );
}
