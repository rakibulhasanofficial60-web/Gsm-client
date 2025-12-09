import Image from 'next/image';
import courseBannerIng from '../.././../../assets/84.png'

const BusinessFundamentalsOffer = () => {
    return (
        <div className="bg-black text-white px-4 py-16 font-sans overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-red-600 text-sm font-bold tracking-widest mb-4">
                    FREE OFFER WILL ENDS SOON
                </p>

                <h2 className="text-white text-2xl sm:text-3xl font-normal leading-snug mb-8">
                    <span className="font-bold">বিজনেস-এর ভিত্তিটা মজবুত করতে</span>
                    <br />
                    <span className="font-bold">&apos;বিজনেস ফান্ডামেন্টালস&apos; কোর্স।</span>
                </h2>

                <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-none mb-0">
                    <span className="text-red-600">BUSINESS</span>
                </h1>
                <p className="text-4xl sm:text-5xl font-bold tracking-wider text-blue-500 -mt-2">
                    FUNDAMENTALS
                </p>

                <Image
                    src={courseBannerIng}
                    alt="Our Concern"
                    width={800}
                    height={600}
                    className="mx-auto"
                />
            </div>
        </div>
    );
};

export default BusinessFundamentalsOffer;