import React from 'react';
import Link from 'next/link';

const BusinessTraining: React.FC = () => {
    // Define the gold color using a custom Tailwind class or utility color
    // If you haven't defined this color in tailwind.config.js, you can use an arbitrary value like below:
    const goldColor = '#B8860B'; 
    
    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                {/* Heading Text */}
                <h2 
                    className="text-3xl md:text-5xl font-bold uppercase mb-10 md:mb-12"
                    style={{ color: goldColor }} // Apply the custom gold color
                >
                    ARE YOU NEXT?
                </h2>

                {/* Call-to-Action Button */}
                <Link 
                    href="/start-training" // Replace with your actual training link
                    passHref // Required for Next.js Link with external component/element
                    className="inline-block" // Ensures the Link component behaves like a block element for sizing
                >
                    <button 
                        className="
                            px-8 py-4 md:px-12 md:py-6 
                            text-xl md:text-2xl lg:text-3xl font-bold uppercase 
                            text-red-600 
                            border-4 border-red-600 
                            transition duration-300 ease-in-out 
                            hover:bg-red-600 hover:text-white 
                            focus:outline-none focus:ring-4 focus:ring-red-300
                        "
                        aria-label="Start Your Free Business Training"
                    >
                        START YOUR FREE <br /> 
                        BUSINESS TRAINING
                    </button>
                </Link>
                
            </div>
        </section>
    );
};

export default BusinessTraining;