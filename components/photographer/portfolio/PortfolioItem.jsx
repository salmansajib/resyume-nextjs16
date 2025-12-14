"use client";
import React from "react";
import Image from "next/image";

export default function PortfolioItem({ item, onClick }) {
  return (
    <div className="relative group">
      <button
        onClick={onClick}
        className="block w-full h-full focus:outline-none cursor-pointer"
        aria-label={`Open ${item.title}`}
      >
        <div className="relative overflow-hidden aspect-4/5">
          <Image
            src={item.src}
            alt={item.alt}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />

          {/* subtle overlay content on hover */}
          {item.type === "image" && (
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors duration-150 ease-in-out flex items-end justify-center pb-30">
              <div className="opacity-0 group-hover:opacity-100 space-y-3 transition-all duration-150">
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/photographer/icons/portfolio-icon.svg"
                    alt="open icon"
                    width={50}
                    height={50}
                    className="w-[33px] h-auto"
                  />
                </div>

                <div className="relative max-w-max mx-auto px-6 py-2 mt-10">
                  <h3 className="text-xl font-medium">{item.title}</h3>

                  <div
                    className="absolute top-0 left-0 w-[50%] h-px bg-primary"
                    aria-hidden="true"
                  />
                  {/* left border */}
                  <div
                    className="absolute top-1/2 left-0 w-px h-full bg-primary -translate-y-1/2"
                    aria-hidden="true"
                  />
                  {/* bottom border */}
                  <div
                    className="absolute bottom-0 left-0 w-[50%] h-px bg-primary"
                    aria-hidden="true"
                  />
                </div>
                <p className="text-base font-normal max-w-[30ch] mx-auto">
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
