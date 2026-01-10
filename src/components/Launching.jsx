const Launching = () => {
  return (
    <section className="py-12">
      <div
        className="relative w-full h-[496px] bg-cover bg-center py-12"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470')",
        }}
      >
        {/* Overlay Card */}
        <div
          className="
          absolute top-1/2 -translate-y-1/2
          left-[30%] 
          xl:left-[0%] lg:left-[20%] md:left-[10%] sm:left-[5%]
          w-[420px] max-w-[90%]
           p-6
          text-white
          bg-gradient-to-b from-[#0E4C67] via-[#2F6B4F] to-[#6B8E23]
          shadow-xl
        "
        >
          {/* Launching */}
          <p className="text-sm uppercase tracking-widest opacity-90 mb-4 md:text-left">
            Launching
          </p>

          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold leading-snug mb-3 md:text-left">
            Signature Slam Academy <br /> Hunter Valley
          </h1>

          {/* Subtitle */}
          <p className="text-base font-medium mb-6 md:text-left">SSA Connectivity</p>

          {/* List */}
          <ul className="space-y-3 text-sm">
            {[
              ["Hunter Valley Golf And Country Club", "220m"],
              ["Rydges Resort Hunter Valley", "550m"],
              ["Cessnock Airport", "1.7km"],
              ["Cessnock CBD", "7km"],
              ["Nulkaba Public School", "4.8km"],
              ["Cessnock Hospital", "7.3km"],
              ["McDonalds, KFC, Oporto", "7km"],
            ].map(([place, distance], index) => (
              <li key={index} className="flex items-center">
                {/* Icon */}
                <span className="mr-3 text-lg">⌖</span>

                {/* Place name */}
                <span className="whitespace-nowrap">{place}</span>

                {/* Dashed line */}
                <span className="mx-3 flex-1 border-t border-dashed border-white/40"></span>

                {/* Distance */}
                <span className="whitespace-nowrap opacity-90">{distance}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Launching;
