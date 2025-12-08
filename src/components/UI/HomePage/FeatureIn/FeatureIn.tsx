import React from 'react';
import Image from 'next/image';

// Define the type for a single featured item (logo)
interface FeaturedItem {
  id: number;
  alt: string;
  src: string; // Path to the image file
  width: number; // Original width in pixels
  height: number; // Original height in pixels
}


const featuredLogos: FeaturedItem[] = [
  
  { id: 1, alt: '4th Dimension Logo', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6wiOpPOjArenLY5T4Mwigvcqjb6oJpmh9Dw&s', width: 60, height: 60 },
  { id: 2, alt: 'Dhaka Tribune Logo', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Bangladesh_Television_Logo.svg/1200px-Bangladesh_Television_Logo.svg.png', width: 140, height: 40 },
  { id: 3, alt: 'Ittefaq Logo', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ATN_Bangla.svg/2560px-ATN_Bangla.svg.png', width: 150, height: 40 },
  { id: 4, alt: 'Prothom Alo Logo', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mDEhLlkKGh9TAaQfSBVFMdCwO_LbKMWtqg&s', width: 150, height: 50 },
  { id: 5, alt: 'Samakal Logo', src: 'https://e7.pngegg.com/pngimages/60/192/png-clipart-colors-bangla-bengali-television-show-television-channel-nepalis-purple-television.png', width: 150, height: 40 },
  { id: 6, alt: 'Daily Observer Logo', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiahSGBCnDpyuxDvcpe2NZ_zoLZgL1SnVf8g&s', width: 160, height: 40 },
  { id: 7, alt: 'The Daily Star Logo', src: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Rtv_bangladesh.svg/1200px-Rtv_bangladesh.svg.png', width: 140, height: 40 },
  { id: 8, alt: 'Naya Diganta Logo', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1mDEhLlkKGh9TAaQfSBVFMdCwO_LbKMWtqg&s', width: 140, height: 40 }
];

const FeatureIn: React.FC = () => {
    return (
        <section className="py-2  bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Featured In Text */}
                <h2 className="text-2xl md:text-3xl font-normal text-center text-gray-800 mb-2 ">
                    Featured In
                </h2>

                {/* Logos Grid/Flex Container */}
                <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-8 sm:gap-x-10 md:gap-x-12 lg:gap-x-16">
                    {featuredLogos.map((logo) => (
                        <div 
                            key={logo.id} 
                            // Wrapper div to control image sizing and alignment
                            className="flex justify-center items-center h-12 sm:h-14 md:h-16 lg:h-20"
                        >
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                // The following classes ensure responsiveness and maximum height within the container
                                className="max-h-full w-auto object-contain"
                                // Use the original dimensions for the Image component
                                width={logo.width}
                                height={logo.height}
                                // Set priority for important images like logos
                                priority={true} 
                            />
                        </div>
                    ))}
                </div>

        
                <div className="mt-5 border-t border-gray-300"></div>
            </div>
        </section>
    );
};

export default FeatureIn;