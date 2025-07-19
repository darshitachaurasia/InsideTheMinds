import React from 'react';
import Logo from './Logo';

function Header() {
  return (
    <header className="w-full font-[Inter]  z-50 bg-[#F1F0EB]">
      <nav className="  flex items-center justify-between">
        {/* Logo */}
        <div className="w-40 pl-10">
          <Logo/>
        </div>

        {/* Navigation Buttons */}
        <ul className="flex items-center gap-4">
          <li>
            <button className="px-6 py-2 bg-gray-300 text-black hover:bg-black hover:text-white transition duration-200">
              Visit Serene Minds
            </button>
          </li>
          <li>
            <div className='mr-10'>
            <button className="px-6 py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-200 flex items-center gap-2">
              <span className="whitespace-nowrap">Find Psychologist</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                />
              </svg>
            </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
