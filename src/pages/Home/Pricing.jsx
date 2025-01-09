import React, { useState } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import ReusableHeading from "../../components/ReusableHeading/ReusableHeading";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Freelancer",
      monthlyPrice: 25,
      yearlyPrice: 250, // 25 * 12
      saves: "$25 USD per month, paid annually",
      features: [
        "1 Project",
        "Basic Support",
        "Access to all templates",
        "5GB Storage",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: 65,
      yearlyPrice: 650, // 65 * 12
      saves: "$55 USD per month, paid annually",
      features: [
        "5 Projects",
        "Priority Support",
        "Access to all templates",
        "25GB Storage",
        "Advanced Analytics",
      ],
    },
    {
      name: "Agency",
      monthlyPrice: 95,
      yearlyPrice: 950, // 95 * 12
      saves: "$95 USD per month, paid annually",
      features: [
        "Unlimited Projects",
        "24/7 Support",
        "Access to all templates",
        "Unlimited Storage",
        "Custom Branding",
        "Team Collaboration",
      ],
    },
  ];

  const [isYearly, setIsYearly] = useState(false);
  return (
    <div className="section-container-style">
      <ReusableHeading
        heading="Choose Your Plan"
        subheading="Pricing"
        description={
          "Our pricing plans are flexible and designed to fit your needs. Choose a plan that works best for you."
        }
      />

      {/* toggle for yearly/monthly plan */}
      <div className="form-control flex justify-center items-center mb-10">
        <label className="label cursor-pointer">
          <span className="label-text text-black font-bold">
            {isYearly ? "Yearly Pricing" : "Monthly Pricing"}
          </span>
          <input
            onChange={() => setIsYearly(!isYearly)}
            type="checkbox"
            className="toggle toggle-primary ml-5"
            checked={isYearly}
          />
        </label>
      </div>

      {/* pricing plan */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((pricingPlan, index) => {
            const { name, monthlyPrice, yearlyPrice, saves, features } =
              pricingPlan;
            return (
              <div
                key={index}
                className="bg-white border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Top content */}
                <div className="p-5 text-center">
                  <h3 className="text-2xl font-semibold text-gray-800 my-3">
                    {name}
                  </h3>
                  <p className="text-gray-500 mb-5">
                    Best for {name.toLowerCase()}s
                  </p>

                  {/* pricing---------- */}
                  <div className=" text-3xl font-bold text-gray-800">
                    ${isYearly ? yearlyPrice : monthlyPrice}
                    <span className="text-sm text-gray-500">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <p className="mt-5 text-blue-800">{isYearly ? saves : ""}</p>
                </div>

                {/* Button */}
                <div className="p-5 text-center">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                    Choose {name}
                  </button>
                </div>
                {/* features */}
                <div className=" p-5 md:px-12 md:py-5">
                  <ul>
                    {
                        features.map((feature, index) => {
                            return <li key={index} className="flex items-center gap-3">
                                <IoCheckmarkOutline/>
                                {feature}
                            </li>
                        })
                    }
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
