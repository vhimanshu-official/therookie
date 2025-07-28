import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();

  let lastY = 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastY && latest > 50) {
      setVisible(false); // scrolling down
    } else {
      setVisible(true); // scrolling up
    }
    lastY = latest;
  });

  return (
    <header>
      <motion.nav
        className="items-center p-4 text-white fixed top-0 w-full z-50 bg-black/10 bg-opacity-50 shadow transition-opacity duration-300"
        animate={{ opacity: visible ? 1 : 0 }}
      >
        {/*Desktop menu*/}
        <ul className="hidden md:flex justify-between">
          <div className="font-bold text-lg font-serif pl-6">
            <Link to="/">theRookie</Link>
            <div></div>
          </div>
          <div className="flex space-x-8 pr-8 font-sans font-semibold text-base italic uppercase">
            <li className="relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-50 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-0 hover:after:opacity-100 px-[1px] pb-0">
              <a href="" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
            <li className="relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-50 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-0 hover:after:opacity-100 px-[1px] pb-0">
              <Link to="/projects">Projects</Link>
            </li>
            <div className="relative inline-block">
              <button
                className="italic uppercase relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-50 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-0 hover:after:opacity-100 px-[1px] pb-0"
                onClick={toggleDropdown}
              >
                Links
              </button>

              {showDropdown && (
                <ul className="text-center absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-40 z-10">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/himanshuv8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/vhimanshu-official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://leetcode.com/u/Himanshu_V8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100 rounded"
                    >
                      LeetCode
                    </a>
                  </li>
                </ul>
              )}
            </div>

            <li className="relative ease-in after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:translate-y-[3px] after:rounded-full after:dark:bg-zinc-50 after:bg-zinc-50 after:opacity-0 after:duration-300 after:content-[''] hover:after:-translate-y-0 hover:after:opacity-100 px-[1px] pb-0">
              <Link to="/connect">About Me & Contact</Link>
            </li>
          </div>
        </ul>

        {/* Hamburger menu */}
        <div
          className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <div className="flex flex-col space-y-1 mt-2">
              <span className="block h-1 bg-white"></span>
              <span className="block h-1 bg-white"></span>
              <span className="block h-1 bg-white"></span>
            </div>
          ) : (
            <div>
              <span className="font-extrabold text-2xl text-white">x</span>
            </div>
          )}
        </div>

        {/*Mobile menu*/}
        {isOpen && (
          <div className="flex space-x-8 m-0 mt-3 py-3 px-5 border border-zinc-500 max-w-fit text-center text-gray-700 bg-white rounded font-sans font-semibold text-base italic uppercase">
            <ul className="m-0 p-0 rounded-full space-y-3">
              <li className="hover:bg-gray-100 hover:text-black rounded-full">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:bg-gray-100 hover:text-black rounded-full">
                <a href="" target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </li>
              <li className="hover:bg-gray-100 hover:text-black rounded-full">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="hover:bg-gray-100 hover:text-black rounded-full">
                <div className="relative inline-block">
                  <button
                    className="min-w-full hover:bg-gray-100 rounded-full uppercase italic "
                    onClick={toggleDropdown}
                  >
                    Links
                  </button>

                  {showDropdown && (
                    <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-40 z-10">
                      <li>
                        <a
                          href="https://www.linkedin.com/in/himanshuv8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 hover:bg-gray-100 rounded"
                        >
                          LinkedIn
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://github.com/vhimanshu-official"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 hover:bg-gray-100 rounded"
                        >
                          GitHub
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://leetcode.com/u/Himanshu_V8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block px-4 py-2 hover:bg-gray-100 rounded"
                        >
                          LeetCode
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </li>
              <li className="hover:bg-gray-100 hover:text-black rounded-full">
                <Link className="px-2" to="/connect">
                  {" "}
                  About Me & Contact{" "}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </motion.nav>
    </header>
  );
}

export default Header;
