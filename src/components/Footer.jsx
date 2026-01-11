import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full bg-white">
      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* LEFT – LOGO */}
          <div className="flex md:block justify-center md:justify-start">
            <img
              loading="lazy"
              src="footer_logo.png"
              alt="SSA Logo"
              className="w-36 md:ml-24 mt-6 md:mt-10"
            />
          </div>

          {/* CENTER – LINKS */}
          <div className="space-y-6 text-sm text-gray-700">
            {/* TOP ROW – 6 LINKS */}
            <div
              className="
                grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
                gap-y-3 gap-x-6
                w-full lg:w-[50rem]
              "
            >
              <a href="#" className="hover:text-black">
                About Us
              </a>
              <a href="#" className="hover:text-black">
                Coaches
              </a>
              <a href="#" className="hover:text-black">
                News
              </a>
              <a href="#" className="hover:text-black">
                Matches
              </a>
              <a href="#" className="hover:text-black">
                Events
              </a>
              <a href="#" className="hover:text-black">
                FAQs
              </a>
            </div>

            {/* BOTTOM ROW – 3 LINKS */}
            <div
              className="
                grid grid-cols-2 sm:grid-cols-3
                gap-y-3 gap-x-6
                w-full md:w-[24rem]
              "
            >
              <a href="#" className="hover:text-black">
                Programs
              </a>
              <a href="#" className="hover:text-black">
                Amenities
              </a>
              <a href="#" className="hover:text-black">
                Blogs
              </a>
            </div>

            {/* CONTACT SECTION */}
            <div
              className="
                pt-6 border-t border-gray-200
                flex flex-col md:flex-row
                gap-10 md:gap-32
                w-full lg:w-[50rem]
              "
            >
              {/* LEFT */}
              <div className="space-y-2 text-left">
                <h4 className="text-[#99B81B] font-medium mb-4">
                  Signature Slam Academy
                </h4>
                <p>30 Wills Hill Road, Lovedale, NSW</p>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <FaPhoneAlt className="text-[#99B81B]" />
                    <span>+91 5642589752</span>
                  </p>

                  <p className="flex items-center gap-2">
                    <MdEmail className="text-[#99B81B]" />
                    <span>info@ssagroup.com</span>
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div>
                <h4 className="text-[#99B81B] font-medium mb-2">
                  Connect with us
                </h4>
                <div className="flex gap-4 text-lg">
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="hover:text-black transition"
                  >
                    <FaFacebookF />
                  </a>

                  <a
                    href="#"
                    aria-label="Twitter"
                    className="hover:text-black transition"
                  >
                    <FaXTwitter />
                  </a>

                  <a
                    href="#"
                    aria-label="Instagram"
                    className="hover:text-black transition"
                  >
                    <FaInstagram />
                  </a>

                  <a
                    href="#"
                    aria-label="YouTube"
                    className="hover:text-black transition"
                  >
                    <FaYoutube />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (EMPTY – DESKTOP ALIGNMENT) */}
          <div className="hidden md:block" />
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-gradient-to-r from-[#002F50] to-[#99B81B] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          <span>Terms And Condition</span>
          <span>© 2023 All Rights Reserved www.signatureslamacademy.com</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
