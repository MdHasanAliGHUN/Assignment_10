import React from "react";
import ReusableHeading from "../../components/ReusableHeading/ReusableHeading";
import { FaApple, FaGoogle, FaAmazon, FaMicrosoft, FaFacebook } from "react-icons/fa";

const CompanyLogos = () => {
  const logos = [
    { icon: FaApple, name: "Apple" },
    { icon: FaGoogle, name: "Google" },
    { icon: FaAmazon, name: "Amazon" },
    { icon: FaMicrosoft, name: "Microsoft" },
    { icon: FaFacebook, name: "Facebook" },
  ];
  return (
    <div className=" bg-colorBG">
      <div className="max-w-screen-2xl container mx-auto py-20 px-5">
        <ReusableHeading
          heading="Companies We've Worked With"
          subheading="Our Trusted Partners"
          description="We’ve partnered with some of the most innovative and leading companies to bring the best solutions to you."
        />

        {/* Logo container */}
        <div>
            <div className="flex items-center justify-around md:space-x-14 space-x-8  animate-scroll">
                {
                    logos.map((logo, index) => (
                        <div key={index}>
                            <logo.icon className="text-blue-600 text-4xl cursor-pointer"/>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyLogos;
