"use client";

import { useEffect, useState } from "react";

const UnforgettableExperiences = () => {
    const leftImages = [
        'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&auto=format&fit=crop&q=80',
    ];

    const rightImages = [
        'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&auto=format&fit=crop&q=80',
    ];

    const [leftIndex, setLeftIndex] = useState(0);
    const [rightIndex, setRightIndex] = useState(0);
    const [leftTransition, setLeftTransition] = useState(false);
    const [rightTransition, setRightTransition] = useState(false);

    // Auto scroll for left side with smooth transition
    useEffect(() => {
        const interval = setInterval(() => {
            setLeftTransition(true);
            setTimeout(() => {
                setLeftIndex((prevIndex) =>
                    prevIndex === leftImages.length - 1 ? 0 : prevIndex + 1
                );
                setLeftTransition(false);
            }, 500);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Auto scroll for right side with smooth transition
    useEffect(() => {
        const timeout = setTimeout(() => {
            const interval = setInterval(() => {
                setRightTransition(true);
                setTimeout(() => {
                    setRightIndex((prevIndex) =>
                        prevIndex === rightImages.length - 1 ? 0 : prevIndex + 1
                    );
                    setRightTransition(false);
                }, 500);
            }, 3000);

            return () => clearInterval(interval);
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    // Handle click on left image with smooth transition
    const handleLeftClick = () => {
        setLeftTransition(true);
        setTimeout(() => {
            setLeftIndex((prevIndex) =>
                prevIndex === leftImages.length - 1 ? 0 : prevIndex + 1
            );
            setLeftTransition(false);
        }, 500);
    };

    // Handle click on right image with smooth transition
    const handleRightClick = () => {
        setRightTransition(true);
        setTimeout(() => {
            setRightIndex((prevIndex) =>
                prevIndex === rightImages.length - 1 ? 0 : prevIndex + 1
            );
            setRightTransition(false);
        }, 500);
    };

    return (
        <div className="min-h-screen bg-[#f5f5f5] p-4 md:p-8 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Top Section */}
                <div className="text-center mb-12 md:mb-16 pt-8">
                    <h1 className="text-[32px] md:text-[40px] font-bold text-[#333333] mb-3 tracking-wide uppercase">
                        UNFORGETTABLE EXPERIENCES
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-[#666666] italic font-light">
                        Pictures worth a thousand success stories
                    </p>
                </div>

                {/* Two Column Layout */}
                <div className="flex flex-col lg:flex-row gap-8 md:gap-12">

                    {/* Left Column with Image */}
                    <div className="lg:w-1/2">
                        <div
                            onClick={handleLeftClick}
                            className="cursor-pointer relative group"
                        >
                            <div className="relative h-[350px] md:h-[450px] lg:h-[500px] bg-black overflow-hidden">
                                {/* Main Image with smooth transition */}
                                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${leftTransition ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
                                    <img
                                        src={leftImages[leftIndex]}
                                        alt={`Left slide ${leftIndex + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Next Image preview during transition */}
                                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${leftTransition ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                                    <img
                                        src={leftImages[(leftIndex + 1) % leftImages.length]}
                                        alt="Next slide"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Gradient Overlay with text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                        <div className="text-white transform transition-transform duration-300 group-hover:translate-x-2">
                                            <div className="text-[24px] md:text-[28px] font-bold mb-1">SOL</div>
                                            <div className="text-[14px] md:text-[16px] text-gray-300">School of Life</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Slide Indicator */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="flex gap-2">
                                        {leftImages.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${index === leftIndex ? 'bg-white scale-125' : 'bg-white/40'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Click Hint */}
                                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-white text-xs font-medium">Click to change</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-center">
                                <span className="text-[12px] text-gray-500">Auto scrolls every 3s</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column with Image */}
                    <div className="lg:w-1/2">
                        <div
                            onClick={handleRightClick}
                            className="cursor-pointer relative group"
                        >
                            <div className="relative h-[350px] md:h-[450px] lg:h-[500px] bg-black overflow-hidden">
                                {/* Main Image with smooth transition */}
                                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${rightTransition ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}>
                                    <img
                                        src={rightImages[rightIndex]}
                                        alt={`Right slide ${rightIndex + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Next Image preview during transition */}
                                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${rightTransition ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`}>
                                    <img
                                        src={rightImages[(rightIndex + 1) % rightImages.length]}
                                        alt="Next slide"
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Gradient Overlay with text */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                                    <div className="absolute bottom-0 left-0 p-6 md:p-8">
                                        <div className="text-white transform transition-transform duration-300 group-hover:translate-x-2">
                                            <div className="text-[24px] md:text-[28px] font-bold mb-1">Speeches (10)</div>
                                            <div className="text-[14px] md:text-[16px] text-gray-300">Inspiring Talks & Seminars</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Slide Indicator */}
                                <div className="absolute bottom-6 right-6">
                                    <div className="flex gap-2">
                                        {rightImages.map((_, index) => (
                                            <div
                                                key={index}
                                                className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${index === rightIndex ? 'bg-white scale-125' : 'bg-white/40'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Click Hint */}
                                <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full">
                                        <span className="text-white text-xs font-medium">Click to change</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-3 text-center">
                                <span className="text-[12px] text-gray-500">Auto scrolls every 3s</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Custom CSS for smooth animations */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out;
                }
            `}</style>
        </div>
    );
};

export default UnforgettableExperiences;