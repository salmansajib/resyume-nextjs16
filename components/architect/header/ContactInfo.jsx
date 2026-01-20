import React from "react";
import { motion } from "motion/react";
import CircularText from "@/components/CircularText";
import LocationIcon from "@/components/icons/LocationIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import { cn } from "@/lib/utils";

export default function ContactInfo({ heroData, className }) {
  return (
    <div className={cn("flex items-center gap-20 mt-10 md:mt-0", className)}>
      {/* cv download link */}
      <motion.a
        href="#"
        className="text-primary"
        whileHover={{
          scale: 1.1,
        }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <CircularText
          text="• Download CV • Download CV"
          className="size-48"
          radius={45}
          fontSize={16}
          duration={25}
        >
          <svg
            width="33"
            height="34"
            viewBox="0 0 33 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M32.4542 13.3028C32.2206 12.9841 31.9208 12.7197 31.5753 12.5278C31.2299 12.3359 30.847 12.221 30.453 12.1911V12.1812C30.4522 11.4472 30.1602 10.7435 29.6412 10.2245C29.1222 9.70551 28.4185 9.41357 27.6846 9.41275V1.66107C27.684 1.22068 27.5089 0.798476 27.1975 0.487073C26.8861 0.175671 26.4639 0.000503747 26.0235 0H4.98322C4.54283 0.000503747 4.12062 0.175671 3.80922 0.487073C3.49782 0.798476 3.32265 1.22068 3.32215 1.66107V9.41275H2.76846C2.03447 9.41357 1.33078 9.70551 0.811776 10.2245C0.29277 10.7435 0.000828184 11.4472 0 12.1812V30.453C0.000828184 31.187 0.29277 31.8907 0.811776 32.4097C1.33078 32.9287 2.03447 33.2206 2.76846 33.2215H25.4918C26.0853 33.2238 26.6637 33.0343 27.1408 32.6812C27.6179 32.3281 27.9682 31.8303 28.1394 31.262L32.8765 15.7587C33.005 15.345 33.0337 14.9069 32.9603 14.48C32.8869 14.0531 32.7135 13.6497 32.4542 13.3028ZM27.6846 10.5201C28.1249 10.5206 28.5472 10.6958 28.8586 11.0072C29.17 11.3186 29.3451 11.7408 29.3456 12.1812H27.6846V10.5201ZM1.10738 12.1812C1.10789 11.7408 1.28305 11.3186 1.59446 11.0072C1.90586 10.6958 2.32807 10.5206 2.76846 10.5201H3.32215V15.5033H4.42953V1.66107C4.4297 1.51428 4.48809 1.37354 4.59189 1.26974C4.69569 1.16594 4.83642 1.10755 4.98322 1.10738H26.0235C26.1703 1.10755 26.311 1.16594 26.4148 1.26974C26.5186 1.37354 26.577 1.51428 26.5772 1.66107V12.1812H8.30148C7.70415 12.1837 7.12346 12.3782 6.64519 12.7361C6.16692 13.0939 5.81644 13.5961 5.64553 14.1685L1.10738 29.5981V12.1812ZM31.8174 15.435L27.0803 30.9384C26.9776 31.2794 26.7675 31.5781 26.4812 31.7899C26.1949 32.0018 25.8479 32.1155 25.4918 32.1141H2.76846C2.35423 32.1144 1.95494 31.9594 1.64948 31.6796L6.7079 14.481C6.81045 14.1375 7.02074 13.8362 7.3077 13.6215C7.59467 13.4068 7.94308 13.2901 8.30148 13.2886H30.2289C30.4885 13.2886 30.7446 13.3495 30.9765 13.4663C31.2083 13.5832 31.4096 13.7528 31.5641 13.9615C31.7185 14.1702 31.8219 14.4123 31.8659 14.6682C31.9099 14.9241 31.8933 15.1867 31.8174 15.435Z"
              fill="currentColor"
            />
            <path
              d="M19.9331 17.7919C19.9326 17.3515 19.7575 16.9293 19.4461 16.6179C19.1346 16.3065 18.7124 16.1314 18.2721 16.1309H17.1647C16.7243 16.1314 16.3021 16.3065 15.9907 16.6179C15.6793 16.9293 15.5041 17.3515 15.5036 17.7919V24.4362H13.1924L17.7184 29.7165L22.2443 24.4362H19.9331V17.7919ZM17.7184 28.015L15.6 25.5436H16.611V17.7919C16.6111 17.6451 16.6695 17.5044 16.7733 17.4006C16.8771 17.2968 17.0179 17.2384 17.1647 17.2382H18.2721C18.4188 17.2384 18.5596 17.2968 18.6634 17.4006C18.7672 17.5044 18.8256 17.6451 18.8257 17.7919V25.5436H19.8367L17.7184 28.015Z"
              fill="currentColor"
            />
          </svg>
        </CircularText>
      </motion.a>

      {/* contact info */}
      <div className="w-full flex flex-col items-end gap-5 bg-background-secondary py-10 px-2 sm:px-10">
        {/* phone */}
        <a
          href={`tel:${heroData.contact.phone}`}
          className="flex items-center gap-5 hover:text-primary transition-colors group"
          aria-label={`Call ${heroData.contact.phone}`}
        >
          <p className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
            {heroData.contact.phone}
          </p>
          <div className="text-text-secondary border border-primary size-10 md:size-12.5 flex items-center justify-center rounded-full">
            <PhoneIcon />
          </div>
        </a>

        {/* email */}
        <a
          href={`mailto:${heroData.contact.email}`}
          className="flex items-center gap-5 hover:text-primary transition-colors group"
          aria-label={`Email ${heroData.contact.email}`}
        >
          <p className="text-xl font-normal text-text-secondary break-all group-hover:text-primary transition-colors">
            {heroData.contact.email}
          </p>
          <div className="text-text-secondary border border-primary size-10 md:size-12.5 flex items-center justify-center rounded-full">
            <EmailIcon />
          </div>
        </a>

        {/* location */}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            heroData.contact.address,
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-5 hover:text-primary transition-colors group"
          aria-label={`View location: ${heroData.contact.address}`}
        >
          <p className="text-xl font-normal text-text-secondary group-hover:text-primary transition-colors">
            {heroData.contact.address}
          </p>
          <div className="text-text-secondary border border-primary size-10 md:size-12.5 flex items-center justify-center rounded-full">
            <LocationIcon />
          </div>
        </a>
      </div>
    </div>
  );
}
