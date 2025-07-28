import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header>
      <nav className="items-center p-4 text-white">
        <ul className="flex justify-between">
          <div className="font-bold text-lg font-serif pl-6">
            <Link to="/">theRookie</Link>
            <div></div>
          </div>
          <div className="flex space-x-8 pr-8 font-sans font-semibold text-base italic uppercase">
            <li>
              <a href="" target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              Links ▾
              {showDropdown && (
                <ul className="absolute top-full left-0 mt-2 bg-white text-black rounded shadow-lg w-40 z-10">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/himanshuv8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/vhimanshu-official"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://leetcode.com/u/Himanshu_V8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      LeetCode
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/connect">About Me & Contact</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
