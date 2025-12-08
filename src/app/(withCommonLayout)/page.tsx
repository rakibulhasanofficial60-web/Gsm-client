import Author from "@/components/UI/HomePage/Author/Author";
import BusinessTraining from "@/components/UI/HomePage/BusinessTrainning/BusinessTrainning";
import CollaborationShowcase from "@/components/UI/HomePage/CollaborationShowcase/CollaborationShowcase";
import Dream from "@/components/UI/HomePage/Dream/Dream";
import DualContentCard from "@/components/UI/HomePage/DualContentCard/DualContentCard";
import FeaturedBooks from "@/components/UI/HomePage/FeaturedBooks/FeaturedBooks";
import FeatureIn from "@/components/UI/HomePage/FeatureIn/FeatureIn";
import GrowthGatewaySection from "@/components/UI/HomePage/GrowthGatewaySection/GrowthGatewaySection";
import Helping from "@/components/UI/HomePage/Helping/Helping";
import HeroBanner from "@/components/UI/HomePage/HeroSection/HeroSection";
import KanchonsKeynotes from "@/components/UI/HomePage/KanchonsKeynotes/KanchonsKeynotes";
import RecognizedExcellence from "@/components/UI/HomePage/RecognizedExcellence";
import UnforgettableExperiences from "@/components/UI/HomePage/UnforgettableExperiences/UnforgettableExperiences";


export default async function HomePage() {
  return (
    <>
      <HeroBanner
        heading={""}
        tagline={""}
        ctaText={""}
        heroImageSrc={""}
        bgImageSrc={
          "https://cdn.pixabay.com/photo/2016/08/16/09/53/international-conference-1597531_640.jpg"
        }
      />
      <FeatureIn />
      <Helping />
      <BusinessTraining />
      <Dream />
      <Author />


      <FeaturedBooks />
      <GrowthGatewaySection />
      <RecognizedExcellence />
      <KanchonsKeynotes />
      <UnforgettableExperiences />
      <DualContentCard />
      <CollaborationShowcase />
    </>
  );
}