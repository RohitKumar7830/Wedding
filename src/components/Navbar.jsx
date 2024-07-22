import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross2 } from 'react-icons/rx';
import { Logo } from './Logo';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close the menu when the location changes (page navigates)
  useEffect(() => {
    setOpen(false);
  }, [location]);

  // Add scroll event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 70);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 h-[70px] px-4 py-2 flex items-center justify-center transition-all duration-600 ease-in-out ${scrolled ? 'bg-white shadow-md z-50 text-black' : 'bg-transparent z-10 text-white'
        }`}
    >
      {/* mobile navbar */}
      <div className="container mx-auto md:hidden px-6">
        <div className="flex justify-between items-center">
          <div>
            <Logo color={scrolled ? 'black' : 'white'} />
          </div>
          <div className="font-semibold">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="transition duration-500 ease-in-out"
            >
              {open ? <RxCross2 /> : <GiHamburgerMenu />}
            </button>
          </div>
        </div>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden absolute top-16 left-0 w-full bg-white z-40 border-b-2"
            >
              <div className="p-4 flex flex-col items-center justify-center text-gray-600 tracking-widest">
                <div className="group hover:underline py-4 w-full text-center">
                  <Link to="/services">SERVICES</Link>
                </div>
                <div className="group hover:underline py-4 w-full text-center">
                  <Link to="/stories">STORIES</Link>
                </div>
                <div className="group hover:underline py-4 w-full text-center font-bold">
                  <Link to="/about">ABOUT</Link>
                </div>
                <div className="group bg-black text-white py-4 w-full text-center hover:bg-slate-900">
                  <Link to="/contact">GET IN TOUCH</Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* desktop navbar */}
      <div className="container hidden md:flex max-w-7xl items-center justify-between mx-auto">
        <div className="flex items-center">
          <Logo color={scrolled ? 'black' : 'white'} />
        </div>
        <div className="flex gap-x-6 items-center">
          <div className="group">
            <Link to="/services" className={scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}>
              <span className="group-hover:underline">SERVICES</span>
            </Link>
          </div>
          <div className="group">
            <Link to="/stories" className={scrolled ? "text-black hover:text-gray-600" : "text-white hover:text-gray-300"}>
              <span className="group-hover:underline">STORIES</span>
            </Link>
          </div>
          <div className="group">
            <Link to="/about" className={scrolled ? "text-black hover:text-gray-600 font-bold" : "text-white hover:text-gray-300 font-bold"}>
              <span className="group-hover:underline">ABOUT</span>
            </Link>
          </div>
          <div className="group">
            <Link
              to="/contact"
              className={scrolled ? "bg-black text-white px-4 py-2 hover:underline hover:bg-gray-800" : "bg-white text-black px-4 py-2 hover:underline hover:bg-gray-300"}
            >
              <span className="group-hover:underline">GET IN TOUCH</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
