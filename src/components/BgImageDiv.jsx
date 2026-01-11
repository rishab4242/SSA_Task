const BgImageDiv = () => {
  return (
    <div
      className="
        w-full 
        min-h-[320px] sm:min-h-[400px] md:min-h-[480px] lg:min-h-[520px]
        flex items-center 
        bg-cover bg-center 
        
        relative
      "
      style={{
        loading: "lazy",
        backgroundImage: "url('./bg1.png')",
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl mx-auto">
        {/* Main Quote */}
        <span
          className="
            max-sm:ml-2
            block 
            font-['Matter'] font-semibold
            text-lg sm:text-xl md:text-2xl lg:text-[35px]
            leading-snug md:leading-tight
          "
        >
          “We have created an environment ideal for building craft. Our goal is
          to be recognized as the best tennis performance centre in the world.”
        </span>

        {/* Horizontal Line */}
        <div className="mt-4 sm:mt-6 mb-3 sm:mb-4 w-20 h-[2px] bg-white max-sm:ml-2" />

        {/* Name & Designation */}
        <div className="font-['Matter'] max-sm:ml-2">
          <p className="text-sm sm:text-base font-semibold">John Doe</p>
          <p className="text-xs sm:text-sm opacity-80">Chairman</p>
        </div>
      </div>
    </div>
  );
};

export default BgImageDiv;
