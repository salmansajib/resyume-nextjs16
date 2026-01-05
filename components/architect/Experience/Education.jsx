import React from "react";

// comment

export default function Education({ item }) {
  return (
    <article className="w-full max-w-[500px] h-full min-h-[230px] relative p-10 pl-15">
      <div className="space-y-3">
        <h4 className="text-2xl font-medium font-lora">{item.institution}</h4>
        <p className="text-lg text-text-secondary">{item.degree}</p>
      </div>

      {/* grade on the left */}
      <p
        className="text-xl text-text-secondary absolute top-27 -left-2 rotate-180"
        style={{ writingMode: "vertical-rl" }}
      >
        {item.grade}
      </p>

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
