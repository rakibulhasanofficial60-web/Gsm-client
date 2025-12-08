import React from 'react';

// Define the type for a single statistic item
interface StatItem {
    id: number;
    value: string;
    label: string;
}

// Data array for the statistics
const statsData: StatItem[] = [
    { id: 1, value: '25,440 +', label: 'Seconds dedication' },
    { id: 2, value: '57,600 +', label: 'Hours experience' },
    { id: 3, value: '53,700 +', label: 'Readers' },
    { id: 4, value: '22,400 +', label: 'Participants' },
    { id: 5, value: '10,931 +', label: 'Word review' },
];

const Helping: React.FC = () => {
    return (
        // The main container with the dark background
        <section className="bg-black py-12 md:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Statistics Grid/Container */}
                <div className="border-t border-b border-yellow-700 py-10 md:py-16">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 md:gap-x-0">
                        {statsData.map((stat, index) => (
                            <div 
                                key={stat.id} 
                                className={`
                                    relative flex flex-col items-center text-center px-4
                                    // Add vertical separator for all items except the first one in the desktop view
                                    md:before:content-[''] 
                                    md:before:absolute 
                                    md:before:left-0 
                                    md:before:top-1/4 
                                    md:before:w-px 
                                    md:before:h-1/2 
                                    md:before:bg-yellow-700
                                    // On mobile, add a separator only if it's not the first item in the row (e.g., index is 1, 3, 5...)
                                    ${index % 2 !== 0 ? 'before:content-[""] before:absolute before:left-0 before:top-1/4 before:w-px before:h-1/2 before:bg-yellow-700' : ''}
                                `}
                            >
                                <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-500 mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-sm uppercase tracking-wider text-white opacity-90">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Call-to-Action Text */}
                <div className="mt-10 md:mt-16 text-center">
                    <p className="text-lg md:text-xl lg:text-2xl font-light text-yellow-500">
                        Helping over **20,000 entrepreneurs** to achieve financial abundance and skyrocket their business success
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Helping;