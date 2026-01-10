const BgImageDiv = () => {
  return (
    <div
      className="w-full h-96 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('./bg1.png')",
      }}
    >
      <div className="text-white">
        {/* Main Quote */}
        <span className="block w-[850px] font-['Matter'] font-semibold text-[35px] leading-[100%]">
          “We have created an environment ideal for building craft. Our goal is
          to be recognized as the best tennis performance centre in the world.”
        </span>

        {/* Horizontal Line */}
        <div className="mt-6 mb-4  h-[2px] bg-white" />

        {/* Name & Designation */}
        <div className="text-left font-['Matter']">
          <p className="text-base font-semibold">John Doe</p>
          <p className="text-sm opacity-80">Chairman</p>
        </div>
      </div>
    </div>
  );
};

export default BgImageDiv;
