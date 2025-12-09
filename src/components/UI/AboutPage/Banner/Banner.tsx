import Image from "next/image";
import imgBanner from '../../../../assets/scrnshot.png'

const Banner = () => {
    return (
        <div className="">
            <Image
                src={imgBanner}
                alt="Our Concern"
                className="mx-auto w-full h-[500px]"
            />
        </div>
    );
};

export default Banner;