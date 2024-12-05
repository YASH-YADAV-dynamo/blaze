import React from "react";

const Mint = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 overflow -y-none max-h-full">
      <div className="grid md:grid-cols-1 xl:grid-cols-[3fr_5fr] w-full ">
        <div className="w-full p-8">
          <img src="/comic.png" className="w-full px-0 md:px-0  xl:p-0 h-auto" />
        </div>
        <div className="w-full p-8 h-full flex flex-col gap-8">
          <div className="rounded p-1">
            <h2 className="text-4xl font-bold">
              Blaise: and the xion&apos;s secret
            </h2>
            <div className="flex items-center mt-1 space-x-2">
              <img src="/Xion.png" className="w-10 h-10" alt="icon" />
              <p className=" text-2xl text-gray-500 font-medium">
                <span className="text-white">0.52</span> XION
              </p>
            </div>
          </div>
          <div className=" bg-[#161616] rounded py-6 p-4 flex gap-16">
            <div className="flex items-center justify-between">
              <span className=" bg-[#F9C61F] bg-opacity-30 p-2 px-4 rounded-md font-semibold text-[#F9C61F]">
                LIVE
              </span>
            </div>
            <div className="w-full">
              <span className="pb-2">15%</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-yellow-500 h-2.5 rounded-full"
                  style={{ width: "15%" }}
                ></div>
              </div>
            </div>
          </div>
          <div className="rounded p-1">
            <h3 className="text-2xl font-bold">Description</h3>
            <div></div>
            <p>
              This comic is the best this comic is the best this comic is the
              best this comic is the best this comic is the best this comic is
              the is the best this comic is the is the best this comic is the is
              the...
              <span>
                {" "}
                <a
                  href="#"
                  className="text-[#F9C61F] hover:underline font-semibold"
                >
                  read more
                </a>
              </span>
            </p>
          </div>
          <div className="w-full px-4 py-2 bg-black md:static md:w-auto md:p-0 md:bg-transparent md:border-0 flex flex-col md:flex-row gap-16 items-center justify-between">
            <div className="flex items-center space-x-2 w-full bg-[#161616] justify-between gap-4 p-3 px-4 rounded-md">
              <button className="bg-[#EDF1F3] bg-opacity-10 text-white hover:bg-gray-300 text-3xl font-medium py-0 px-2 rounded">
                -
              </button>
              <p>1</p>
              <button className="bg-[#EDF1F3] bg-opacity-10 text-white hover:bg-gray-300 text-3xl font-medium py-0 px-2 rounded">
                +
              </button>
            </div>
            <button
              className=" p-3 rounded-md w-full font-semibold text-lg"
              style={{
                borderImageSource:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.42) 0%, rgba(255, 255, 255, 0) 100%)",
                background:
                  "radial-gradient(68.04% 300.23% at 30.28% 22.92%, #F9C61F 0%, #F85507 100%), linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)",
              }}
            >
              Mint Comic
            </button>
          </div>
        </div>
      </div>

      {/* <div className="fixed bottom-0 left-0 w-full px-4 py-2 bg-white border-t border-gray-300 md:static md:w-auto md:p-0 md:bg-transparent md:border-0 flex items-center justify-between">

        <div className="flex items-center space-x-2">

          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">-</button>

          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded">+</button>

        </div>

        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">

          Mint Comic

        </button>

      </div> */}
    </div>
  );
};

export default Mint;
