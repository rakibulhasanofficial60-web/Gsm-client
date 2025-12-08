/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

const Author = () => {
  return (
    <div className="py-16 bg-[#1B1B1B] ">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {/* Left Image */}
        <div className="relative h-[550px] w-full">
          <Image
            src="https://et5tfcbyaro.exactdn.com/wp-content/uploads/2023/07/Asset-11-1.png?strip=all&w=484"
            alt="Portrait of Coach Kanchon"
            fill
            className="object-cover rounded-lg"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-4">
          <p className="md:text-2xl font-semibold text-white">
            Award-Winning Author <br /> Certified Happiness Coach <br />{" "}
            Business Mentor | Investor
          </p>

          <div className="my-10 text-gray-200 bg-[#252525] p-5 text-center">
            <p className=" leading-relaxed">
              I'm specializing in making people’s hard times happier through my
              revolutionary EMPOWER model. I'm helping Bangladeshi entrepreneurs
              supercharge their growth, scale their ventures, and build
              remarkable 8- or 9-figure businesses.
            </p>

            <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded w-fit my-2">
              About GSM Fix
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-80 w-full">
          <Image
            src="https://et5tfcbyaro.exactdn.com/wp-content/uploads/2023/07/Asset-222-600x545.png?strip=all"
            alt="Author illustration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="flex justify-center items-center gap-5 p-5 text-center">
        <img
          src="https://et5tfcbyaro.exactdn.com/wp-content/uploads/2023/07/Asset-333.png?strip=all&w=175"
          alt="Author illustration"
          
          className="object-cover rounded-lg w-40"
        />
        <img
          src="https://et5tfcbyaro.exactdn.com/wp-content/uploads/2023/07/Asset-333.png?strip=all&w=175"
          alt="Author illustration"
          
          className="object-cover rounded-lg w-40"
        />
        <img
          src="https://et5tfcbyaro.exactdn.com/wp-content/uploads/2023/07/Asset-333.png?strip=all&w=175"
          alt="Author illustration"
          
          className="object-cover rounded-lg w-40"
        />
      </div>
    </div>
  );
};

export default Author;
