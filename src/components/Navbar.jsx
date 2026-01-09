const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between px-10 py-6">
      {/* Logo */}
      <div className="text-xl font-bold">
        <img src="./SSA-Logo03 1.png" />
      </div>

      {/* Contact Us Button */}
      <div
        className="flex items-center justify-center border
                      bg-[#ffff]
                      px-4 py-2
                      rounded-full"
      >
        <span
          className="
            font-['Open_Sans']
            font-bold
            text-[12px]
            leading-[100%]
            tracking-[0%]
            capitalize
            text-white
            w-[65px]
            h-[16px]
            flex
            items-center
            justify-center
          "
        >
          Contact Us
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
