const HeroSection = () => {
  return (
    <section
      className="
    w-full
    h-[768px]
    border
    border-black
    relative
    overflow-hidden
  "
    >
      {/* GIF Background */}
      <div
        className="
      absolute
      inset-0
      bg-no-repeat
      bg-center
      bg-cover
    "
        style={{
          backgroundImage: "url('/hero.gif')",
        }}
      />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-start justify-center">
        <div
          className="
        w-[293px]
        h-[22px]
        mt-[242px]
        text-center
        font-['Matter']
        font-bold
        text-[18px]
        leading-[100%]
        tracking-[0.3em]
        uppercase
        text-white
        sm:w-[220px] sm:text-[16px] sm:mt-[150px] sm:h-auto
        xs:w-[180px] xs:text-[14px] xs:mt-[120px]
        max-sm:text-base
        max-sm:mb-2
      "
        >
          SSA HUNTER VALLEY
        </div>
        {/* Hero Main Heading */}
        <div
          className="
        absolute
        top-[273px]
        left-1/2
        -translate-x-1/2
        w-[693px]
        text-center
        font-['Matter']
        uppercase
        text-white
        sm:w-[90%] sm:top-[200px] sm:px-4
        xs:static xs:transform-none xs:w-full xs:text-left xs:px-6 xs:mt-4
      "
        >
          <div
            className="
          text-[32px]
          font-medium
          leading-[120%]
          tracking-[0.02em]
          sm:text-[24px]
          xs:text-[20px]
          max-sm:text-[22px]
        "
          >
            GROW YOUR GAME WITH THE
          </div>

          <div
            className="
          text-[35px]
          font-bold
          leading-[110%]
          tracking-[0.02em]
          sm:text-[28px]
          xs:text-[24px]
        "
          >
            PROFESSIONALS
          </div>
          <div className="mt-2 flex justify-center xs:justify-start">
            <span className="block w-72 h-[1px] bg-white"></span>
          </div>
        </div>
      </div>
      {/* Gradient Bar with Text */}
      <div
        className="
      absolute
      top-[385px]
      left-1/2
      -translate-x-1/2
      w-[638px]
      h-[35px]
      flex
      items-center
      justify-center
      text-center
      font-['Matter']
      font-bold
      text-[12px]
      leading-[100%]
      tracking-[0.35em]
      uppercase
      text-white
      rounded-full
      sm:w-[90%] sm:top-[320px] sm:text-[10px]
      xs:static xs:transform-none xs:w-full xs:mt-6 xs:px-6 xs:h-auto xs:text-[10px]
    "
        style={{
          background:
            "linear-gradient(90deg, rgba(205,237,78,0) 3.45%, #D2F24F 50.62%, rgba(210,242,79,0) 91.38%)",
          boxShadow: "0px 4px 4px rgba(0,0,0,0.25)",
        }}
      >
        ADOPT • NURTURE • DELIVER
      </div>
      {/* CTA Button */}
      <button
        className="
      absolute
      top-[450px]
      left-1/2
      -translate-x-1/2
      w-[140px]
      h-[45px]
      rounded-[50px]
      border
      border-[0.5px]
      border-[#99B81B]
      flex
      items-center
      justify-center
      bg-transparent
      sm:top-[400px] sm:w-[120px] sm:h-[40px]
      xs:static xs:transform-none xs:mt-8 xs:w-full xs:max-w-xs xs:h-[40px]
    "
      >
        <span
          className="
        w-[79px]
        h-[16px]
        flex
        items-center
        justify-center
        font-['Matter']
        font-normal
        text-[13px]
        leading-[100%]
        tracking-[0]
        capitalize
        text-white
        sm:text-[12px]
        xs:text-[14px]
      "
        >
          Get Started
        </span>
      </button>
      {/* Scroll Down Arrow */}
      <div
        className="
      absolute
      top-[686px]
      left-1/2
      -translate-x-1/2
      flex
      flex-col
      items-center
      sm:top-[620px]
      xs:static xs:transform-none xs:mt-8
    "
      >
        {/* Arrow Shaft */}
        <div className="w-[1.5px] h-[35px] bg-[#CEED4E]" />

        {/* Arrow Head */}
        <div className="flex -mt-[2px]">
          <span className="w-[8px] h-[1.5px] bg-[#CEED4E] rotate-[45deg] origin-right" />
          <span className="w-[8px] h-[1.5px] bg-[#CEED4E] rotate-[-45deg] origin-left" />
        </div>
      </div>

      <div
        className="absolute top-[470px] right-0 flex flex-col items-end text-white
      sm:top-[400px] sm:right-4 sm:w-[180px]
      xs:static xs:mt-10 xs:w-full xs:px-6 xs:flex-row xs:justify-between xs:items-center xs:text-sm
    "
      >
        {/* WEATHER LABEL */}
        <div
          className="flex items-center gap-1 pr-0 mb-2
        xs:flex-col xs:items-start xs:gap-0 xs:mb-0 max-sm:mt-10
      "
        >
          <span className="text-[#CEED4E] text-sm">{`<<`}</span>

          <div className="flex items-center gap-2">
            <span className="text-[11px] tracking-widest font-semibold">
              WEATHER
            </span>

            {/* Horizontal Green Light Line */}
            <span className="w-[22px] h-[1px] bg-[#CEED4E] shadow-[0_0_6px_#CEED4E]" />
          </div>
        </div>

        {/* WEATHER CARD */}
        <div
          className="bg-[#99B81B47]/80 backdrop-blur-sm px-5 py-4 w-[210px]
        xs:flex-1 xs:max-w-[140px] xs:px-4 xs:py-3
      "
        >
          <div className="flex justify-between items-center">
            {/* Left: Hunter Valley + 19°C */}
            <div>
              <p className="text-white font-medium text-sm leading-none mb-1">
                Hunter Valley
              </p>
              <div className="flex items-baseline gap-1">
                <span
                  className="text-white text-[42px] font-bold leading-none
                xs:text-[28px]
              "
                >
                  19
                </span>
                <span
                  className="text-white text-lg font-semibold relative bottom-4
                xs:text-base xs:bottom-2
              "
                >
                  °C
                </span>
              </div>
            </div>

            {/* Right: Weather + Date */}
            <div
              className=" text-white text-xs opacity-90 leading-tight
            xs:hidden
          "
            >
              <p>Weather</p>
              <p>Saturday, 8 pm</p>
            </div>
          </div>
        </div>

        {/* MENU ITEMS */}
        <div
          className="mt-10 pr-0 flex flex-col gap-6 text-[11px] tracking-widest
        xs:mt-0 xs:flex-row xs:gap-4 xs:text-xs xs:ml-4 xs:pr-0
      "
        >
          <div className="flex items-center gap-1 cursor-pointer">
            <span className="text-[#CEED4E]">{`<<`}</span>

            <div className="flex items-center gap-2">
              <span>ONGOING MATCHES</span>

              {/* Horizontal Green Light Line */}
              <span className="w-[22px] h-[1px] bg-[#CEED4E] shadow-[0_0_6px_#CEED4E]" />
            </div>
          </div>

          <div
            className="flex items-center gap-1 cursor-pointer ml-[80px]
          xs:ml-0
        "
          >
            <span className="text-[#CEED4E]">{`<<`}</span>

            <div className="flex items-center gap-2">
              <span>SCORE</span>

              {/* Horizontal Green Light Line */}
              <span className="w-[22px] h-[1px] bg-[#CEED4E] shadow-[0_0_6px_#CEED4E]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
