"use client";
import React from "react";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import InViewAnimator from "@/components/InViewAnimator";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ServicesSection({ data }) {
  const { services } = data;

  return (
    <section
      aria-labelledby="services-heading"
      className="bg-background-secondary relative"
    >
      <InViewAnimator
        variants={staggerContainer}
        className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 text-background-primary"
      >
        {/* title and subtitle */}
        <div className="flex flex-col items-center justify-center gap-3">
          <h2
            id="services-heading"
            className="text-primary font-medium capitalize flex items-center gap-3 leading-none"
          >
            <Image
              src="/assets/travel-agent/icons/title-decorative-icon.svg"
              alt=""
              aria-hidden
              width={25}
              height={25}
              priority
              className="w-[20] h-auto object-cover"
            />
            {services.title}
          </h2>
          <h3 className="font-poppins font-semibold text-[clamp(2rem,4vw,2.82rem)] text-background-primary leading-none">
            {services.subtitle}
          </h3>
        </div>

        {/* services */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-7">
          {services.items.map((item) => (
            <ServiceCard key={item.id} item={item} fadeInUp={fadeInUp} />
          ))}
        </div>
      </InViewAnimator>

      {/* decorative bg images */}
      <div aria-hidden className="hidden lg:block absolute left-0 top-0">
        <Image
          src="/assets/travel-agent/images/services/bg-img-services-top-left.png"
          alt=""
          width={500}
          height={500}
          className="w-[455px] h-auto object-cover"
        />
      </div>
      <div aria-hidden className="hidden lg:block absolute left-0 bottom-0">
        <Image
          src="/assets/travel-agent/images/services/bg-img-services-bottom-left.png"
          alt=""
          width={500}
          height={500}
          className="w-[455px] h-auto object-cover"
        />
      </div>
      <div aria-hidden className="hidden lg:block absolute right-0 top-0">
        <Image
          src="/assets/travel-agent/images/services/bg-img-services-top-right.png"
          alt=""
          width={500}
          height={500}
          className="w-[455px] h-auto object-cover"
        />
      </div>
      <div aria-hidden className="hidden lg:block absolute right-0 bottom-0">
        <Image
          src="/assets/travel-agent/images/services/bg-img-services-bottom-right.png"
          alt=""
          width={500}
          height={500}
          className="w-[455px] h-auto object-cover"
        />
      </div>
    </section>
  );
}
