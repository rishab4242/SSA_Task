const testimonials = [
  {
    name: "John Anderson",
    role: "Professional Player",
    image: "/Mask group1.jpg",
    text: "The academy provides world-class facilities and professional coaching. Highly recommended.",
  },
  {
    name: "Sarah Williams",
    role: "Parent",
    image: "Mask group2.jpg",
    text: "My child’s confidence and performance have improved drastically after joining this academy.",
  },
  {
    name: "Michael Brown",
    role: "Tennis Coach",
    image: "Mask group3.jpg",
    text: "A perfect place for developing talent with discipline, passion, and modern infrastructure.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="w-full px-6 py-16 bg-white">
      {/* Top Content */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
        {/* Left Content */}
        <div className="max-w-xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 text-left">
            What Our Clients Say <span className="text-[#99B81B]">•</span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed text-left">
            Hear from our players, parents, and professionals who have
            experienced our academy and training programs first-hand.
          </p>
        </div>

        {/* View All Button */}
        <div className="mt-6 md:mt-0">
          <button
            className="px-4 py-2 rounded-2xl border bg-[#99B81B] text-white transition-all"
          >
            View All
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-sm hover:shadow-md transition"
          >
            {/* Image */}
            <div className="w-full h-80 rounded-lg overflow-hidden mb-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h3 className="text-lg font-semibold text-gray-900 text-left">
              {item.name}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-3 text-left italic">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
