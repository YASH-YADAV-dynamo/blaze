import React from "react";
import ImageSlider from "@/components/home/ImageSlider";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  // Define the data array
  const comics = [
    {
      id: 1,
      title: "Blaise: and the xion's...",
      img: "/assets/home/blaise.png",
    },
    {
      id: 2,
      title: "Blaise: and the xion's...",
      img: "/assets/home/blaise.png",
    },
    {
      id: 3,
      title: "Blaise: and the xion's...",
      img: "/assets/home/blaise.png",
    },
    {
      id: 4,
      title: "Blaise: and the xion's...",
      img: "/assets/home/blaise.png",
    },
    {
      id: 5,
      title: "Blaise: and the xion's...",
      img: "/assets/home/blaise.png",
    },
    {
      id: 6,
      title: "Blaise: and the xion's...",
      img: "/assets/home/blaise.png",
    },
  ];

  return (
    <div className="overflow-y-scroll pt-8 p-4 w-full ">
      {/* Slider */}
      <div className="w-full">
        <ImageSlider />
      </div>

      {/* Trending Now */}
      <div className="w-full my-4">
        <div>
          <p className="font-semibold text-xl mb-4">Trending Now</p>
        </div>
        <div className="w-full overflow-x-scroll">
          <div className="flex gap-8 overflow-x-scroll">
            {comics.map((comic) => (
              <div key={comic.id} className="flex-shrink-0 w-1/4">
                <Link href={`/dashboard/mint/${comic.id}`}>
                  <img
                    src={comic.img}
                    className="w-full h-auto object-cover"
                    alt={comic.title}
                  />
                  <p>{comic.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Minting Soon */}
      <div className="w-full">
        <div>
          <p className="font-semibold text-xl mb-4">Minting Soon</p>
        </div>
        <div className="w-full overflow-x-scroll">
          <div className="flex gap-8 overflow-x-scroll">
            {comics.map((comic) => (
              <div key={comic.id} className="flex-shrink-0 w-1/4">
                <img
                  src={comic.img}
                  className="w-full h-auto object-cover"
                  alt={comic.title}
                />
                <p>{comic.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
