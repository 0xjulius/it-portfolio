// src/components/VantaBackground.jsx

import { useEffect, useRef } from "react";
import * as THREE from "three";
import FOG from "vanta/dist/vanta.fog.min";

export default function VantaBackground() {
  const containerRef = useRef(null);
  const effectRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || effectRef.current) return;

    effectRef.current = FOG({
      el: containerRef.current,
      THREE,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      minHeight: 200,
      minWidth: 200,

      scale: 1,
      scaleMobile: 1,

      highlightColor: 0xffffff,
      midtoneColor: 0xd9d7ff,
      lowlightColor: 0xbecbff,
      baseColor: 0xf5f6ff,
      blurFactor: 0.5,
      speed: 0.6,
      zoom: 0.7,
    });

    return () => {
      effectRef.current?.destroy();
      effectRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-50"
      aria-hidden="true"
    />
  );
}
