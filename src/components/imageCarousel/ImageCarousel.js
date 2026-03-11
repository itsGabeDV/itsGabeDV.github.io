import React, { useEffect, useRef, useState } from "react";
import "./ImageCarousel.scss";

export default function ImageCarousel({ images = [], interval = 4500, altBase = "project" }) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);

  // if only 1 image -> just show it (no timers)
  const count = images.length || 0;
  useEffect(() => {
    if (count <= 1) return;

    // start auto-advance
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, interval);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [count, interval]);

  if (count === 0) return null;

  return (
    <div className="image-carousel" aria-hidden="false">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`${altBase}-${i}`}
          className={`carousel-image ${i === index ? "visible" : ""}`}
          loading="lazy"
        />
      ))}

      {/* optional dots */}
      {count > 1 && (
        <div className="carousel-dots">
          {images.map((_, i) => (
            <button
              key={i}
              aria-label={`go to image ${i + 1}`}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      )}
    </div>
  );
}