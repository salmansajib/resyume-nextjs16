import Image from "next/image";
import React from "react";

export default function ServiceCard({ item }) {
  return (
    <article className="w-full max-w-[357px] h-[390px] border border-text-secondary/40 p-10 bg-[url('/assets/architect/images/services/services-bg.png')] bg-no-repeat bg-bottom bg-contain group relative hover:border-primary transition-colors duration-150">
      <h4 className="relative text-2xl font-medium font-lora text-primary">
        {item.name}
        <div className="absolute -bottom-1.5 left-0 w-[20%] h-px bg-primary"></div>
      </h4>
      <p className="max-w-[25ch] mt-4">{item.description}</p>

      <div className="size-[110px] bg-background-secondary border border-text-secondary/40 flex items-center justify-center absolute -right-2 md:-right-5 bottom-5 group-hover:border-primary transition-colors duration-150">
        <Image
          src={item.image_url}
          alt={`${item.name} icon`}
          width={100}
          height={100}
          className="w-[70px] h-auto"
        />
      </div>
    </article>
  );
}
