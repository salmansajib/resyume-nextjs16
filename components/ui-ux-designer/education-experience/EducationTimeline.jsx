import React from "react";

export default function EducationTimeline({ education }) {
  return (
    <div className="relative sm:ml-[120px]">
      {/* vertical line */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -left-25 -bottom-10 bg-primary w-0.5"
      />

      <ul className="space-y-15">
        {education.entries.map((item) => (
          <li key={item.id}>
            <article className="relative">
              {/* horizontal connector line */}
              <div
                aria-hidden="true"
                className="absolute top-[5px] -left-25 w-10 h-0.5 bg-primary"
              />

              {/* timeline dot */}
              <div
                aria-hidden="true"
                className="absolute top-0 -left-15 size-3 rounded-full bg-primary flex items-center justify-center"
              >
                <div className="size-1.5 rounded-full bg-background-primary"></div>
              </div>

              {/* content card */}
              <div className="space-y-3 bg-background-primary p-10">
                <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-3">
                  <div className="space-y-3">
                    <time className="block text-base font-medium uppercase">
                      {item.date}
                    </time>
                    <h3 className="text-xl font-medium text-text-primary max-w-[16ch]">
                      {item.institution}
                    </h3>
                  </div>
                  <span className="text-base font-normal bg-background-secondary px-3 py-1.5 ">
                    <span className="sr-only">Grade: </span>
                    {item.grade}
                  </span>
                </div>
                <p className="text-base font-medium text-primary uppercase">
                  {item.degree}
                </p>
                <p className="text-base font-normal max-w-[50ch]">
                  {item.description}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
