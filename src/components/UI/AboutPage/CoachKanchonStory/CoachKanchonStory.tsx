import Image from "next/image";
import img from '../../../../assets/img1.png'

const CoachKanchonStory = () => {
    return (
        // Main container div for the entire component
        <div className="bg-white text-gray-800 py-12 px-4 sm:px-6 lg:px-8 font-serif">
            <div className="max-w-4xl mx-auto text-center">

                {/* 1. Main Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold tracking-wider mb-2 text-gray-700">
                    COACH KANCHON STORY
                </h1>

                {/* 2. Subtitle Block */}
                <div className="mb-8">
                    <p className="text-red-700 text-base font-medium mb-1">
                        Author, Certified Happiness Coach
                    </p>

                    {/* Subtitle with Underline */}
                    <div className="flex flex-col items-center">
                        <p className="text-red-700 text-base font-medium">
                            Business Mentor | Investor
                        </p>
                        {/* Red Underline (mimics the screenshot's style) */}
                        <hr className="border-t-2 border-red-700 w-1/4 mt-1" />
                    </div>
                </div>

                {/* 3. Highlighted Red Text Block */}
                <div className="border-l-4 border-red-700 pl-4 py-2 mb-8 text-left">
                    <p className="text-red-700 text-xl leading-relaxed italic">
                        আপনার সাথে দেখা না হলে স্বপ্নের ভরে হয়তো আত্মহত্যাই করতে হতো। জীবনের মানেটা খুঁজে দেয়ার জন্য ধন্যবাদ, স্যার।
                    </p>
                </div>

                {/* 4. Main Story Paragraphs (Translated from the visual placement) */}

                {/* Paragraph 1 - Starts with a subtle dark color, fades out like the screenshot */}
                <p className="text-gray-500 mb-6 text-base text-left leading-loose">
                    টিম কেলান কিউ কাজ, কিন্তু আয় আয় আরও সময়ের দরকার। এরকম কিছু বোঝাতে জানতে পারলেই বেশি সচেতনতা পেতে বিনা আয়েশে জানা দেয়। তবে এই কেলানটা তৈরী থেকে কাজ করে ওঠে। গতিবেগে আয় পৌঁছানো শুরু হল, তেমনি সময়েই আর্থিক উদ্যোক্তাদের গতিবেগে শুরু করে দেওয়া যায়। কেবল এই কেলানটার কথা, না— **“হ্যাপিনেস অফ”** ডেলানটি।
                </p>

                {/* Paragraph 2 - Lighter, less readable text color to match the faded look */}
                <p className="text-gray-400 text-sm text-left leading-relaxed">
                    সারাদিন কাজ করি না কথাটা ভুললে দিনের কয়েকটা দিনও কেলানমেন্টের গতিবেগকে ডেরা করে রাখা সম্ভব। আমাদের স্বপ্নগুলো ঠিক কি জিনিস? এমন একটা প্রান্তর জুড়ে আমাদের দেখা শুরু হল। এখানে আমরা ডেরা দেবো। এখানে বসে বসে ‘হ্যাপিন অফ’ ডেলানটি নিয়েই আমরা আলোচনা করেছি। কেমন হয়, সে রকম কিছুর সঙ্গে পরিচিতি যদি থাকে, তা বুঝতেও কিন্তু সময় লাগে। তবে সে রকম নেই, আমি সেটাই বলতে চেয়েছি। কথাটা না হয় বোঝানোর জন্য, কিন্তু আমার উত্তর কি হবে, সেটা বলা সহজ নয়। কিন্তু সহজে পাওয়া গেলেও অনেকটা তো নয়।
                </p>

                <Image
                    src={img}
                    alt="Our Concern"
                    className=""
                />

            </div>
        </div>
    );
};

export default CoachKanchonStory;