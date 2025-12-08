import React from 'react';

const KanchonsKeynotes = () => {
    // Data for the two cards
    const keynotes = [
        {
            id: 1,
            // Title lines now handle the line breaks seen in the image for the first card
            titleLine1: "মশার কামড়ে মরছে হাতি",
            titleLine2: "বাঁচবেন না আপনিও",
            subtitle: "মশার কামড়ে মরছে হাতি, বাঁচবেন না আপনিও!",
            bgImage: "url('placeholder-mosquito-elephant.jpg')", // Replace with actual image path
        },
        {
            id: 2,
            titleLine1: "জীবনকে কীভাবে সাজাবো?",
            titleLine2: "", // The second card has only one main title line
            subtitle: "",
            bgImage: "url('placeholder-life-planning.jpg')", // Replace with actual image path
        },
    ];

    return (
        <div className="bg-black py-16 px-4 sm:px-8 text-white">
            
            {/* --- Header Section --- */}
            <header className="text-center mb-12">
                <h2 className="text-4xl font-extrabold tracking-wider mb-2">
                    KANCHON&apos;S KEYNOTES
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                    unlocking doors to success and happiness with coach kanchon&lsquo;s insight, ideas, and inspiration
                </p>
            </header>

            {/* --- Keynote Cards Container (Matching the layout in the picture) --- */}
            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 max-w-6xl mx-auto mb-12">
                {keynotes.map((note) => (
                    <div
                        key={note.id}
                        // Removing 'p-1' and making the border a subtle inset-shadow for a cleaner look
                        className="flex-1 min-w-0 min-h-[350px] relative overflow-hidden shadow-[0_0_0_1px_rgba(107,114,128,0.5)]" 
                    >
                        {/* Background Image and Overlay */}
                        <div
                            className={`absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-[1.02]`}
                            style={{
                                backgroundImage: note.bgImage,
                                // Applying a dark overlay for text readability, mimicking the image
                                backgroundBlendMode: 'multiply',
                                backgroundColor: 'rgba(0, 0, 0, 0.65)',
                            }}
                        ></div>

                        {/* Coach Kanchan Logo/Text (Top Right) */}
                        {/* Note: In the image, the logo is slightly more complex, using simple text here. */}
                        <div className="absolute top-4 right-4 text-xs font-semibold text-red-500 uppercase tracking-widest leading-tight z-10">
                            <span className="block text-right">COACH</span>
                            <span className="block text-right">KANCHAN</span>
                            <span className="block text-right text-red-700">ACADEMY</span> {/* Added ACADEMY for accuracy */}
                        </div>

                        {/* Content Box (Lower Left) */}
                        <div className="relative h-full flex flex-col justify-end p-6 z-10">
                            
                            {/* Primary Title (Matching font weight and size) */}
                            <div className="text-3xl sm:text-4xl font-extrabold leading-tight mb-4 max-w-[90%]">
                                <span className="block text-shadow-sm">{note.titleLine1}</span>
                                {/* Secondary title line is only present on the first card */}
                                {note.titleLine2 && <span className="block text-shadow-sm">{note.titleLine2}</span>}
                            </div>
                            
                            {/* Secondary Title (Smaller) - Only visible on the first card */}
                            {/* Note: The image shows the subtitle right above the button, matching the line spacing */}
                            {note.subtitle && (
                                <p className="text-base font-normal mb-8 text-white">
                                    {note.subtitle}
                                </p>
                            )}

                            {/* Read More Button (Pixel-Perfect Gradient and Shadow) */}
                            <button
                                className="w-40 py-3 text-lg font-semibold text-white transition duration-300 hover:opacity-90 z-20"
                                style={{
                                    // Custom gradient for the button (Red to Dark Red)
                                    backgroundImage: 'linear-gradient(to right, #ed1c24, #a80000)',
                                    // Subtle dark inner shadow for depth and white border for highlight
                                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.5), 0 4px 6px -1px rgba(0, 0, 0, 0.5)',
                                    border: 'none', // Removed explicit border class
                                }}
                            >
                                Read More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- Explore More Button (Bottom Center) --- */}
            <div className="text-center">
                <button
                    className="w-60 py-4 text-xl font-bold text-white transition duration-300 hover:opacity-90 shadow-2xl mt-8"
                    style={{
                        // Same gradient style as the Read More buttons
                        backgroundImage: 'linear-gradient(to right, #ed1c24, #a80000)',
                        boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.5), 0 4px 10px rgba(0, 0, 0, 0.8)',
                    }}
                >
                    Explore More
                </button>
            </div>
        </div>
    );
};

export default KanchonsKeynotes;