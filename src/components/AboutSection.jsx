import { useState } from "react";

const tabData = {
  "About Us": {
    title: "About Us",
    description:
      "We are a world-class tennis academy committed to building future grand slam champions through advanced infrastructure, elite coaching, and international standards.",
    stats: [
      { value: 20, label: "Courts" },
      { value: 12, label: "Coaches" },
      { value: 17, label: "Years" },
      { value: 10, label: "Clubs" },
    ],
    images: ["tennius.png", "tennius2.png", "tenius3.png", "tennius4.png"],
  },
  Coaches: {
    title: "Our Coaches",
    description:
      "Our coaching team consists of globally certified professionals with years of experience in international tournaments and player development.",
    stats: [
      { value: 20, label: "Courts" },
      { value: 12, label: "Coaches" },
      { value: 17, label: "Years" },
      { value: 10, label: "Clubs" },
    ],
    images: ["coach1.png", "coach2.png", "coach3.png", "coach4.png"],
  },
  Vision: {
    title: "Our Vision",
    description:
      "To be the first venue in the world with 60 multi-surface courts and a one-stop tennis academy producing grand slam champions.",
    stats: [
      { value: 20, label: "Courts" },
      { value: 12, label: "Coaches" },
      { value: 17, label: "Years" },
      { value: 10, label: "Clubs" },
    ],
    images: ["vision1.jfif", "vision2.jfif", "vision3.jfif", "vision4.jfif"],
  },
  Mission: {
    title: "Our Mission",
    description:
      "To nurture talent with world-class training, discipline, innovation, and an environment that builds champions for the future.",
    stats: [
      { value: 20, label: "Courts" },
      { value: 12, label: "Coaches" },
      { value: 17, label: "Years" },
      { value: 10, label: "Clubs" },
    ],
    images: ["mission1.png", "mission2.png", "mission3.png", "mission4.png"],
  },
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("About Us");
  const current = tabData[activeTab];

  return (
    <section className="w-full px-4 md:px-10 lg:px-20 py-16 bg-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/4">
          <img
            loading="lazy"
            src="/a 1.png"
            alt="Academy"
            className="w-full rounded-xl object-cover"
          />
        </div>

        <div className="w-full lg:w-1/2 text-left lg:text-center">
          <p className="text-lg md:text-xl font-medium text-gray-800 leading-relaxed">
            To be the first venue in the world to have{" "}
            <span className="font-semibold text-[#99B81B]">
              60 multi surface courts
            </span>{" "}
            at one location and establish first one stop tennis academy in the
            Asia Pacific producing{" "}
            <span className="font-semibold">grand slam champions.</span>
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap md:justify-center gap-6 max-sm:mt-10">
        {Object.keys(tabData).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 text-sm md:text-base font-semibold rounded-full transition-all
              ${
                activeTab === tab
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
        {/* Left Content */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:text-left text-left">
            {current.title}
          </h3>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg md:text-left text-left">
            {current.description}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10 md:text-left text-left">
            {current.stats.map((item, index) => (
              <div key={index}>
                <h4 className="text-3xl font-bold text-[#99B81B]">
                  {item.value}
                </h4>
                <p className="text-sm uppercase tracking-wide text-gray-500">
                  {item.label}
                </p>
              </div>
            ))}
            {/* Read More */}
            <a className="mt-2 text-sm py-3 px-4 max-sm:text-center left-[135px] bg-[#99B81B] rounded-full border font-semibold text-white  hover:text-gray-600 transition">
              Read More
            </a>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          {current.images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                loading="lazy"
                src={img}
                alt={`${current.title} ${index + 1}`}
                className="w-full h-40 md:h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
