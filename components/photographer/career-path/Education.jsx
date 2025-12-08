import React from "react";

export default function Education({
  educationData,
  formatPeriod,
  getDateTime,
}) {
  return (
    <article>
      <h3 className="text-xl font-medium text-text-primary mb-8 uppercase">
        EDUCATION
      </h3>

      <div className="space-y-10">
        {educationData.map((edu) => (
          <div key={edu.id} className="flex flex-row gap-5 md:gap-15">
            {/* date */}
            <div>
              <div className="bg-background-neutral w-[100px] h-[120px] flex items-center justify-center rounded-t-full">
                <time
                  dateTime={getDateTime(edu.period)}
                  className="text-xl font-medium text-text-primary"
                >
                  {formatPeriod(edu.period)}
                </time>
              </div>
            </div>

            {/* content */}
            <div className="relative">
              <div className="space-y-3">
                <p className="text-lg font-normal text-text-secondary">
                  {edu.institution}
                </p>
                <h4 className="text-xl font-medium text-text-primary">
                  {edu.degree}
                </h4>
                <p className="text-lg font-normal text-text-secondary max-w-[50ch]">
                  {edu.result}
                </p>
              </div>
              <div className="absolute top-0.5 -left-10 text-primary/50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-move-right-icon lucide-move-right"
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
