import Image from "next/image";
import certificate1 from '../../../../assets/certificate1.png'
import certificate2 from '../../../../assets/certificate2.png'
import certificate3 from '../../../../assets/certificate3.png'
import certificate4 from '../../../../assets/certificate4.png'
import certificate5 from '../../../../assets/certificate5.png'
import asset11 from '../../../../assets/Asset-11.png'

const AwardCertifications = () => {
    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg">
            <h2 className="max-w-[300px] flex justify-center mx-auto text-2xl font-bold border-b pb-2 border-red-500">Award & Certifications</h2>

            <div className="md:flex gap-9 my-10">
                <Image
                    src={certificate1}
                    alt="Our Concern"
                    className="w-[50%] border-l-8 border-[#E9222A]"
                />
                <Image
                    src={certificate2}
                    alt="Our Concern"
                    className="w-[50%] border-l-8 border-[#E9222A]"
                />
            </div>
            <div>
                <Image
                    src={certificate3}
                    alt="Our Concern"
                    className="w-[50%] border-l-8 border-[#E9222A]"
                />
            </div>
            <p className="my-8 text-center text-xl font-medium">Helping more than 20 thousands People move closer to their goal of True financial freedom & true happiness</p>
            <div className="md:flex gap-10 my-10">
                <Image
                    src={certificate4}
                    alt="Our Concern"
                    className="w-[50%]"
                />
                <Image
                    src={certificate5}
                    alt="Our Concern"
                    className="w-[50%]"
                />
            </div>
            <div className="flex flex-col items-center">
                 <Image
                    src={asset11}
                    alt="Our Concern"
                    className="w-20"
                />
                <p className="text-red-600 text-xl font-medium mt-2.5">Happiness is a skill to learn, An ultimate Currency to earn</p>
            </div>
        </div>
    );
};

export default AwardCertifications;