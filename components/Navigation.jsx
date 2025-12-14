"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { navItems } from "@/data/navigationData";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navigation({
  isMenuOpen,
  setIsMenuOpen,
  bgColor = "bg-gray-900",
  textColor = "text-white",
  logoSrc = "/assets/uiuxdesigner/logos/rezyume-logo-footer.svg",
}) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className={cn(
            "fixed top-0 right-0 z-50 w-full max-w-[450px] font-poppins p-5 overflow-y-auto h-screen scroll-smooth",
            bgColor,
            textColor,
          )}
        >
          {/* logo and close icon */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={cn(
              "flex items-center justify-between gap-5 pb-5 border-b border-gray-700",
              textColor,
            )}
          >
            <Image
              width={300}
              height={300}
              src={logoSrc} // Use the prop here
              alt="logo"
              className="w-40 h-auto"
            />

            <button
              className={cn("cursor-pointer hover:text-red-300", textColor)}
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </motion.div>

          {/* nav items */}
          <ul className={cn("py-5 space-y-1", textColor)}>
            {navItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.05 + index * 0.05,
                  type: "spring",
                  stiffness: 400,
                  damping: 24,
                }}
                className={cn("text-base font-normal w-full", textColor)}
              >
                <Link
                  href={item.link}
                  className={cn(
                    "w-full block p-2 hover:bg-gray-400/10 rounded-sm",
                    textColor,
                  )}
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
