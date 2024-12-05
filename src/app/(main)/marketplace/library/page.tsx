"use client";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

type LibraryItem = {
  id: number;
  src: string;
  title: string;
  pages: string[];
};

const Library = () => {
  const [modalContent, setModalContent] = useState<LibraryItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right

  const libraryItems = [
    {
      id: 1,
      src: "/assets/home/blaise.png",
      title: "Blaise: and the xion's secret",
      pages: [
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
      ],
    },
    {
      id: 2,
      src: "/assets/home/blaise.png",
      title: "Blaise: and the xion's...",
      pages: [
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
      ],
    },
    {
      id: 3,
      src: "/assets/home/blaise.png",
      title: "Blaise: and the xion's...",
      pages: [
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
      ],
    },
    {
      id: 4,
      src: "/assets/home/blaise.png",
      title: "Blaise: and the xion's...",
      pages: [
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
      ],
    },
    {
      id: 5,
      src: "/assets/home/blaise.png",
      title: "Blaise: and the xion's...",
      pages: [
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
      ],
    },
    {
      id: 6,
      src: "/assets/home/blaise.png",
      title: "Blaise: and the xion's...",
      pages: [
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
        "/assets/home/view.png",
      ],
    },
  ];

  const openModal = (item: LibraryItem) => {
    setModalContent(item);
    setCurrentPageIndex(0); // Reset to the first page
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  const handleNext = () => {
    if (modalContent) {
      setDirection(1);
      setCurrentPageIndex(
        (prevIndex) => (prevIndex + 1) % modalContent.pages.length
      );
    }
  };

  const handlePrev = () => {
    if (modalContent) {
      setDirection(-1);
      setCurrentPageIndex(
        (prevIndex) =>
          (prevIndex - 1 + modalContent.pages.length) %
          modalContent.pages.length
      );
    }
  };

  return (
    <div className="pt-8 p-8 overflow-y-auto w-full mt-12 md:mt-0 h-screen">
      <div>
        <p className="font-semibold text-2xl mb-8">Your Library</p>
      </div>
      <div className="w-full overflow-x-scroll overflow-y-scroll h-fit">
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-8 h-fit overflow-y-scroll">
          {libraryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openModal(item)}
              className="cursor-pointer"
            >
              <img
                src={item.src}
                className="w-full h-auto object-cover"
                alt={item.title}
              />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && modalContent && (
        <div
          className="fixed inset-0 bg-[#161616df] backdrop-blur-lg w-screen h-screen overflow-y-hidden flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="rounded-lg p-6 w-screen  md:max-w-lg h-screen flex flex-col justify-center items-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <div className="flex justify-between items-center w-full mb-4">
              <h2 className="text-xl font-bold">{modalContent.title}</h2>
              <button onClick={closeModal} className="rounded">
                <IconX className="text-white font-bold" />
              </button>
            </div>

            <div className="relative w-[300px] md:w-[350px] h-auto flex items-center justify-center">
              {/* Left Arrow */}
              <button
                className="absolute  left-2 md:-left-14 z-10 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={handlePrev}
              >
                <IconChevronLeft className="text-white" />
              </button>

              {/* Image Slider */}
              <div className="relative w-[280px] md:w-[350px] h-[450px] lg:h-[550px] flex items-center overflow-hidden">
                <AnimatePresence initial={false} custom={direction}>
                  <motion.img
                    key={currentPageIndex}
                    src={modalContent.pages[currentPageIndex]}
                    alt={`Page ${currentPageIndex + 1}`}
                    custom={direction}
                    initial={{
                      x: direction === 1 ? "100%" : "-100%",
                      opacity: 0,
                    }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
                    transition={{
                      x: { type: "spring", stiffness: 300, damping: 30 },
                      opacity: { duration: 0.3 },
                    }}
                    className="absolute w-full h-full object-cover rounded"
                  />
                </AnimatePresence>
              </div>

              {/* Right Arrow */}
              <button
                className="absolute right-2 md:-right-14 z-10 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={handleNext}
              >
                <IconChevronRight className="text-white" />
              </button>
            </div>

            {/* Progress Bar and Order Indicator */}
            <div className="w-full mt-4 flex flex-col items-center">
              <div className="w-full bg-[#D9D9D9] bg-opacity-20 h-1 rounded-full relative">
                <div
                  className="bg-[#D9D9D9] h-1 rounded-full"
                  style={{
                    width: `${
                      ((currentPageIndex + 1) / modalContent.pages.length) * 100
                    }%`,
                  }}
                ></div>
                <div
                  className="absolute top-0 left-0 h-3 w-3 bg-[#D9D9D9] rounded-full transform -translate-y-1/2"
                  style={{
                    left: `${
                      ((currentPageIndex + 1) / modalContent.pages.length) * 100
                    }%`,
                  }}
                ></div>
              </div>
              <p className="mt-2 text-sm text-white">
                {currentPageIndex + 1} of {modalContent.pages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Library;
