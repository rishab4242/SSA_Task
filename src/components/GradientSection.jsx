const GradientSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      {/* PART 1: Title + Description */}
      <div className="max-w-4xl mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Vision & Mission
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          We aim to deliver world-class sports infrastructure and training
          facilities designed to nurture talent and excellence at every level.
        </p>
      </div>

      {/* PART 3: FLOATING CARDS (OVERLAPPED) */}
      <div className="relative z-20 -mb-28 top-20">
        <div className="grid -gap-20 sm:grid-cols-2 max-w-5xl text-left">
          {/* Card 1 */}
          <div className="text-white">
            <div className="relative left-20 rounded-xl w-[350px] h-[200px] overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf"
                className="w-full h-56 object-cover"
                alt="Tennis"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center">
                  ▶
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2 ml-20">Tennis</h3>
            <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/20 ml-20">
              4 Hard Courts
            </span>
            <p className="text-sm opacity-90 ml-20 max-w-80">
              Lorem ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-white">
            <div className="relative rounded-xl w-[350px] h-[200px] overflow-hidden mb-4">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
                className="w-full h-56 object-cover"
                alt="Accommodation"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center">
                  ▶
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
            <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/20">
              5 Star Hotel
            </span>
            <p className="text-sm opacity-90 max-w-80">
              Lorem ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>
          </div>
        </div>
      </div>

      {/* PART 2: Gradient Box */}
      {/* PART 2: Gradient Box */}
      <div
        className="
    relative
    w-full
    h-[504px]
    rounded-xl
    overflow-visible
    flex items-center
    bg-[linear-gradient(103.14deg,#002F50_11.16%,#99B81B_111.06%)]
  "
      >
        {/* Right Edge Image */}
        <img
          src="/trophy.png"
          alt="Sports"
          className="absolute right-0 top-7 object-cover z-10 h-[520px]"
        />

        {/* OVERLAPPED BOTTOM CARDS */}
        <div className="absolute right-64 -bottom-24 z-20 flex gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-xl w-64 h-72 shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d"
              alt="Training"
              className="w-full h-36 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-gray-900 mb-1">Training</h3>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full inline-block mb-2">
                Advanced
              </span>
              <p className="text-sm text-gray-700">
                Professional coaching facilities.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl w-64 h-72 shadow-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507537297725-24a1c029d3ca"
              alt="Fitness"
              className="w-full h-36 object-cover"
            />
            <div className="p-3">
              <h3 className="font-semibold text-gray-900 mb-1">Fitness</h3>
              <span className="text-xs bg-gray-200 px-2 py-1 rounded-full inline-block mb-2">
                Modern Gym
              </span>
              <p className="text-sm text-gray-700">
                Strength & conditioning zone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientSection;
