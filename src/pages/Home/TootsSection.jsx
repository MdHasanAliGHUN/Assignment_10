import React from "react";
import { FiSettings, FiCode, FiSmartphone, FiCloud } from "react-icons/fi";
import Reusable from "../../components/ReusableHeading/ReusableHeading";

const tools = [
  {
    icon: FiSettings,
    title: "Customizable Settings",
    description: "Easily configure tools to fit your project requirements.",
  },
  {
    icon: FiCode,
    title: "Developer-Friendly",
    description: "Optimized for developers with clean and efficient code.",
  },
  {
    icon: FiSmartphone,
    title: "Responsive Design",
    description: "Build tools that look great on any device and screen size.",
  },
  {
    icon: FiCloud,
    title: "Cloud Integration",
    description:
      "Seamlessly connect with cloud services for better productivity.",
  },
];
const TootsSection = () => {
  return (
    <div className="max-w-screen-2xl container mx-auto py-20 px-5">
      {/* Heading section */}
      <Reusable
        heading="All-in-one Solution for Projects"
        subheading="The toots you need"
      />

      {/* render tools start here */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-10">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg hover:shadow-md transition border-t-2  md:border-l-2 border-blue-700 cursor-pointer"
          >
            <tool.icon className="text-blue-600 text-4xl mb-4" />
            <h1 className="text-lg font-bold text-gray-800">{tool.title}</h1>
            <p className="text-gray-600 mt-2">{tool.description}</p>
          </div>
        ))}
      </div>

      {/* button----------- */}
      <div className="text-center my-10">
        <button className=" gap-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
          <span>Explore More</span>
        </button>
      </div>
    </div>
  );
};

export default TootsSection;
