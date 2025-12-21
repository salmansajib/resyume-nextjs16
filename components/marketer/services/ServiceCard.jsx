import React from "react";
import { serviceIcons } from "./ServiceIcons";
import { motion } from "motion/react";
import GridBackground from "../GridBackground";

export default function ServiceCard({ service, fadeInUp }) {
  return (
    <motion.div variants={fadeInUp}>
      <GridBackground
        gridSize="65px"
        gridColor="rgba(201, 201, 201, 0.07)"
        className=""
      >
        <article
          aria-labelledby={`service-${service.id}`}
          className="bg-background-neutral/23 border border-primary/25 px-10 py-12 text-text-secondary ring-1 ring-[#b1b1b1]/50 ring-offset-13 ring-offset-background-primary shadow-[inset_1px_1px_16px_0px_rgba(169,241,113,0.15)] hover:ring-primary hover:text-text-primary transition-all duration-150 rounded-xs"
        >
          <div aria-hidden="true">{serviceIcons[service.id]}</div>
          <header className="mt-4">
            <h4
              className="text-2xl font-medium text-primary sm:truncate"
              title={service.title}
            >
              {service.title}
            </h4>
          </header>
          <ul role="list" className="list-disc list-inside mt-6 space-y-4">
            {service.description.map((item, index) => (
              <li
                key={index}
                className="font-rubik text-base sm:truncate"
                title={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </article>
      </GridBackground>
    </motion.div>
  );
}
