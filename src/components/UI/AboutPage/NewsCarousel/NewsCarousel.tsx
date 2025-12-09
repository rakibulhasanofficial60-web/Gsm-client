// components/NewsCarousel.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';

interface NewsOutlet {
    id: number;
    name: string;
    tagline: string;
    logo: string; // Image path/URL
    bgColor: string;
}

const NewsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [isAutoPlay] = useState<boolean>(true); // isAutoPlay is declared but its value is never read.
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const carouselRef = useRef<HTMLDivElement>(null);

    const newsOutlets: NewsOutlet[] = [
        {
            id: 1,
            name: "JABIANESY",
            tagline: "CITY OBSERVER",
            logo: "../../../../assets/image.png", // আপনার ইমেজ পাথ
            bgColor: "bg-gray-50"
        },
        {
            id: 2,
            name: "The Daily Star",
            tagline: "",
            logo: "../../../../assets/image.png",
            bgColor: "bg-white"
        },
        {
            id: 3,
            name: "PEOPLES",
            tagline: "RADIO 91.6 FM",
            logo: "../../../../assets/image.png",
            bgColor: "bg-white"
        },
        {
            id: 4,
            name: "Dhaka Tribune",
            tagline: "",
            logo: "../../../../assets/image.png",
            bgColor: "bg-white"
        },
    ];

    // Auto slide effect - 1 সেকেন্ড পর পর
    useEffect(() => {
        let interval: NodeJS.Timeout;

        interval = setInterval(() => {
            handleNext();
        }, 1000);

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [currentIndex]);

    const handlePrev = (): void => {
        setCurrentIndex((prev) =>
            prev === 0 ? newsOutlets.length - 1 : prev - 1
        );
    };

    const handleNext = (): void => {
        setCurrentIndex((prev) =>
            prev === newsOutlets.length - 1 ? 0 : prev + 1
        );
    };

    const handleMouseDown = (e: React.MouseEvent | React.TouchEvent): void => {
        setIsDragging(true);

        if ('touches' in e) {
            setStartX(e.touches[0].clientX);
        } else {
            setStartX(e.clientX);
        }
    };

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent): void => {
        if (!isDragging) return;

        let currentX: number;

        if ('touches' in e) {
            currentX = e.touches[0].clientX;
        } else {
            currentX = e.clientX;
        }

        const diff = startX - currentX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                handleNext();
            } else {
                handlePrev();
            }
            setIsDragging(false);
        }
    };

    const handleMouseUp = (): void => {
        setIsDragging(false);
    };

    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg">
            {/* Header */}
            <div className="mb-8 pb-4 border-b border-gray-200">
                <h2 className="text-xl font-bold tracking-wider text-gray-800 uppercase">
                    FEATURED IN
                </h2>
            </div>

            {/* Carousel Container */}
            <div className="relative">
                {/* Left Button */}
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 
                   w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center 
                   hover:bg-gray-50 transition-colors border border-gray-200"
                    aria-label="Previous slide"
                    type="button"
                >
                    <FiChevronLeft className="w-5 h-5 text-gray-700" />
                </button>

                {/* Right Button */}
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 
                   w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center 
                   hover:bg-gray-50 transition-colors border border-gray-200"
                    aria-label="Next slide"
                    type="button"
                >
                    <FiChevronRight className="w-5 h-5 text-gray-700" />
                </button>

                {/* Carousel Items */}
                <div
                    ref={carouselRef}
                    className="overflow-hidden px-12"
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchEnd={handleMouseUp}
                    style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                >
                    <div
                        className="flex transition-transform duration-300 ease-out"
                        style={{
                            transform: `translateX(-${currentIndex * 25}%)`,
                            width: `${newsOutlets.length * 25}%`
                        }}
                    >
                        {newsOutlets.map((outlet) => (
                            <div
                                key={outlet.id}
                                className="w-1/4 px-3"
                            >
                                <div
                                    className={`${outlet.bgColor} rounded-lg p-4 border border-gray-200 
                            h-32 flex flex-col items-center justify-center text-center 
                            hover:shadow-sm transition-shadow cursor-pointer
                            ${isDragging ? 'cursor-grabbing' : ''}`}
                                >
                                    {/* Logo Image - Next.js Image Component ব্যবহার */}
                                    <div className="mb-3 h-10 w-full flex items-center justify-center">
                                        <div className="relative w-full h-full">
                                            {/* Next.js Image component */}
                                            <div className="relative w-full h-10 flex items-center justify-center">
                                                {outlet.logo.startsWith('http') || outlet.logo.startsWith('/') ? (
                                                    <Image
                                                        src={outlet.logo}
                                                        alt={outlet.name}
                                                        width={120}
                                                        height={40}
                                                        className="object-contain w-auto h-10"
                                                    />
                                                ) : (
                                                    // Fallback text যদি ইমেজ না থাকে
                                                    <div className="text-lg font-bold text-gray-700 h-10 flex items-center justify-center">
                                                        {outlet.name.substring(0, 2)}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Name */}
                                    <h3 className="font-semibold text-gray-800 text-sm mb-1">
                                        {outlet.name}
                                    </h3>

                                    {/* Tagline */}
                                    {outlet.tagline && (
                                        <p className="text-xs text-gray-500 uppercase">
                                            {outlet.tagline}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCarousel;