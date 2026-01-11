import React from "react";

const Events = () => {
  return (
    <section className="w-full mt-16 md:mt-48">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        {/* LEFT CARD – OUR COACHES */}
        <div className="relative overflow-hidden h-[280px]">
          {/* Background Image */}
          <img
            loading="lazy"
            src="event1.png"
            alt="Our Coaches"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8">
            <h3 className="text-white text-2xl font-semibold mb-2 flex items-center gap-2">
              Our Coaches
              <span className="w-2 h-2 bg-lime-400 rounded-full" />
            </h3>

            <p className="text-white/80 text-sm max-w-sm mb-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>

            <button className="flex items-center gap-2 text-white text-sm group w-fit">
              Read More
              <span className="transform group-hover:translate-x-1 transition">
                →
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT CARD – EVENTS */}
        <div className="relative  overflow-hidden h-[280px] bg-[#99B81B]">
          {/* Decorative Image */}
          <img
            loading="lazy"
            src="event2.png"
            alt=""
            className="absolute right-0 bottom-0 h-full object-contain opacity-20"
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center px-8">
            <h3 className="text-white text-2xl font-semibold mb-2 flex items-center gap-2">
              Events
              <span className="w-2 h-2 bg-white rounded-full" />
            </h3>

            <p className="text-white/90 text-sm max-w-sm mb-4">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s.
            </p>

            <button className="flex items-center gap-2 text-white text-sm group w-fit">
              Read More
              <span className="transform group-hover:translate-x-1 transition">
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
