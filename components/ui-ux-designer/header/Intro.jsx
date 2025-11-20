import React from "react";

export default function Intro({ hero }) {
  return (
    <div className="space-y-3 w-full">
      {/* greeting */}
      <p className="text-text-dimmed font-medium uppercase">{hero.greeting}</p>
      {/* name */}
      <h1 className="text-text-primary font-medium text-5xl md:text-6xl lg:max-w-[12ch] leading-17">
        {hero.name}
      </h1>
      {/* title */}
      <h2 className="text-primary font-medium text-3xl uppercase">
        {hero.title}
      </h2>
      {/* linkedin link and download cv button */}
      <div className="w-full flex flex-col sm:flex-row items-center gap-5 mt-15">
        <a
          href="#"
          className="text-background-primary bg-primary flex items-center justify-center gap-2 w-full sm:max-w-[280px] h-[60px] cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-lg"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 20V12.675C20 9.075 19.225 6.325 15.025 6.325C13 6.325 11.65 7.425 11.1 8.475H11.05V6.65H7.07501V20H11.225V13.375C11.225 11.625 11.55 9.94999 13.7 9.94999C15.825 9.94999 15.85 11.925 15.85 13.475V19.975H20V20Z"
              fill="currentColor"
            />
            <path
              d="M0.325012 6.64999H4.47501V20H0.325012V6.64999Z"
              fill="currentColor"
            />
            <path
              d="M2.4 0C1.075 0 0 1.075 0 2.4C0 3.725 1.075 4.825 2.4 4.825C3.725 4.825 4.8 3.725 4.8 2.4C4.8 1.075 3.725 0 2.4 0Z"
              fill="currentColor"
            />
          </svg>
          <span className="text-lg font-medium">LinkedIn Account</span>
        </a>
        <a
          href="#"
          className="w-full sm:max-w-[280px] h-[60px] flex items-center justify-center bg-background-primary text-lg font-medium text-text-primary shadow-lg cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-primary hover:-translate-y-0.5 hover:brightness-110 hover:shadow-xl transition-all duration-300"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
