const Programs = () => {
  const programs = [
    {
      title: "Academy",
      subtitle: "Live and train with us",
      image: "/program1.png",
    },
    {
      title: "Camps",
      subtitle: "Train like a pro with us",
      image: "/program2.jpg",
    },
    {
      title: "Performance",
      subtitle: "Elevate your game with us",
      image: "/program3.png",
    },
  ];

  return (
    <section className="w-full bg-white px-4 py-16 md:px-8 lg:px-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold font-['Matter'] text-left">
              Programs <span className="text-lime-500">•</span>
            </h2>
            <p className="mt-3 max-w-md text-sm md:text-base text-gray-500 text-left">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>

          <button className="md:mt-24 self-start rounded-full bg-lime-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-lime-600">
            Register Now
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((item, index) => (
            <div
              key={index}
              className="group relative h-[420px] overflow-hidden rounded-xl"
            >
              {/* Image */}
              <img
                loading="lazy"
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Text */}
              <div className="absolute bottom-6 left-6 z-10 text-white">
                <h3 className="text-xl font-semibold font-['Matter']">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm opacity-90">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
