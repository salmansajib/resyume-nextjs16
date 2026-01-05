import React from "react";
import Image from "next/image";

export default function PortfolioItem({ item, onClick }) {
  return (
    <div className="group">
      <button
        onClick={onClick}
        className="block w-full h-full cursor-pointer"
        aria-label={`Open ${item.title}`}
      >
        <div className="w-full h-full relative overflow-hidden">
          <Image
            src={item.src}
            alt={`${item.title} image`}
            width={500}
            height={500}
            className="w-full h-[450px] object-cover"
          />

          {/* subtle overlay content on hover */}
          {item.type === "image" && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/80 transition-colors duration-150 ease-in-out flex items-end justify-center pb-20">
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
                  <h3 className="text-base font-semibold text-primary uppercase leading-none">
                    {item.title}
                  </h3>
                </div>
                <p className="text-base font-normal text-text-primary max-w-[30ch] mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          )}

          {/* video play icon badge if video */}
          {item.type === "video" && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/assets/photographer/icons/video-play-icon.svg"
                alt="video play icon"
                width={50}
                height={50}
                className="w-10 h-auto"
              />
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
