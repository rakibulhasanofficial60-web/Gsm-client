import NewsCarousel from "@/components/UI/AboutPage/NewsCarousel/NewsCarousel";
import EventBanner from "@/components/UI/EventPages/EventBanner/EventBanner";
import RegistrationClosedBanner from "@/components/UI/EventPages/RegistrationClosedBanner/RegistrationClosedBanner";

const upcoming = () => {
    return (
        <div>
            <div className="bg-[#E91C24]">
                <div className="flex items-center justify-around max-w-6xl mx-auto py-3 text-white">
                    <p className="text-xl font-semibold">You missed out!</p>
                    <p className="text-xl font-semibold">Registration Closed</p>
                </div>
            </div>
            
            <EventBanner />
            <NewsCarousel />
            <RegistrationClosedBanner />
        </div>
    );
};

export default upcoming;