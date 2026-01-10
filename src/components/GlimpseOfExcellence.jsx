const GlimpseOfExcellence = () => {
  return (
    <section className="relative w-full bg-white px-4 py-16 md:px-8 lg:px-20">
      {/* Background Wave Pattern (optional) */}
      <div className="absolute inset-0 bg-[url('/wave-pattern.png')] bg-cover bg-top opacity-20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold font-['Matter'] md:text-left">
              A Glimpse of Excellence <span className="text-lime-500">•</span>
            </h2>
            <p className="mt-2 max-w-md text-sm md:text-base text-gray-500 md:text-left">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>

          <button className="md:mt-8 self-start rounded-full bg-lime-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-lime-600">
            Register Now
          </button>
        </div>

        {/* Images Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Left Image */}
          <div className="lg:col-span-4">
            <img
              src="./tenius.png"
              alt="Tennis Player"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>

          {/* Right Image */}
          <div className="lg:col-span-8">
            <img
              src="./tenius_ground.png"
              alt="Tennis Courts"
              className="h-full w-full rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlimpseOfExcellence;
