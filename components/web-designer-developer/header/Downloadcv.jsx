import React from "react";
import CircularText from "@/components/CircularText";
import { cn } from "@/lib/utils";

export default function Downloadcv({ className }) {
  return (
    <div
      className={cn(
        "max-w-max bg-background-secondary/15 backdrop-blur-[5px] rounded-full ring-1 ring-border-primary",
        className,
      )}
    >
      <a href="#">
        <CircularText
          text="• Download CV • Download CV"
          className="size-48"
          radius={36}
          fontSize={12}
          duration={25}
        >
          <svg
            width={28}
            height={28}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.8984 0C25.2553 0.000127267 26.3594 1.10407 26.3594 2.46094V17.4766C26.1027 17.3855 25.8265 17.336 25.5391 17.3359H24.1299C22.7729 17.3359 21.6689 18.4399 21.6689 19.7969V22.1221C21.052 22.3373 20.5414 22.794 20.2549 23.417C19.8485 24.3006 19.9891 25.3084 20.6221 26.0469L22.2959 28H7.49219C6.13532 28 5.03139 26.8959 5.03125 25.5391V17.8828H19.1406C20.9498 17.8827 22.4218 16.4107 22.4219 14.6016V6.94531C22.4219 5.13611 20.9498 3.66416 19.1406 3.66406H5.03125V2.46094C5.03125 1.10399 6.13524 0 7.49219 0H23.8984ZM25.5391 18.9766C25.992 18.9767 26.3594 19.3439 26.3594 19.7969V23.625H27.1777C27.8784 23.625 28.2565 24.4464 27.8008 24.9785L25.457 27.7129C25.1296 28.0948 24.5383 28.0948 24.2109 27.7129L21.8672 24.9785C21.4117 24.4464 21.7897 23.6251 22.4902 23.625H23.3096V19.7969C23.3096 19.3438 23.6769 18.9766 24.1299 18.9766H25.5391ZM19.1406 5.30469C20.0466 5.30479 20.7812 6.03927 20.7812 6.94531V14.6016C20.7812 15.5075 20.0466 16.2421 19.1406 16.2422H1.64062C0.734565 16.2422 7.79652e-05 15.5076 0 14.6016V6.94531C0 6.0392 0.734517 5.30469 1.64062 5.30469H19.1406Z"
              fill="url(#paint0_linear_1199_702)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1199_702"
                x1="22.2723"
                y1="32.4543"
                x2="6.36317"
                y2="2.54562"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#B10083" />
                <stop offset={1} stopColor="#E80567" />
              </linearGradient>
            </defs>
          </svg>
        </CircularText>
      </a>
    </div>
  );
}
