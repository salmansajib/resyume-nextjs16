import React from "react";

export default function Education({ item }) {
  return (
    <article className="space-y-4 px-6 relative">
      <div className="flex flex-col lg:flex-row gap-3 items-left lg:items-center justify-between relative">
        <h4 className="font-medium uppercase">{item.institution}</h4>
        <p className="font-medium text-text-secondary">{item.result}</p>
      </div>
      <p className="text-text-secondary mb-0 whitespace-nowrap">
        {item.degree}
      </p>

      {/* left dot */}
      <div className="size-2 rounded-full bg-primary absolute -left-1 top-2"></div>
    </article>
  );
}
