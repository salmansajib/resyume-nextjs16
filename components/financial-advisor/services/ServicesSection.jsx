"use client";
import React, { useState } from "react";
import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

export default function ServicesSection({ data }) {
  const { services } = data;

  // ONE controller for all cards
  const [openId, setOpenId] = useState(
    "investment-planning-management", // or null
  );

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section aria-labelledby="services-heading">
      <div className="w-full max-w-7xl mx-auto px-4 py-20 flex flex-col xl:flex-row items-center xl:items-start gap-20">
        {/* title and subtitle */}
        <div className="space-y-3 flex flex-col items-center xl:items-start justify-center">
          <h2
            id="services-heading"
            className="flex items-center gap-1 text-primary font-medium capitalize"
          >
            <Image
              src="/assets/financial-advisor/images/section-title-decorative-line.png"
              aria-hidden
              alt=""
              width={5}
              height={20}
              priority
              className="w-[3px] h-auto object-cover"
            />
            {services.title}
          </h2>
          <h3 className="text-[clamp(2rem,3vw,2.9rem)] font-medium capitalize leading-none lg:max-w-[15ch] text-center xl:text-left">
            {services.subtitle}
          </h3>
          <motion.a
            whileHover={{
              scale: 1.03,
            }}
            href="#portfolio"
            className="w-[255px] h-[63px] bg-primary flex items-center justify-between text-background-primary uppercase px-5 mt-10"
          >
            Check My Portfolio
            <div
              aria-hidden
              className="size-[33px] bg-[#176F4E] flex items-center justify-center"
            >
              <Image
                src="/assets/financial-advisor/icons/arrow-down-portfolio-link.svg"
                alt=""
                width={15}
                height={15}
                className="w-[11px] h-auto object-cover"
              />
            </div>
          </motion.a>
        </div>

        {/* service */}
        <div className="space-y-10">
          {services.items.map((item) => (
            <ServiceCard
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
