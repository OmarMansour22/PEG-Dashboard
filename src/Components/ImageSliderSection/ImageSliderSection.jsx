import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const images = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3",
];

export default function ImageSliderSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-800 shadow-lg">
      {/* Image */}
      <img
        src={images[currentIndex]}
        alt={`slide-${currentIndex}`}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-2 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-700/70 p-2 rounded-full transition"
      >
        <FaChevronLeft className="text-white w-4 h-4" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 bg-slate-900/50 hover:bg-slate-700/70 p-2 rounded-full transition"
      >
        <FaChevronRight className="text-white w-4 h-4" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2.5 h-2.5 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-white" : "bg-gray-400/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
