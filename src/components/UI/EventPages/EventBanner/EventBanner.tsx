import Image from "next/image";
import eventbanner from '../../../../assets/event.png';

const EventBanner = () => {
    return (
        <div className="bg-black flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">

            {/* Title text */}
            <h1 className="text-white text-2xl sm:text-3xl font-bold text-center mb-10">
                জীবনে সুখ ও সমৃদ্ধির ভিত্তি গড়তে ব্রেইন মাস্টারি
            </h1>

            {/* Main card/content area */}
            <div className="bg-white p-6 sm:p-10 max-w-lg w-full rounded-lg shadow-2xl">

                <div className="flex justify-center mb-6">
                    <div className="text-center">
                        <Image
                            src={eventbanner}
                            alt="loading"
                            className="w-96 mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Event Details Section (Date, Time, Location) */}
            <div className="mt-8 bg-[#231F20] px-10 py-4 text-white flex flex-col sm:flex-row justify-center items-center w-full max-w-4xl">

                {/* Date */}
                <div className="flex items-center mx-4 my-2 sm:my-0">
                    <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                    <span className="text-base text-gray-300">
                        8th March, 2025, Saturday
                    </span>
                </div>

                {/* Time */}
                <div className="flex items-center mx-4 my-2 sm:my-0">
                    <svg className="w-6 h-6 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-base text-gray-300">
                        11 AM – 03 PM
                    </span>
                </div>

                {/* Location */}
                <div className="flex items-center mx-4 my-2 sm:my-0">
                    <svg className="w-6 h-6 mr-2 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span className="text-base text-gray-300">
                        BICC, Agargaon, Sher-E-Bangla Nagar, Dhaka - 1207
                    </span>
                </div>
            </div>

        </div>
    );
};

export default EventBanner;