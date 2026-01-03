"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function ProfilePhote({ hero }) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full max-w-[550px]">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-gray-200/70 backdrop-blur-lg"></div>
      )}
      <Image
        src={hero.photo}
        alt="Profile Picture"
        width={700}
        height={700}
        priority
        loading="eager"
        className={`w-full max-w-[550px] h-auto object-cover transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={handleLoadingComplete}
      />
    </div>
  );
}
