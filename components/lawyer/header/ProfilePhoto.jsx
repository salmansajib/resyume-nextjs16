"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ProfilePhoto({ heroData }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative max-w-max after:absolute after:content-[''] after:-top-2 after:-left-2 after:w-full after:h-full after:border-2 after:border-primary after:rounded-xl">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-900/70 backdrop-blur-lg rounded-xl"></div>
      )}
      <Image
        src={heroData.photo}
        alt="profile image"
        priority
        loading="eager"
        width={500}
        height={500}
        className="w-[393px] h-auto relative z-10 overflow-hidden rounded-xl"
        onLoadingComplete={handleLoadingComplete}
      />
    </div>
  );
}
