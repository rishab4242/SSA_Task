import Marquee from "react-fast-marquee";

const TextMarquee = () => {
  const texts = ["ADOPT", "NURTURE", "DELIVER", "ADOPT", "NURTURE", "DELIVER"];

  return (
    <div className="w-full bg-white py-4">
      <Marquee
        direction="left"
        scrollamount="6"
        speed={60}
        gradient={false}
        pauseOnHover
        className="w-full overflow-hidden whitespace-nowrap leading-none"
      >
        {texts.map((text, index) => {
          const isOutlined = index % 3 === 1;

          return (
            <div key={index} className="flex items-center">
              <span
                className={`mx-6 text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px]
                font-bold tracking-widest uppercase
                ${isOutlined ? "stroke-text" : "text-[#99B81B]"}`}
              >
                {text}
              </span>

              <span
                className="mx-6 text-[#99B81B]
                           text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px]
                           leading-none"
              >
                ·
              </span>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default TextMarquee;
