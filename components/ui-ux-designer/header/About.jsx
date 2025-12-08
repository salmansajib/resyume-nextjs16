import React from "react";

export default function About({ hero }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium text-primary uppercase">
        {hero.about.title}
      </h2>
      <h3 className="text-3xl sm:text-4xl font-medium text-text-primary">
        {hero.about.heading}
      </h3>
      <p className="text-base text-text-dimmed max-w-[60ch]">
        {hero.about.description}
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-10 mt-10">
        <a
          href="#portfolio"
          className="w-full h-[60px] bg-primary text-background-primary flex items-center justify-center cursor-pointer text-[20px] font-medium focus:ring-2 focus:ring-primary transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg"
        >
          Check my Protfolio
        </a>
        <p
          aria-hidden="true"
          className="font-sacramento text-[40px] text-text-dimmed"
        >
          {hero.about.signature}
        </p>
      </div>
    </div>
  );
}
