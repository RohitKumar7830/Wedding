import { FaInstagram, FaFacebook, FaYoutube, FaGithub } from "react-icons/fa";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const Footer = () => {
  const linkClasses = "hover:underline transition-all duration-300 ease-in-out";
  const iconClasses = "text-xl hover:text-blue-500 transition-colors duration-300";

  return (
    <footer className="px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-y-8 md:gap-y-0">
        <div className="w-full md:w-1/4">
          <Logo />
          <p className="text-slate-500 text-xs mt-2">
            ShadiBanao © {new Date().getFullYear()} All rights reserved
          </p>
        </div>

        <div className="w-full md:w-1/2 flex gap-x-[20%] feature:items-center feature:justify-center">
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold text-gray-700 mb-2">Company</h3>
            <Link to="/stories" className={`text-gray-500 ${linkClasses}`}>Stories</Link>
            <Link to="/about" className={`text-gray-500 ${linkClasses}`}>About</Link>
            <Link to="/contact" className={`text-gray-500 ${linkClasses}`}>Contact</Link>
            <Link to="/legal" className={`text-gray-500 ${linkClasses}`}>Legal</Link>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="font-semibold text-gray-700 mb-2">Resources</h3>
            <Link to="/style" className={`text-gray-500 ${linkClasses}`}>Style</Link>
            <Link to="/instagram-guide" className={`text-gray-500 ${linkClasses}`}>Instagram Guide</Link>
            <Link to="/licensing" className={`text-gray-500 ${linkClasses}`}>Licensing</Link>
            <Link to="/changelog" className={`text-gray-500 ${linkClasses}`}>Changelog</Link>
          </div>
        </div>

        <div className="w-full md:w-1/4 ">
          <div className="flex flex-col items-start ">
            <p className="text-sm text-slate-600 mb-2">Developed by Chirag Yadav</p>
            <Link
              to="https://github.com/chiragyadav2003"
              className={`text-sm text-slate-600 flex items-center ${linkClasses}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-1" /> GitHub
            </Link>
            <div className="flex gap-x-4 mt-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className={iconClasses} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className={iconClasses} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className={iconClasses} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};