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
        <div className="relative overflow-hidden">
          <Image
            src={item.src}
            alt={`${item.title} image`}
            width={500}
            height={500}
            className="w-full h-auto aspect-4/4 md:aspect-4/5 object-cover rounded-lg overflow-hidden"
          />

          {/* subtle overlay content on hover */}
          <div className="absolute inset-0 bg-black/30 md:group-hover:bg-black/60 transition-colors duration-150 ease-in-out flex items-center justify-center gap-10 rounded-lg overflow-hidden p-2">
            <div className="md:opacity-0 md:group-hover:opacity-100 transition-all duration-150 space-y-2">
              <div className="flex items-center justify-center">
                <Image
                  src={item.icon}
                  alt="open icon"
                  width={70}
                  height={70}
                  className="w-10 h-auto"
                />
              </div>

              <div className="relative max-w-max mx-auto px-6 py-2">
                <h3 className="text-xl font-semibold font-poppins text-background-primary leading-none">
                  {item.title}
                </h3>
              </div>
              <p className="text-background-primary max-w-[30ch] mx-auto">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}
