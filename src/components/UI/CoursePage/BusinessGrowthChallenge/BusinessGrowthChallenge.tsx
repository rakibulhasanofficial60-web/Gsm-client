import React from 'react';

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
                    <button className="bg-red-600 text-white font-bold py-3 px-8 text-sm tracking-wider hover:bg-red-700 transition duration-300 flex items-center justify-center mx-auto">
                        ENROLL NOW
                        <span className="ml-2 text-lg">&#x21BB;</span> {/* Refresh/Circle Arrow Icon */}
                    </button>
                </div>

                {/* Footer/Signature Text */}
                <p className="text-center text-xs text-gray-400 mt-4">
                    expow-4ll CSS - santaning-wide
                </p>
            </div>
        </div>
    );
};

export default BusinessGrowthChallenge;