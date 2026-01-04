import React from "react";

export default function WorkExperience({ item, formatPeriod, getDateTime }) {
  return (
    <div className="relative p-10 pl-15">
      <div className="space-y-3">
        <h4 className="text-[34px] font-medium text-primary capitalize leading-none">
          {item.position}
        </h4>
        <p className="font-jost font-medium text-xl uppercase leading-none mt-5">
          {item.location}
        </p>
        <p className="font-jost text-xl text-text-secondary">
          {item.description}
        </p>
      </div>

      {/* date */}
      <div
        className="absolute -left-1 top-27 rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        <time
          dateTime={getDateTime(item.period)}
          className="text-text-secondary font-jost text-xl"
        >
          {formatPeriod(item.period)}
        </time>
      </div>

      {/* decoretive element */}
      {/* dot */}
      <div className="border border-primary size-[22px] rounded-full absolute top-0 left-0 flex items-center justify-center">
        <div className="size-3 bg-primary rounded-full"></div>
      </div>
      {/* top line */}
      <div className="w-[95%] h-px bg-primary absolute top-2.5 left-8"></div>
      {/* left line */}
      <div className=" absolute left-2.5 top-8 w-px h-[60px] bg-primary"></div>
    </div>
  );
}
