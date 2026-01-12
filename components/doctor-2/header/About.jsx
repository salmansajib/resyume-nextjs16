import React from "react";
import { cn } from "@/lib/utils";

export default function About({ heroData, className }) {
  const { about } = heroData;

  return (
    <div
      className={cn("space-y-3 bg-[#FFF1DB] p-6 md:p-12 rounded-lg", className)}
    >
      <h2 className="text-2xl font-medium font-ebGaramond uppercase text-primary">
        {about.title}
      </h2>
      <p className="text-text-dimmed max-w-[45ch]">{about.description}</p>
    </div>
  );
}
