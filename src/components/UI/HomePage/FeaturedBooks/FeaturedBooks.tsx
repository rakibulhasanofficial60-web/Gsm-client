import rokmari from '../../../../assets/rokmari.png';

const FeaturedBooks = () => {

    const books = [
        { title: "কঠিন সময়ের সহজ সমাধান", id: 1 },
        { title: "সুখের সন্ধানে", id: 2 },
        { title: "তোমার নাম দিয়ে দিলাম", id: 3 },
        { title: "সফলতার সন্ধানে", id: 4 },
        { title: "বিজনেস ব্লুপ্রিন্ট", id: 5 },
    ];

    return (
        <div className="bg-black min-h-screen flex flex-col items-center py-12 px-4 text-white">
            {/* --- Header Section --- */}
            <header className="text-center mb-16">
                <h1 className="text-3xl sm:text-4xl font-light tracking-wide mb-2">
                    The blueprint of <span className="font-bold">transformational wisdom</span>
                </h1>
                <p className="text-lg text-gray-400">
                    Explore Coach Kanchans written masterpieces
                </p>
            </header>

            {/* --- Bestseller Badge --- */}
            <div className="flex items-center space-x-2 mb-16">
                <img src={rokmari} alt="Rokomari Logo" className="h-10 w-auto" />
                <div className="flex flex-col items-center">
                    <span className="text-4xl font-extrabold text-white leading-none">
                        NO-1
                    </span>
                    <span className="text-sm tracking-widest text-gray-300 uppercase -mt-1">
                        BEST-SELLING AUTHOR
                    </span>
                </div>
            </div>

            {/* --- Main Featured Book (Centered) --- */}
            <div className="mb-24 perspective">
                <div 
                    className="relative w-48 h-64 sm:w-60 sm:h-80 transition-transform duration-500 hover:scale-105"
                    style={{ 
                        transform: 'rotateY(20deg) rotateX(5deg)', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
                    }}
                >
                    {/* Main book cover image */}
                    <div className="absolute inset-0 bg-white border border-gray-700 p-2 flex flex-col justify-center items-center text-center">
                        <h2 className="text-xl font-bold text-black border-b border-black mb-2 pb-1">
                            ব্যাংক ব্যালেন্স
                        </h2>
                        {/* Image container */}
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-gray-300 flex justify-center items-center">
                            <div className="text-center">
                                <div className="text-4xl mb-2">💰</div>
                                <p className="text-xs text-gray-600 px-2">
                                    বইয়ের কভার ইমেজ
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Side/Spine of the book - for 3D effect */}
                    <div 
                        className="absolute top-0 right-0 w-2 h-full bg-gray-800"
                        style={{ transform: 'translateX(100%) skewY(-2deg)' }}
                    ></div>
                </div>
            </div>

            {/* --- Bottom Row of Books --- */}
            <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
                {books.map((book) => (
                    <div
                        key={book.id}
                        className="w-24 h-36 sm:w-32 sm:h-48 cursor-pointer transform transition-transform duration-300 hover:scale-110 shadow-lg"
                    >
                        {/* Book cover */}
                        <div className="w-full h-full bg-gradient-to-br from-white to-gray-100 border border-gray-300 flex flex-col justify-end p-2 text-center hover:border-yellow-400 transition-colors duration-300">
                            <span className="text-xs sm:text-sm font-semibold text-black leading-tight">
                                {book.title}
                            </span>
                            {/* Author name */}
                            <span className="text-xxs text-gray-500 mt-1">
                                কোচ কাঞ্চন
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedBooks;