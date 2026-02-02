import React from "react";
import Image from "next/image";

export default function PortfolioItem({ item, onClick }) {
  return (
    <div className="group">
      <button
        onClick={onClick}
        className="block w-full h-full cursor-pointer rounded-lg overflow-hidden"
        aria-label={`Open ${item.title}`}
      >
        <div className="relative overflow-hidden">
          <Image
            src={item.src}
            alt={`${item.title} image`}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />

          {/* subtle overlay content on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-150 ease-in-out flex items-end justify-center pb-20">
            <div className="opacity-0 group-hover:opacity-100 transition-all duration-150 space-y-2">
              <div className="flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt="open icon"
                  width={70}
                  height={70}
                  className="w-[52px] h-auto"
                />
              </div>

              <div className="relative max-w-max mx-auto px-6 py-2">
                <h3 className="text-[20px] font-playfairDisplay font-medium text-background-secondary leading-none">
                  {item.title}
                </h3>
              </div>
              <p className="font-normal text-background-secondary max-w-[30ch] mx-auto">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
