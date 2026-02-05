"use client";
import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function LightboxPortal({ children }) {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = original;
    };
  }, []);

  return createPortal(children, document.body);
}
