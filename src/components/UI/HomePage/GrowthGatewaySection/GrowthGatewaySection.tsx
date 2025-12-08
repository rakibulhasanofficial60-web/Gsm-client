"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Required modules
import { Pagination } from "swiper/modules";

const GrowthGatewaySection = () => {
    const courses = [
        {
            id: 1,
            title: "The Money Mastery",
            description: "ULTIMATE WEALTH CREATION SECRETS",
            img: "/images/money-mastery.jpg",
        },
        {
            id: 2,
            title: "Business Blueprint Mastery",
            description: "MASTERCOURSE",
            img: "/images/business-blueprint.jpg",
        },
        {
            id: 3,
            title: "BRAVE",
            description: "A LIFE TRANSFORMATION WORKSHOP",
            img: "/images/brave.jpg",
        },
        {
            id: 4,
            title: "Workshop on HAPPINESS IN HARD TIMES",
            description: "(Challenge to Champion)",
            img: "/images/hard-times.jpg",
        },
        {
            id: 5,
            title: "Leadership Excellence",
            description: "ADVANCED TRAINING",
            img: "/images/leadership.jpg",
        },
    ];

    return (
        <div className="relative bg-[#313232] py-20 px-4 text-white overflow-hidden">

            {/* Background coach image */}
            <div
                className="absolute inset-0 opacity-10 bg-right-top bg-no-repeat bg-contain pointer-events-none"
                style={{ backgroundImage: "url('/images/coach-bg.png')" }}
            />

            {/* Header */}
            <header className="text-center mb-12 relative z-10">
                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-wider mb-3">
                    YOUR GATEWAY TO GROWTH
                </h2>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                    achieve breakthrough results and flourish in all areas of your life
                </p>
            </header>

            {/* Swiper Carousel */}
            <div className="relative z-10 max-w-6xl mx-auto">
                <Swiper
                    slidesPerView={1.2}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        640: { slidesPerView: 2, spaceBetween: 20 },
                        1024: { slidesPerView: 3, spaceBetween: 30 },
                    }}
                    modules={[Pagination]}
                >
                    {courses.map((course) => (
                        <SwiperSlide key={course.id}>
                            <div className="bg-black rounded shadow-xl overflow-hidden">

                                {/* Image */}
                                <div
                                    className="h-80 bg-cover bg-center relative"
                                    style={{ backgroundImage: `url(${course.img})` }}
                                >
                                    {/* coach logo */}
                                    <div className="absolute top-3 left-3 text-xs font-semibold text-red-500 uppercase tracking-widest leading-tight">
                                        <span className="block">COACH</span>
                                        <span className="block">KANCHAN</span>
                                    </div>

                                    {/* title + subtitle */}
                                    <div className="absolute bottom-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                        <h3 className="text-xl font-bold text-white">{course.title}</h3>
                                        <p className="text-sm text-red-400">{course.description}</p>
                                    </div>
                                </div>

                                {/* Button */}
                                <button
                                    className="w-full py-3 uppercase font-semibold text-white"
                                    style={{
                                        backgroundImage: "linear-gradient(to right, #e53e3e, #c53030)",
                                        borderTop: "1px solid #c53030",
                                    }}
                                >
                                    {course.id === 1 || course.id === 2
                                        ? course.title
                                        : "View Details"}
                                </button>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default GrowthGatewaySection;
