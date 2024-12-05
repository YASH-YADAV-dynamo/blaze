"use client";
import React, { useState, useEffect } from "react";

const ImageSlider: React.FC = () => {
  const [count, setCount] = useState(0);
  const [go, setGo] = useState(false);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  const images = [
    "/assets/home/sliderimg.png",
    "/assets/home/sliderimg.png",
    "/assets/home/sliderimg.png",
    "/assets/home/sliderimg.png",
  ];

//   const handleArrowClick = (direction: number) => {
//     if (direction === 0) {
//       setCount((prevCount) => {
//         const newCount = prevCount + 1 > images.length - 1 ? 0 : prevCount + 1;
//         return newCount;
//       });
//     } else {
//       setCount((prevCount) => {
//         const newCount = prevCount - 1 < 0 ? images.length - 1 : prevCount - 1;
//         return newCount;
//       });
//     }
//   };

  const handleButtonClick = (index: number) => {
    setCount(index);
  };

  const startAutoSlide = () => {
    const newTimer = setInterval(() => {
      if (!go) {
        setCount((prevCount) => {
          const newCount = prevCount + 1 > images.length - 1 ? 0 : prevCount + 1;
          return newCount;
        });
      } else {
        setCount((prevCount) => {
          const newCount = prevCount - 1 < 0 ? images.length - 1 : prevCount - 1;
          return newCount;
        });
      }
    }, 3000);

    setTimer(newTimer);
  };

  const stopAutoSlide = () => {
    if (timer) {
      clearInterval(timer);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [go]);

  useEffect(() => {
    if (count >= images.length - 1) {
      setGo(true);
    } else if (count <= 0) {
      setGo(false);
    }
  }, [count]);

  return (
    <div className="relative w-full py-4">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {/* <div className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 flex justify-between w-full">
          <span
            className="text-4xl text-gray-500 cursor-pointer hover:text-aqua"
            onClick={() => handleArrowClick(1)}
          >
            &lt;
          </span>
          <span
            className="text-4xl text-gray-500 cursor-pointer hover:text-aqua"
            onClick={() => handleArrowClick(0)}
          >
            &gt;
          </span>
        </div> */}
        <ul
          className="flex transition-transform duration-1000 gap-8"
          style={{ transform: `translateX(${-400 * count}px)` }}
        >
          {images.map((src, index) => (
            <li key={index} className="flex-shrink-0">
              <img src={src} alt={`Slide ${index}`} className={`w-full rounded-md h-[290px]
              ${
                count == index ? "" : "opacity-50"
              }
              `} />
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex justify-start gap-2 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => handleButtonClick(index)}
            className={`h-2.5 rounded-full cursor-pointer hover:bg-aqua ${
              count == index ? "bg-white w-16" : "w-2.5 bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
