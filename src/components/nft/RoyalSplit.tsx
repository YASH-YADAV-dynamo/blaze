"use client";
import { IconX, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import MyApp from "@/components/ui/UploadButton";

type LibraryItem = {
    id: number;
    src: string;
    title: string;
    pages: string[];
};



type CardProps = {
    imageSrc: string;
    title: string;
    isLive: boolean;
    currency: string;
    amount: number;
    progress: number;
    copyright: string;
    walletId: string;
};


const Library = () => {
    const [modalContent, setModalContent] = useState<LibraryItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentPageIndex, setCurrentPageIndex] = useState(0);
    const [direction, setDirection] = useState(0); // -1 for left, 1 for right

    const cards = [
        {
            imageSrc: "/front.png",
            title: "Blaise: and the xion's secret",
            isLive: true,
            currency: "XION",
            amount: 0.52,
            progress: 15,
            copyright: "© Copyright",
            walletId: "B7kP4tX9LmQ2rN3ZX9Lm2Qn4Rp8Ty7ZaMk3WtV6JqNvPl",
        },
        {
            imageSrc: "/front.png",
            title: "Blaise: and the xion's secret",
            isLive: true,
            currency: "XION",
            amount: 0.52,
            progress: 15,
            copyright: "© Copyright",
            walletId: "B7kP4tX9LmQ2rN3ZX9Lm2Qn4Rp8Ty7ZaMk3WtV6JqNvPl",
        },
        {
            imageSrc: "/front.png",
            title: "Blaise: and the xion's secret",
            isLive: true,
            currency: "XION",
            amount: 0.52,
            progress: 15,
            copyright: "© Copyright",
            walletId: "B7kP4tX9LmQ2rN3ZX9Lm2Qn4Rp8Ty7ZaMk3WtV6JqNvPl",
        },
        {
            imageSrc: "/front.png",
            title: "Blaise: and the xion's secret",
            isLive: true,
            currency: "XION",
            amount: 0.52,
            progress: 15,
            copyright: "© Copyright",
            walletId: "B7kP4tX9LmQ2rN3ZX9Lm2Qn4Rp8Ty7ZaMk3WtV6JqNvPl",
        },
        {
            imageSrc: "/front.png",
            title: "Blaise: and the xion's secret",
            isLive: true,
            currency: "XION",
            amount: 0.52,
            progress: 15,
            copyright: "© Copyright",
            walletId: "B7kP4tX9LmQ2rN3ZX9Lm2Qn4Rp8Ty7ZaMk3WtV6JqNvPl",
        },
        {
            imageSrc: "/front.png",
            title: "Blaise: and the xion's secret",
            isLive: true,
            currency: "XION",
            amount: 0.52,
            progress: 15,
            copyright: "© Copyright",
            walletId: "B7kP4tX9LmQ2rN3ZX9Lm2Qn4Rp8Ty7ZaMk3WtV6JqNvPl",
        },
        {
            imageSrc: "/front.png",
            title: "Blaise: and the xion's secret",
            isLive: true,
            currency: "XION",
            amount: 0.52,
            progress: 15,
            copyright: "© Copyright",
            walletId: "B7kP4tX9LmQ2rN3ZX9Lm2Qn4Rp8Ty7ZaMk3WtV6JqNvPl",
        },
        {
            imageSrc: "/front.png",
            title: "Blaise: and the xion's secret",
            isLive: true,
            currency: "XION",
            amount: 0.52,
            progress: 15,
            copyright: "© Copyright",
            walletId: "B7kP4tX9LmQ2rN3ZX9Lm2Qn4Rp8Ty7ZaMk3WtV6JqNvPl",
        },
        {
            imageSrc: "/front.png",
            title: "Blaise: and the xion's secret",
            isLive: true,
            currency: "XION",
            amount: 0.52,
            progress: 15,
            copyright: "© Copyright",
            walletId: "B7kP4tX9LmQ2rN3ZX9Lm2Qn4Rp8Ty7ZaMk3WtV6JqNvPl",
        },


    ];

    const openModal = (item: LibraryItem) => {
        setModalContent(item);
        setCurrentPageIndex(0);
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

    const RoyaltySplit = () => {
        const [splits, setSplits] = useState([{ id: 1, share: "", walletAddress: "" }]);

        const addSplit = () => {
            // Ensure total percentage doesn't exceed 100
            const currentTotal = splits.reduce((total, split) => total + Number(split.share), 0);
            if (currentTotal >= 100) {
                alert("Total royalty split cannot exceed 100%");
                return;
            }

            setSplits([...splits, { id: Date.now(), share: "", walletAddress: "" }]);
        };

        const handleInputChange = (id: number, field: string, value: string) => {
            setSplits(
                splits.map((split) =>
                    split.id === id ? { ...split, [field]: value } : split
                )
            );
        };

        const removeSplit = (id: number) => {
            setSplits(splits.filter((split) => split.id !== id));
        };


        return (

            <div className="pt-3 pr-20 p-4 h-fit w-full mt-2 md:mt-0">
                <div className="w-full h-fit">
                    <div className="container mx-auto px-4 py-8 lg:flex lg:gap-4">
                        <div className="relative lg:w-1/2 flex items-start justify-center">

                            <div className="relative w-2/3">
                                <img src="/add.png" alt="Collectible item" className="w-full" />
                                <div className="relative w-2/3 md:bg-none bg-gradient-to-r from-[#FA8906] to-[#FA8906]/50"></div>

                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="flex items-center justify-center text-5xl font-bold text-white bg-opacity-30 bg-black backdrop-blur-md rounded-full w-16 h-16">
                                        <MyApp triggerUpload={() => {
                                            console.log("Upload triggered");
                                        }} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:w-1/2 mt-8 lg:mt-0">
                            <div className="mb-4">
                                <label htmlFor="title" className="block font-medium text-sm mb-1">Title</label>
                                <input
                                    type="text-sm"
                                    id="title"
                                    placeholder="Add collectible title"
                                    className="w-full px-3 py-2 border border-[#EDF1F31A] border-opacity-10 rounded-md bg-[#161616] placeholder-gray-500" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="description" className="block font-medium  text-sm mb-1">Description</label>
                                <input type="text-sm" id="description" placeholder="Add collectible description" className="w-full px-3 py-2 border border-gray-700 bg-[#161616] rounded-md placeholder-gray-500" />
                            </div>
                            <div className="mb-4 relative">
                                <label htmlFor="launch-date" className="block font-medium mb-1 text-sm">
                                    Launch date
                                </label>
                                <div className="relative">
                                    <input
                                        type="date"
                                        id="date"
                                        className="w-full px-3 py-2 text-sm border border-[#EDF1F31A] border-opacity-10 bg-[#161616] text-white rounded-md pr-10 focus:outline-none peer"
                                    />
                                    <img
                                        src="/calendar.png"
                                        alt="Calendar Icon"
                                        className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer w-5 h-5"
                                        onClick={() => (document.getElementById('date') as HTMLInputElement)?.showPicker?.()}
                                    />
                                </div>

                            </div>
                            <div className="mb-4">
                                <div className="flex items-center space-x-2 sm:space-x-4">
                                    <div className="flex-grow">
                                        <label htmlFor="copyright" className="block font-medium text-sm">
                                            Add copyright
                                        </label>
                                        <p className="text-gray-500 text-xs">
                                            Protect your NFT by adding a copyright! Safeguard
                                            <br className="sm:hidden" /> your digital assets and ensure
                                            <br className="sm:hidden" /> ownership rights are secured.
                                        </p>
                                    </div>
                                    <div className="relative inline-block w-10 h-4 sm:w-14 sm:h-6 md:w-14 md:h-6">
                                        <input
                                            type="checkbox"
                                            id="copyright"
                                            className="peer absolute w-full h-full opacity-0 cursor-pointer z-10"
                                        />
                                        <div
                                            className="absolute inset-0 bg-gray-400 rounded-full transition-colors duration-200 peer-checked:bg-[#FE7B00]"
                                        ></div>
                                        <div
                                            className="absolute left-0.5 top-0.5 w-3 h-3 sm:w-5 sm:h-5 md:w-5 md:h-5 
               bg-white rounded-full transition-transform duration-200
               peer-checked:translate-x-[calc(100%-0.08px)] 
               sm:peer-checked:translate-x-[calc(100%-0.5rem)] 
               md:peer-checked:translate-x-[calc(100%-0.5rem)]"
                                        ></div>
                                    </div>

                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="mint-cost" className="block font-medium mb-1 text-sm">Mint cost</label>
                                <div className="flex items-center gap-2">

                                    <input
                                        type="number"
                                        id="mint-cost"
                                        placeholder="0"
                                        className="w-1/2 px-3 py-2 border border-[#EDF1F31A] border-opacity-10 bg-[#161616] text-white text-sm rounded-md"
                                    />


                                    <div className="relative w-1/2 flex items-center px-3 py-2 border border-[#EDF1F31A] border-opacity-10 bg-[#161616] text-white rounded-md">
                                        <img src="/Xion.png" alt="Xion Logo" className="w-5 h-5 mr-2" />
                                        <span className="text-white text-sm">Xion</span>

                                        <select
                                            id="currency"
                                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer text-sm bg-[#161616] text-white appearance-none focus:outline-none"
                                        >
                                            <option value="ethereum" className="flex items-center bg-[#161616] hover:bg-[#FA8906] p-5">
                                                <div className="w-4 h-4 mr-2" />
                                                ETH
                                            </option>
                                            <option value="solana" className="flex items-center bg-[#161616] hover:bg-[#FA8906] p-5">
                                                <div className="w-4 h-4 mr-2" />
                                                SOL
                                            </option>
                                        </select>

                                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <svg
                                                className="w-5 h-5 text-gray-500 font-bold"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M19 9l-7 7-7-7"
                                                ></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="royalty-split" className="block font-medium mb-1 text-sm">
                                    Royalty split
                                </label>

                                {splits.map((split, index) => (
                                    <div key={split.id} className="grid grid-cols-3 gap-2 items-center mb-2">
                                        <div className="relative">
                                            <input
                                                type="number"
                                                placeholder="Share"
                                                value={split.share}
                                                onChange={(e) =>
                                                    handleInputChange(split.id, "share", e.target.value)
                                                }
                                                max="100"
                                                min="0"
                                                className="w-full px-2 py-2 border text-sm border-[#EDF1F31A] border-opacity-10 rounded-md pr-8 bg-[#161616]"
                                            />
                                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm">
                                                %
                                            </span>
                                        </div>

                                        <input
                                            type="text"
                                            placeholder="Wallet address"
                                            value={split.walletAddress}
                                            onChange={(e) =>
                                                handleInputChange(split.id, "walletAddress", e.target.value)
                                            }
                                            className="col-span-2 w-full px-3 py-2 text-sm border border-[#EDF1F31A] border-opacity-10 rounded-md bg-[#161616]"
                                        />
                                    </div>
                                ))}

                                <div className="flex flex-col items-center justify-center h-full mt-3 w-full border border-[#EDF1F31A] border-opacity-10 rounded-md">
                                    <button
                                        onClick={() => {
                                            const currentTotal = splits.reduce((total, split) => total + Number(split.share || 0), 0);
                                            if (currentTotal >= 100) {
                                                alert("Total royalty split cannot exceed 100%");
                                                return;
                                            }
                                            setSplits([...splits, {
                                                id: Date.now(),
                                                share: "",
                                                walletAddress: ""
                                            }]);
                                        }}
                                        className="bg-[#212121] text-white font-bold py-2 px-4 rounded w-full text-sm"
                                    >
                                        + Add Split
                                    </button>
                                </div>

                                <div className="mt-4 flex">
                                    <button
                                        onClick={() => {
                                            const totalPercentage = splits.reduce((total, split) => total + Number(split.share || 0), 0);

                                            if (totalPercentage !== 100) {
                                                alert("Total royalty split must equal 100%");
                                                return;
                                            }

                                            const invalidAddresses = splits.some(split => !split.walletAddress.trim());
                                            if (invalidAddresses) {
                                                alert("Please fill in all wallet addresses");
                                                return;
                                            }

                                            // Proceed with creation logic
                                            console.log("Creating splits:", splits);
                                        }}
                                        className="bg-[#212121] border border-[#EDF1F31A] border-opacity-10 text-white font-bold py-2 px-4 rounded w-1/2 ml-auto mt-10 text-sm"
                                    >
                                        Create
                                    </button>
                                </div>
                            </div>
                        </div>

                        {isModalOpen && modalContent && (
                            <div
                                className="fixed inset-0 bg-[#161616df] backdrop-blur-lg w-screen h-screen overflow-y-hidden flex items-center justify-center"
                                onClick={closeModal}
                            >
                                <div
                                    className="rounded-lg p-6 w-screen  md:max-w-lg h-screen flex flex-col justify-center items-center"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <div className="flex justify-between items-center w-full mb-4">
                                        <h2 className="text-xl font-bold">{modalContent.title}</h2>
                                        <button onClick={closeModal} className="rounded">
                                            <IconX className="text-white font-bold" />
                                        </button>
                                    </div>

                                    <div className="relative w-[300px] md:w-[350px] h-auto flex items-center justify-center">

                                        <button
                                            className="absolute  left-2 md:-left-14 z-10 bg-[#161616] bg-opacity-50 p-2 rounded-full"
                                            onClick={handlePrev}
                                        >
                                            <IconChevronLeft className="text-white" />
                                        </button>


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


                                        <button
                                            className="absolute right-2 md:-right-14 z-10 bg-[#161616] bg-opacity-50 p-2 rounded-full"
                                            onClick={handleNext}
                                        >
                                            <IconChevronRight className="text-white" />
                                        </button>
                                    </div>


                                    <div className="w-full mt-4 flex flex-col items-center">
                                        <div className="w-full bg-[#D9D9D9] bg-opacity-20 h-1 rounded-full relative">
                                            <div
                                                className="bg-[#D9D9D9] h-1 rounded-full"
                                                style={{
                                                    width: `${((currentPageIndex + 1) / modalContent.pages.length) * 100
                                                        }%`,
                                                }}
                                            ></div>
                                            <div
                                                className="absolute top-0 left-0 h-3 w-3 bg-[#D9D9D9] rounded-full transform -translate-y-1/2"
                                                style={{
                                                    left: `${((currentPageIndex + 1) / modalContent.pages.length) * 100
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
                </div>
            </div>
        );
    };

    return (
        <div>
            {/* Render your Library component content here */}
            <RoyaltySplit />
        </div>
    );
};

export default Library;