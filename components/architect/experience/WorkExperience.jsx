import React from "react";

export default function WorkExperience({ item, formatPeriod, getDateTime }) {
  return (
    <article className="w-full max-w-[500px] relative p-10 pl-15">
      <div className="space-y-3">
        <h4 className="text-2xl font-medium font-lora">{item.position}</h4>
        <p className="text-lg text-text-secondary">{item.location}</p>
        <p className="text-text-secondary">{item.description}</p>
      </div>

      {/* date */}
      <div
        className="absolute -left-2 top-27 rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        <time
          dateTime={getDateTime(item.period)}
          className="text-text-secondary font-jost text-xl"
        >
          {formatPeriod(item.period)}
        </time>
      </div>

      {/* top line */}
      <div className="absolute top-0 left-6 w-[calc(100%-10px)] h-px bg-border-primary flex items-center justify-between">
        <div className="w-px h-2 bg-border-primary"></div>
        <div className="w-px h-2 bg-border-primary"></div>
      </div>
      {/* left line */}
      <div className="absolute top-5 left-1.5 -translate-x-1/2 w-px h-[70px] bg-border-primary flex flex-col items-center justify-between">
        <div className="w-2 h-px bg-border-primary"></div>
        <div className="w-2 h-px bg-border-primary"></div>
      </div>
    </article>
  );
}
