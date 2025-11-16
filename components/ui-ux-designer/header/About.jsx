import React from "react";

export default function About({ hero }) {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-medium text-primary uppercase">
        {hero.about.title}
      </h2>
      <h3 className="text-[32px] font-medium text-text-primary">
        {hero.about.heading}
      </h3>
      <p className="text-base text-text-dimmed max-w-[60ch]">
        {hero.about.description}
      </p>
      <div className="flex flex-col sm:flex-row items-start gap-10 mt-10">
        <a
          href="#"
          className="w-full h-[60px] bg-primary text-background-primary flex items-center justify-center cursor-pointer text-[20px] font-medium"
        >
          Check my Protfolio
        </a>
        <p className="font-sacramento text-[40px] text-text-dimmed">
          {hero.about.signature}
        </p>
      </div>
    </div>
  );
}
