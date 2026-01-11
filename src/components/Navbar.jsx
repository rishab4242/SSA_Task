import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        w-full flex items-center justify-between
        px-10 py-6
        sticky top-0 z-50
        transition-all duration-300 ease-in-out
        ${
          scrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }
      `}
    >
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src="./SSA-Logo03 1.png" alt="SSA Logo" loading="lazy" />
      </div>

      {/* Contact Us Button */}
      <div className="flex items-center justify-center border bg-white px-4 py-2 rounded-full">
        <span
          className="
            font-['Open_Sans']
            font-bold
            text-[12px]
            leading-[100%]
            capitalize
            text-black
            w-[65px]
            h-[16px]
            flex items-center justify-center
          "
        >
          Contact Us
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
