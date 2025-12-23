import React from "react";

export default function WorkExperience({
  workData,
  formatPeriod,
  getDateTime,
}) {
  return (
    <article>
      <h3 className="text-2xl font-taviraj font-medium text-text-primary mb-8 uppercase">
        WORK EXPERIENCE
      </h3>

      <div className="relative flex flex-col gap-15">
        {workData.map((item) => (
          <div key={item.id} className="flex flex-row gap-10 relative z-10">
            {/* date */}
            <div className="relative size-20">
              <div className="relative z-10 bg-linear-to-b from-[#4F4F4F] to-[#1C1C1C] size-20 flex items-center justify-center rounded-full">
                <time
                  dateTime={getDateTime(item.period)}
                  className="text-text-secondary"
                >
                  {formatPeriod(item.period)}
                </time>
              </div>
              <div className="absolute size-[83px] bg-linear-to-b from-[#6C6C6C]/69 to-[#4C4C4C]/86 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
            </div>

            {/* content */}
            <div className="space-y-3">
              <p className="font-taviraj font-medium text-xl text-primary">
                {item.company}
              </p>
              <h4 className="text-lg font-bold uppercase">{item.location}</h4>
              <p className="text-lg font-normal text-text-secondary max-w-[50ch]">
                {item.description}
              </p>
            </div>
          </div>
        ))}

        {/* decorative line */}
        {/* <div
          aria-hidden="true"
          className="absolute top-3 left-10 w-px bottom-40 sm:bottom-40 bg-primary"
        ></div> */}
      </div>
    </article>
  );
}
