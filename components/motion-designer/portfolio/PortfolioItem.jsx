import React from "react";
import Image from "next/image";

export default function PortfolioItem({ item, onClick }) {
  const VIDEO_TYPES = ["video", "youtube", "vimeo"];

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
            width={1000}
            height={1000}
            className="w-[800px] h-[500px] object-cover"
          />

          {/* subtle overlay content on hover on type image */}
          {item.type === "image" && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-150 ease-in-out flex items-end justify-center pb-20 px-2">
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
                  <h3 className="text-[20px] font-medium text-text-primary leading-none">
                    {item.title}
                  </h3>
                </div>
                <p className="font-normal text-text-primary max-w-[30ch] mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          )}

          {VIDEO_TYPES.includes(item.type) && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src="/assets/motion-designer/icons/video-play-icon.svg"
                alt="video play icon"
                width={100}
                height={100}
                className="w-[90px] h-auto object-cover"
              />
            </div>
          )}
        </div>
      </button>
    </div>
  );
}
