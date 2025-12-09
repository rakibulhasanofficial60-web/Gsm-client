import Image from "next/image"
import mission from '../../../../assets/mission.png'
import vision from '../../../../assets/vision.png'
import why from '../../../../assets/why.png'

const Mission = () => {
    return (
        <div className="md:mt-8">
            <div className="flex flex-col items-center">
                <div className="text-center md:mb-3">
                    <h2 className="uppercase text-2xl font-bold">Mission</h2>
                    <p className="font-semibold my-2.5">Helping Individuals and Brands Achieve Such Epic Happiness and Success that Unicorns Envy Them.</p>
                </div>

                <Image
                    src={mission}
                    alt="Our Concern"
                    className=""
                />
            </div>
            <div className="flex flex-col items-center md:mt-10">
                <div className="text-center md:mb-3">
                    <h2 className="uppercase text-2xl font-bold">Vision</h2>
                    <p className="font-semibold my-3 w-1/2 mx-auto">"To Lead the Revolution of Happiness by Changing the Way the World Thinks about it and to Build a Happier, Healthier and Better place to Live where people can Experience the True Essence of Happiness and Flourish with Purpose and Prosperity."</p>
                </div>

                <Image
                    src={vision}
                    alt="Our Concern"
                    className=""
                />
            </div>
            <div className="flex flex-col items-center md:mt-10">
                <div className="text-center md:mb-3">
                    <h2 className="uppercase text-2xl font-bold">Purpose</h2>
                    <p className="font-semibold my-3 w-1/2 mx-auto">"To make people Happier and Wealthier by offering Transformational Coaching and Mentoring, Creating ripple effects of Happiness and Prosperity for Lasting Positive Impact."</p>
                </div>

                <Image
                    src={why}
                    alt="Our Concern"
                    className=""
                />
            </div>
        </div>
    );
};

export default Mission;