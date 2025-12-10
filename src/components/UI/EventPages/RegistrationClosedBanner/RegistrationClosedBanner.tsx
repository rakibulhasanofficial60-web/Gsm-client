import Image from "next/image";
import event from '../../../../assets/event-bg.png'
import concert from '../../../../assets/concert.png'
import man from '../../../../assets/man.png'

const RegistrationClosedBanner = () => {

    const benefits = [
        'ব্রেইনের ফাংশনালিটি বুঝতে পারবেন।',
        'নিজের ব্রেইনের প্যাসেঞ্জার না হয়ে পাইলট হয়ে উঠবেন।',
        'ডিজিটাল ডিসট্রাকশন থেকে নিজেকে মুক্ত রাখতে পারবেন।',
        'কাজের প্রোডাক্টিভিটি ও পারফরম্যান্স কয়েকগুণ বাড়াতে পারবেন।',
        'টাইম ম্যানেজমেন্ট কেন কাজ করে না বুঝতে পারবেন।',
        'ভুলে যাওয়া রোধ ও মনোযোগ বৃদ্ধির ফর্মুলা জানতে পারবেন।',
        'নিজের ব্রেইনের সক্ষমতা কাজে লাগিয়ে আর্থিক সমৃদ্ধি আনতে পারবেন।',
        'ডিফিকাল্ট অ্যান্ড চ্যালেঞ্জিং পরিস্থিতি দারুণভাবে সামাল দিতে শিখবেন।',
    ];

    return (
        <div>
            <div className="bg-black flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">

                {/* Red 'REGISTRATION CLOSED' button/banner */}
                <div className="bg-red-600 px-8 py-3 mb-10 shadow-lg transform hover:scale-105 transition duration-300">
                    <p className="text-white text-xl font-serif uppercase tracking-wider font-bold">
                        REGISTRATION CLOSED
                    </p>
                </div>

                {/* Event Titles */}
                <div className="text-white text-center">

                    {/* Main Event Title */}
                    <h2 className="text-xl sm:text-2xl font-bold mb-3">
                        Brain Mastery - Offline ( Brave Exclusive)
                    </h2>

                    {/* Subtitle/Tagline */}
                    <p className="text-lg sm:text-xl font-light">
                        Mastering Brain Brilliance for 25X Growth
                    </p>
                </div>
            </div>
            <div>
                <Image
                    src={event}
                    alt="loading"
                    className="md:h-[600px] mx-auto"
                />
            </div>

            <div className="text-center my-14">
                <button className="cursor-pointer px-5 text-2xl font-medium py-3 bg-[#EA1C24] text-white">Registation Close</button>
            </div>


            {/* ---------------------------------------------------- */}
            <div className="bg-black">

                <Image
                    src={concert}
                    alt="loading"
                    className="md:h-[600px] mx-auto"
                />

                <div className="text-center my-14">
                    <button className="cursor-pointer px-5 text-2xl font-medium py-3 bg-[#EA1C24] text-white uppercase">Yes, I Need This</button>
                </div>

                <Image
                    src={man}
                    alt="loading"
                    className=" mx-auto"
                />


                <div>
                    <div className="bg-black py-16 px-4 sm:px-6 lg:px-8 flex justify-center">
                        <div className="w-full max-w-2xl">

                            {/* Title Section: Red text, centered */}
                            <div className="text-center mb-8">
                                <h2 className="text-red-600 text-3xl font-bold mb-1">
                                    কোর্স থেকে
                                </h2>
                                <h3 className="text-red-600 text-4xl font-extrabold">
                                    যেভাবে বেনিফিটেড হবেন
                                </h3>
                            </div>

                            {/* List of Benefits */}
                            <div className="space-y-3">
                                {benefits.map((benefit, index) => (
                                    // Individual List Item: Dark container, red bullet, white text
                                    <div
                                        key={index}
                                        className="flex items-start bg-[#111111] p-4 rounded-md shadow-inner border border-[#1a1a1a]"
                                    >
                                        {/* Custom Red Bullet Point (using a span for color) */}
                                        <span className="text-red-600 text-xl leading-none pt-0.5 mr-3 flex-shrink-0">
                                            •
                                        </span>

                                        {/* Benefit Text */}
                                        <p className="text-white text-lg leading-relaxed">
                                            {benefit}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegistrationClosedBanner;