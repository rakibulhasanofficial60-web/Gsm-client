import React from "react";
import Image from "next/image";
import img from "../../../../../public/image1.png";
interface HeroBannerProps {
  heading: string;
  tagline: string;
  ctaText: string;
  heroImageSrc: string;
  bgImageSrc: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  heading = "HAPPINESS ON",
  tagline = "",
  ctaText = "",
  // heroImageSrc = "",

  bgImageSrc = "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_640.jpg",
}) => {
  const words = heading?.split(" ") || [];
  const firstWord = words[0] || "HAPPINESS";
  const secondWord = words[1] || "COACH";

  return (
    <section className="relative w-full overflow-hidden bg-black text-white h-screen">
      {/* 2. Background Image (Lower Layer) - Optimized with next/image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImageSrc}
          alt="Coach speaking on a stage to a large audience"
          fill // Fills the parent div
          style={{ objectFit: "cover" }}
          priority // Important for LCP (Largest Contentful Paint)
          className="opacity-50" // Darken the background to make the foreground pop
          sizes="(max-width: 768px) 100vw, 100vw"
        />
      </div>

  
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4 md:p-8">
        {/* 4. Large Text Overlays - Highly stylized text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* 'HAPPINESS' text - Large, semi-transparent, and layered */}
          <h1 className="text-5xl md:text-[120px] lg:text-[180px] font-extrabold font-sans uppercase text-white/30 select-none tracking-widest leading-none">
            {firstWord}
          </h1>
          {/* 'COACH' or 'ON' text - Positioned slightly lower/differently */}
          <div className="absolute top-[55%] md:top-[60%] text-5xl md:text-[150px] lg:text-[200px] font-extrabold font-sans uppercase text-white/20 select-none tracking-widest leading-none">
            {secondWord}
          </div>
        </div>

        {/* 5. Main Hero Image (Focal Point) - Relative to its parent content div */}
        <div className="relative w-full  md:w-[650px] 2xl:w-[950px] mt-10 md:mt-20 z-10">
          <Image
            src={img}
            alt="Coach Kanchan, a life coach, smiling confidently"
            width={400}
            height={400}
            priority // Treat the main photo as high priority
            className="w-full h-auto object-contain"
            sizes="(max-width: 768px) 80vw, 500px"
          />

          {/* Small Tagline/CTA box Overlay on the Image */}
          {tagline && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-[70%] bg-pink-600 text-white p-2 md:p-3 shadow-2xl rounded-lg">
              <p className="text-xs md:text-sm font-semibold uppercase">
                {tagline}
              </p>
            </div>
          )}
        </div>

        {/* 6. Main CTA Button/Text below the main figure (if needed) */}
        {ctaText && (
          <div className="mt-8 z-20">
            <a
              href="#join-course"
              className="inline-block px-8 py-3 text-lg font-bold uppercase tracking-wider text-white bg-pink-600 rounded-full hover:bg-pink-700 transition duration-300 shadow-xl"
            >
              {ctaText}
            </a>
          </div>
        )}
      </div>


      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        {/* Use a simple repeating pattern or an SVG here if available */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-color-black)_50%,_var(--tw-color-gray-900)_100%)]"></div>
        <div className="absolute inset-0 bg-repeat [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg absolute bottom-5 lg:bottom-10 left-1/2 transform -translate-x-1/2 hover:bg-red-700 transition duration-300 shadow-lg z-20 text-lg lg:text-2xl" >
          Find your happiness compass
        </button>
      </div>
    </section>
  );
};

export default HeroBanner;
