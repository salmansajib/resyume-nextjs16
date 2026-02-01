"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function ProfilePhoto({ data, className }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Lock/unlock body scroll
  useEffect(() => {
    if (isVideoOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isVideoOpen]);

  const openVideo = useCallback(() => setIsVideoOpen(true), []);
  const closeVideo = useCallback(() => setIsVideoOpen(false), []);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeVideo();
    };
    if (isVideoOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isVideoOpen, closeVideo]);

  return (
    <div className={cn("", className)}>
      <div className="relative">
        <Image
          src={data.hero.photo}
          alt="profile-photo"
          width={700}
          height={700}
          priority
          className="w-[530px] h-[650px] object-cover rounded-2xl overflow-hidden relative z-10"
        />
        {/* decorative rounded rectangle */}
        <div className="absolute w-full h-[70%] -top-2 -left-2 md:-top-4 md:-left-4 border border-primary rounded-2xl"></div>
        {/* video play button */}
        <button
          onClick={openVideo}
          className="absolute -bottom-5 -left-5 z-20 size-[170px] bg-background-primary rounded-full flex items-center justify-center cursor-pointer"
        >
          <div className="size-[130px] bg-[#F5F5F5] rounded-full flex items-center justify-center">
            <div className="size-[88px] bg-[#E5E5E5] rounded-full flex items-center justify-center">
              <Image
                src="/assets/interior-designer/icons/play-button-icon.svg"
                alt="check my work video play button"
                width={30}
                height={30}
                priority
                className="w-[26px] h-auto object-cover"
              />
            </div>
          </div>
        </button>
      </div>

      {/* ── Video Overlay Modal ── */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-1000 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={closeVideo} // close when clicking the backdrop
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 z-10 text-white bg-black/40 hover:bg-black/70 transition-colors rounded-full w-10 h-10 flex items-center justify-center text-2xl leading-none"
            onClick={closeVideo}
          >
            ×
          </button>

          {/* YouTube iframe — stops propagation so clicking inside doesn't close */}
          <div
            className="w-full max-w-4xl mx-4 aspect-video rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/iUtnZpzkbG8?autoplay=1&rel=0"
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}
    </div>
  );
}
