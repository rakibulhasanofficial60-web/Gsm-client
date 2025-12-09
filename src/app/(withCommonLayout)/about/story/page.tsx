import Banner from "@/components/UI/AboutPage/Banner/Banner";
import CoachKanchonStory from "@/components/UI/AboutPage/CoachKanchonStory/CoachKanchonStory";
import NewsCarousel from "@/components/UI/AboutPage/NewsCarousel/NewsCarousel";
import AwardCertifications from "@/components/UI/AboutPage/AwardCertifications/AwardCertifications";
import Mission from "@/components/UI/AboutPage/Mission/Mission";

const KanchonStory = () => {
    return (
        <div>
            <Banner />
            <NewsCarousel />
            <CoachKanchonStory />
            <AwardCertifications />
            <Mission />
        </div>
    );
};

export default KanchonStory;