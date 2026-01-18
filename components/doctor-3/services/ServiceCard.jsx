import React from "react";
import Image from "next/image";

export default function ServiceCard({ item, isActive, onHover, onLeave }) {
  return (
    <li>
      <article onMouseEnter={onHover} onFocus={onHover} onMouseLeave={onLeave}>
        {isActive ? (
          <div className="w-full h-full min-h-[450px] flex flex-col items-center gap-5 bg-background-secondary/10 border border-background-secondary rounded-3xl p-7 pl-12">
            <div className="size-[70px] rounded-full bg-background-secondary/10 border border-background-secondary flex items-center justify-center">
              <Image
                src={item.icon}
                alt={`${item.nam} icon`}
                width={50}
                height={50}
                className="w-[34px] h-auto object-cover"
              />
            </div>
            <h3 className="text-2xl font-medium text-primary uppercase max-w-[12ch]">
              {item.name}
            </h3>
            <ul className="list-disc marker:text-primary text-lg text-text-secondary space-y-2 max-w-[25ch]">
              {item.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="w-full h-full min-h-[450px] flex flex-col items-center gap-8 bg-background-secondary/10 border border-background-secondary rounded-3xl p-3">
            <div className="size-[70px] rounded-full bg-background-secondary/10 border border-background-secondary flex items-center justify-center">
              <Image
                src={item.icon}
                alt={`${item.nam} icon`}
                width={50}
                height={50}
                className="w-[34px] h-auto object-cover"
              />
            </div>
            <h3
              className="rotate-180 text-2xl font-medium text-primary uppercase"
              style={{
                writingMode: "vertical-lr",
              }}
            >
              {item.name}
            </h3>
          </div>
        )}
      </article>
    </li>
  );
}
