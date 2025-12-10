import Image from 'next/image';
import cover from '../.././../../assets/cover.png';

const BusinessGrowthChallenge = () => {
    return (
        <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto">

                {/* 1. Top Enrollment Button */}
                <div className="text-center mb-10">
                    <button className="bg-[#ED1D27] text-white rounded-sm font-bold py-2 px-8 text-sm cursor-pointer">
                        ENROLL NOW TO GET FREE COURSE
                    </button>
                </div>

                {/* 2. Main Bengali Headline Block */}
                <div className="px-4 mb-6">
                    <h2 className="text-center text-[#ED1C24] text-3xl font-bold leading-tight">
                        বিজনেসের <br />
                        শুরুতে ৩ টি প্রধান চ্যালেঞ্জ
                    </h2>
                </div>

                {/* 3. Top 3 Challenges Section */}
                <div className="mb-10 md:max-w-2/4 mx-auto space-y-3 ">
                    <p className="bg-gray-800 text-white text-center py-1 rounded-sm">
                        আইডিয়া সিলেকশনে ভুল করা
                    </p>
                    <p className="bg-gray-800 text-white text-center py-1 rounded-sm">
                        প্রপার মডেল ডিজাইন করতে না জানা
                    </p>
                    <p className="bg-gray-800 text-white text-center py-1 rounded-sm">
                        কোথায় বেশি ফোকাস দিবো বুঝতে না পারা
                    </p>
                </div>

                {/* 4. Problem Statement/Pain Point Block (Red Border) */}
                <div className="bg-[#ED1C24] rounded-sm text-white p-5 mb-10 text-center">
                    <p className="text-xl mb-4">
                        উঁচু একটি বিল্ডিং যেমন শক্তিশালী একটা ফাউন্ডেশন ও কিছু পিলারের উপর দাঁড়িয়ে থাকে, ঠিক তেমনি বিজনেস সাসটেইনেবল করতেও বেশ কিছু পিলার লাগে।
                    </p>
                    <p className="text-xl">
                        বিজনেস ফান্ডামেন্টালস কোর্সে আমরা বিজনেস এর একদম মূল ভিত্তিগুলো নিয়ে কথা বলবো যার উপর বিজনেস দাঁড়িয়ে থাকে; যাতে বিজনেস Fall না করে এবং বিগ বিজনেস বিল্ড করতে পারেন। এই কোর্স আপনাকে দিবে একটি কমপ্লিট রোডম্যাপ যা বিজনেস নিয়ে আপনার চিন্তা ও কার্যক্রম আমূল পালটে দিবে।
                    </p>
                </div>

                {/* 6. Mid-Section Enrollment Button */}
                <div className="text-center mb-10">
                    <button className="bg-[#ED1D27] text-white rounded-sm font-bold py-2 px-8 text-sm cursor-pointer">
                        JOIN NOW TO GET FREE COURSE
                    </button>
                </div>

                {/* 7. Course Benefits / Guarantee Section (Red Border) */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        কোর্স থেকে
                        <br />
                        <span className="text-red-600">যেভাবে বেনেফিটেড</span> হবেন
                    </h2>

                    <div className="p-6 text-left shadow-lg w-[600px] mx-auto bg-[#E8E8E8] rounded-sm">
                        <ul className="space-y-3 text-gray-700 font-medium">
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">&#10003;</span>
                                পুঁজির দুশ্চিন্তা কমে যাবে।
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">&#10003;</span>
                                ইনোভেটিভ আইডিয়া জেনারেট করতে পারবেন।
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">&#10003;</span>
                                আইডিয়ার প্রপার এক্সিকিউশন শিখবেন।
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">&#10003;</span>
                                রাইট টাইমে রাইট ডিসিশন নিতে পারবেন।
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">&#10003;</span>
                                ইনভেস্টমেন্ট পলিসি ও প্লান সাজাতে পারবেন।
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">&#10003;</span>
                                কৌশলগত পরিকল্পনা হাতে নিতে পারবেন।
                            </li>
                            <li className="flex items-start">
                                <span className="text-red-600 mr-2 text-xl">&#10003;</span>
                                মার্কেটিং ডিপার্টমেন্ট ঢেলে সাজাতে পারবেন।
                            </li>
                        </ul>
                    </div>
                </div>

                {/* 8. Bottom Enrollment Button */}
                <div className="text-center mb-4">
                    <button className="bg-red-600 text-white font-bold py-3 px-8 text-sm tracking-wider hover:bg-red-700 transition duration-300 flex items-center justify-center mx-auto rounded-sm">
                        ENROLL NOW
                    </button>
                </div>

                <div className='md:mt-12'>
                    <div className='mb-16'>
                        <Image
                            src={cover}
                            alt="Our Concern"
                            width={800}
                            height={600}
                            className="mx-auto mb-10"
                        />

                        <div className="bg-black max-w-lg mx-auto px-6 py-2 rounded-lg shadow-2xl font-serif">
                            {/* Header Title */}
                            <div className="text-center mb-6">
                                {/* Using a shade of white/off-white for the Bengali title */}
                                <h2 className="text-white text-3xl font-bold p-3 tracking-wider">
                                    যা যা শিখবেন
                                </h2>
                            </div>

                            {/* Lesson List Container */}
                            <div className="space-y-3">
                                {/* Lesson Item Component */}
                                {/* We use a function to easily generate repetitive list items */}
                                {["আইডিয়া জেনারেশন মেথড", "ইনোভেশন প্রসেস", "বিলিয়ন ডলার বিজনেস্ এলিমেন্ট", "৩০-৩০-৩০ রুলস", "১২ টি বিশ্বসেরা বিজনেস্ মডেল", "ফাউন্ডেশন অব মার্কেটিং", "ABCD অব ব্র্যান্ডিং", "SWOT অ্যানালাইসিস", "PESTEL অ্যানালাইসিস", "ফাইভ ফোর্সেস মডেল", "মানি জেনারেটিং মেথড"].map((lesson, index) => (
                                    <div key={index} className="flex items-center bg-gray-600 h-12 w-full border border-gray-500 shadow-md">
                                        {/* Red Arrow Icon (Triangle) */}
                                        <div className="flex items-center justify-center h-full bg-red-700 w-8">
                                            {/* Creating a simple right-pointing triangle using border tricks */}
                                            <div className="w-0 h-0 border-t-[8px] border-b-[8px] border-l-[10px] border-t-transparent border-b-transparent border-l-white"></div>
                                        </div>
                                        {/* Lesson Text */}
                                        <div className="flex-1 px-4">
                                            <p className="text-white text-base font-medium">
                                                {lesson}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Text */}
                            <div className="text-center mt-6 mb-8">
                                <p className="text-white text-xl font-medium tracking-wide">
                                    আরো অনেক অনেক কিছু...!
                                </p>
                            </div>
                        </div>

                        <div className="text-center mt-3">
                            <button className="bg-red-700 hover:bg-red-800 text-white font-extrabold text-xl py-4 px-12 rounded-lg shadow-2xl uppercase transition duration-300">
                                JOIN NOW
                                <span className="block text-xs font-normal mt-1">
                                    (Before the offer ends)
                                </span>
                            </button>
                        </div>
                    </div>




                    <div className="bg-white max-w-4xl mx-auto border border-red-900 shadow-xl font-serif">
                        <div className="relative bg-red-800 pt-10 pb-16">
                            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-2 rounded-md shadow-lg">
                                <h2 className="text-red-800 text-xl font-bold tracking-widest">
                                    COURSE DETAILS
                                </h2>
                            </div>

                            <div className="flex justify-around items-center text-white pt-6">
                                {/* 20+ Lesson */}
                                <div className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm">
                                        <span className="text-lg font-bold">20+</span> LESSON
                                    </p>
                                </div>

                                <div className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm">
                                        <span className="text-lg font-bold">180</span> MINUTES DURATION
                                    </p>
                                </div>

                                {/* Slide Access */}
                                <div className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm">
                                        SLIDE ACCESS
                                    </p>
                                </div>

                                {/* Advanced Strategy & Formula */}
                                <div className="text-center">
                                    <div className="flex justify-center mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={1.5}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M16 12h4m-4 7h-4m-6.364-1.636l-.707-.707M4 12H1m7.954-6.364l.707-.707M12 20h4m-4-8a4 4 0 11-8 0 4 4 0 018 0z"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-sm">
                                        ADVANCED STRATEGY & FORMULA
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div className="bg-black text-white py-12 text-center">
                            <h3 className="text-3xl font-bold mb-4">
                                Course Fee
                            </h3>
                            <p className="text-xl mb-8">
                                REGULAR PRICE: <s className="text-red-500">3,500 TK</s>
                            </p>
                            <p className="text-3xl font-semibold mb-2" style={{ color: 'red' }}>
                                Limited time
                            </p>
                            <p className="text-6xl font-extrabold" style={{ color: 'red' }}>
                                Free Registration!
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BusinessGrowthChallenge;