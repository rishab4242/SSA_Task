const KeyFeatures = () => {
  const features = [
    "First venue in the world",
    "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
    "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
    "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
    "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius",
    "First one stop tennis academy in Asia Pacific",
  ];

  return (
    <section className="relative w-full bg-white py-16 px-4 md:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold font-['Matter'] text-left">
              Key Features <span className="text-lime-500">•</span>
            </h2>
            <p className="mt-2 text-gray-500 max-w-md text-sm md:text-base text-left">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>

          <button className="self-start rounded-full bg-lime-500 px-6 py-2 text-sm font-semibold text-white hover:bg-lime-600 transition mt-4">
            Register Now
          </button>
        </div>

        {/* Features – Left & Right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
          {/* Left Column */}
          <div className="space-y-5">
            {features.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="mt-1 text-lime-500">➜</span>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* Right Column (Same Points) */}
          <div className="space-y-5">
            {features.map((item, index) => (
              <div key={`right-${index}`} className="flex items-start gap-3">
                <span className="mt-1 text-lime-500">➜</span>
                <p className="text-gray-700 text-sm md:text-base leading-relaxed text-left">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
