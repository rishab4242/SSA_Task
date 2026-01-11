import { FaPlay } from "react-icons/fa";

const GradientSection = () => {
  const FacilityCard = ({ img }) => {
    return (
      <div className={` w-[320px]`}>
        <div className="relative rounded-xl overflow-hidden mb-4">
          <img src={img} className="w-full h-56 object-cover" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center">
              <FaPlay className="ml-1 text-sm" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full max-sm:py-8 md:py-16 bg-white">
      {/* PART 1: Title + Description */}
      <div className="max-w-4xl px-4 md:ml-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-left">
          Facilities <span className="text-lime-500 relative bottom-8">•</span>
        </h2>
        <p className="text-gray-600 text-base leading-relaxed text-left md:w-96 max-sm:mb-10">
          We aim to deliver world-class sports infrastructure and training
          facilities designed to nurture talent.
        </p>
      </div>

      {/* PART 3: FLOATING CARDS (OVERLAPPED) */}
      <div className="hidden lg:block">
        <div className="relative z-20 -mb-28 top-20 max-sm:hidden">
          <div className="grid -gap-20 sm:grid-cols-2 max-w-5xl text-left">
            {/* Card 1 */}
            <div className="text-white">
              <div className="relative  left-20 rounded-xl w-[320px] overflow-hidden mb-4">
                <img
                  loading="lazy"
                  src="tennius.png"
                  className="w-full h-56 object-cover"
                  alt="Tennis"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=CGRzfUccmNE"
                    className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center"
                  >
                    <FaPlay className="ml-1 text-sm" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2 ml-20">Tennis</h3>
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/20 ml-20">
                9 Clay Courts
              </span>
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/20 ml-2">
                4 Hard Courts
              </span>
              <p className="text-sm opacity-90 ml-20 max-w-80">
                Lorem ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-white max-sm:hidden">
              <div className="relative rounded-xl w-[320px] overflow-hidden mb-4">
                <img
                  loading="lazy"
                  src="house.png"
                  className="w-full h-56 object-cover"
                  alt="Accommodation"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=kvQUx9g9Xo4"
                    className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center"
                  >
                    <FaPlay className="ml-1 text-sm" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">Accommodation</h3>
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-white/20">
                5 Star Hotel
              </span>
              <p className="text-sm opacity-90 max-w-80">
                Lorem ipsum has been the industry's standard dummy text ever
                since the 1500s.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-sm:hidden">
          {/* OVERLAPPED CARDS – OUTSIDE GRADIENT */}
          <div className="absolute right-44 top-80 z-30 hidden lg:flex gap-8 text-left">
            {/* Card 1 */}
            <div className="text-black w-[320px]">
              <div className="relative rounded-xl overflow-hidden mb-4">
                <img
                  loading="lazy"
                  src="football.png"
                  className="w-full h-56 object-cover"
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=FrPECNUgEn8"
                    className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center"
                  >
                    <FaPlay className="ml-1 text-sm" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">Training</h3>
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-[#99B81B] text-white">
                Advanced
              </span>
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-[#99B81B] text-white ml-2">
                Football Training
              </span>

              <p className="text-sm opacity-90">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-black w-[320px] max-sm:hidden">
              <div className="relative rounded-xl overflow-hidden mb-4">
                <img
                  loading="lazy"
                  src="gymman.png"
                  className="w-full h-56 object-cover"
                  alt=""
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <a
                    href="https://www.youtube.com/watch?v=7YJ9jMgbdc8"
                    className="w-12 h-12 rounded-full bg-white/90 text-black flex items-center justify-center"
                  >
                    <FaPlay className="ml-1 text-sm" />
                  </a>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-2">Fitness</h3>
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-[#99B81B] text-white">
                Modern Gym
              </span>
              <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-[#99B81B] text-white ml-2">
                Maintain Physics
              </span>

              <p className="text-sm opacity-90">
                Strength & conditioning zone.
              </p>
            </div>
          </div>
        </div>

        {/* PART 2: Gradient Box */}
        <div className="relative w-full h-[504px]  overflow-visible flex items-center bg-[linear-gradient(103.14deg,#002F50_11.16%,#99B81B_111.06%)]">
          {/* Right Edge Image */}
          <img
            loading="lazy"
            src="/trophy.png"
            alt="Sports"
            className="absolute right-0 top-7 object-cover z-10 h-[520px]"
          />
        </div>
      </div>

      {/* MOBILE + TABLET STRUCTURE */}
      <div className="block lg:hidden ">
        <div className="relative max-w-5xl mx-auto">
          {/* TOP 2 CARDS (HALF OVER BG) */}
          <div className="grid grid-cols-2 gap-4 justify-items-center relative z-20 -mb-20">
            <a href="https://www.youtube.com/watch?v=CGRzfUccmNE">
              {" "}
              <FacilityCard img="tennius.png" loading="lazy" />
            </a>
            <a href="https://www.youtube.com/watch?v=kvQUx9g9Xo4">
              <FacilityCard img="house.png" loading="lazy" />
            </a>
          </div>

          {/* BG DIV */}
          <div className="w-full h-52 sm:h-64 bg-[linear-gradient(103.14deg,#002F50_11.16%,#99B81B_111.06%)] rounded-xl relative z-10"></div>

          {/* BOTTOM 2 CARDS (HALF OVER BG) */}
          <div className="grid grid-cols-2 gap-4 justify-items-center relative z-20 -mt-20">
            <a href="https://www.youtube.com/watch?v=FrPECNUgEn8">
              <FacilityCard img="football.png" loading="lazy" />
            </a>
            <a href="https://www.youtube.com/watch?v=7YJ9jMgbdc8">
              <FacilityCard img="gymman.png" loading="lazy" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientSection;
