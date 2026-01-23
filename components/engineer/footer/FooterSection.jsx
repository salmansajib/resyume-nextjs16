import React from "react";
import Link from "next/link";
import Image from "next/image";
import SocialLinks from "./SocialLinks";

export default function FooterSection({ data }) {
  const { hero } = data;

  // get current year
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 flex flex-col sm:flex-row gap-10 items-start justify-center lg:block">
      {/* contact */}
      <div className="w-full lg:border-b border-text-secondary/30 max-w-max lg:max-w-full">
        <div className="w-full max-w-[1620px] mx-auto px-4 grid gap-5 lg:gap-0 grid-cols-1 lg:grid-cols-3">
          {/* phone */}
          <a
            href={`tel:${hero.contact.phone}`}
            aria-label={`Call ${hero.contact.phone}`}
            className="lg:border-l lg:border-r border-text-secondary/30 lg:pl-10 lg:pb-10 group"
          >
            <p className="font-chakraPetch text-lg font-semibold uppercase group-hover:text-primary ">
              phone
            </p>
            <p className="text-text-secondary group-hover:text-text-primary">
              {hero.contact.phone}
            </p>
          </a>

          {/* email */}
          <a
            href={`mailto:${hero.contact.email}`}
            aria-label={`Email ${hero.contact.email}`}
            className="lg:border-r border-text-secondary/30 lg:pl-10 lg:pb-10 group"
          >
            <p className="font-chakraPetch text-lg font-semibold uppercase group-hover:text-primary">
              gmail
            </p>
            <p className="text-text-secondary group-hover:text-text-primary">
              {hero.contact.email}
            </p>
          </a>

          {/* location */}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              hero.contact.address,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View location: ${hero.contact.address}`}
            className="lg:border-r border-text-secondary/30 lg:pl-10 lg:pb-10 group"
          >
            <p className="font-chakraPetch text-lg font-semibold uppercase group-hover:text-primary">
              location
            </p>
            <p className="text-text-secondary group-hover:text-text-primary">
              {hero.contact.address}
            </p>
          </a>
        </div>
      </div>

      {/* copyright, logo, social link icon */}
      <div>
        <div className="w-full max-w-[1620px] mx-auto px-4 grid gap-5 lg:gap-0 grid-cols-1 lg:grid-cols-3">
          <p className="text-base text-text-secondary space-x-3 lg:pt-10 lg:pl-10 lg:border-l lg:border-r border-text-secondary/30 order-3 lg:order-1">
            {/* copyright */}
            <span>Copyright &copy; {currentYear}</span>
            <span>|</span>
            <span className="capitalize">powered by rezyume</span>
          </p>
          {/* logo */}
          <Link
            href="/"
            className="lg:pt-10 lg:border-r border-text-secondary/30 w-full mx-auto lg:flex items-center justify-center order-1 lg:order-2"
          >
            <Image
              src="/assets/engineer/logos/logo-footer.svg"
              alt="rezyume logo"
              width={300}
              height={300}
              className="w-[164px] h-auto object-cover"
            />
          </Link>
          {/* social link icons */}
          <SocialLinks className="lg:pt-10 lg:justify-self-end lg:pr-10 lg:border-r border-text-secondary/30 order-2 lg:order-3" />
        </div>
      </div>
    </footer>
  );
}
