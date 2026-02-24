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
        <div className="relative w-full h-full overflow-hidden">
          <Image
            src={item.src}
            alt={`${item.title} image`}
            width={500}
            height={500}
            className="w-full h-auto object-cover"
          />

          {/* IMAGE TYPE OVERLAY */}
          {item.type === "image" && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-150 ease-in-out">
              <div className="h-full flex flex-col p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                {/* Bottom Content */}
                <div className="mt-auto text-left space-y-3">
                  <h3 className="text-2xl font-medium text-background-primary capitalize leading-none">
                    {item.title}
                  </h3>
                  <p className="text-base font-normal text-background-primary max-w-[40ch]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* VIDEO PLAY ICON */}
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
