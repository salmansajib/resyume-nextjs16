"use client";
import LightboxPortal from "./LightboxPortal";
import LightboxContent from "./LightboxContent";

export default function Lightbox(props) {
  return (
    <LightboxPortal>
      <LightboxContent {...props} />
    </LightboxPortal>
  );
}
