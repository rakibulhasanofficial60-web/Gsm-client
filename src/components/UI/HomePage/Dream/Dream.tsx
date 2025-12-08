/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the content type for the component
interface HeroProps {
  // You might pass in content data via props for reusability
}

const HERO_BACKGROUND_IMAGE =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9JTSSXlMb1XEZftiZi59OU9Mxy0XyI7EkQ&s";
const COACH_IMAGE =
  "https://et5tfcbyaro.exactdn.com/wp-content/uploads/2023/08/home-page-photo.png?strip=all&w=359"; // Image for the small portrait

const Dream: React.FC<HeroProps> = () => {
  // Custom color for the gold/bronze text
  const goldColor = "#B8860B";

  return (
    <section className="relative min-h-[85vh] md:min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* 1. Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_BACKGROUND_IMAGE}
          alt="Audience gathered in a dark, atmospheric setting"
          layout="fill"
          objectFit="cover"
          quality={85}
          // Apply dark overlay via Tailwind classes
          className="opacity-40 grayscale"
          priority={true}
        />
      </div>

      {/* 2. Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="text-center max-w-4xl mx-auto text-white">
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl  mb-6">
            <span className="text-red-600">DARE </span> TO DREAM BIGGER
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl font-light text-gray-300 max-w-3xl mx-auto mb-10">
            Are you tired of living a life that doesn't align with your true
            desires? It's time to rewrite your story. I'm here to help you
            overcome obstacles and guide you on an extraordinary journey towards
            prosperity and lasting happiness.
          </p>

          {/* Explore Button */}
          <Link href="/explore-more" passHref>
            <button
              className="
                                inline-block 
                                px-10 py-3 md:px-12 md:py-4 
                                text-sm md:text-base font-semibold uppercase 
                                bg-black text-white 
                                border-2 border-red-600 
                                transition duration-300 
                                hover:bg-red-600 hover:border-black
                            "
            >
              EXPLORE MORE
            </button>
          </Link>
        </div>

        {/* 3. Coach Title and Quote Box */}
        <div className="mt-16 md:mt-24">
          <div className="text-center mb-6">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-1">
              Coach Kanchon
            </h2>
            <p className="text-sm md:text-lg font-light text-gray-400">
              A life dedicated to empowering individuals' happiness and brands'
              success
            </p>
          </div>

          {/* Overlaid Quote Box */}
          <div
            className="
                            mx-auto max-w-4xl 
                            bg-transparent bg-opacity-80 
                            p-8 md:p-10 
                            shadow-2xl 
                            border-1  rounded-2xl border-red-600
                        "
          >
            <div className="flex items-start">
              {/* Quote Content */}
              <div className="flex-1 pr-6">
                <blockquote className="text-xl md:text-2xl font-serif leading-relaxed text-white">
                  <span className="text-5xl mr-2" style={{ color: goldColor }}>
                    &ldquo;
                  </span>
                  Money Can't Buy Happiness, Only
                  <span className="text-red-600 font-bold ml-2">YOU CAN</span>
                </blockquote>
                <p
                  className="text-lg font-semibold mt-4"
                  style={{ color: goldColor }}
                >
                  Coach Kanchon
                </p>
              </div>

              {/* Coach Image */}
              <div className="w-40 h-40 md:w-60 md:h-60 flex-shrink-0 relative  overflow-hidden">
                <Image
                  src={COACH_IMAGE}
                  alt="Portrait of Coach Kanchon"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dream;
