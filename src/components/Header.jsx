import React, { useState } from 'react';
import Logo from './Logo';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-[#F1F0EB] font-[Inter] z-50">
      <nav className="max-w-screen mx-4 flex items-center justify-between px-1 py-2">
        {/* Logo */}
        <div className="flex-1 ">
          <Logo />
        </div>
         
        {/* Mobile navigation */}
       
        {/* Desktop navigation */}
        <ul className="hidden md:flex items-center gap-4">
          <li>
            <button className="px-6 py-2 bg-gray-300 text-black hover:bg-black hover:text-white transition duration-200">
              Visit Serene Minds
            </button>
          </li>
          <li>
            
            <button className="px-6 py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-200 flex items-center gap-2">
              <span className="whitespace-nowrap">Find Psychologist</span>
              {/* SVG icon */}
              <svg class="w-6 h-6 text-white hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
</svg>

            </button>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden px-2"
          onClick={() => setIsOpen(prev => !prev)}
        >
          {/* Simple hamburger icon */}
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black mb-1"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

      </nav>
       {isOpen && (
          <ul className="md:hidden flex flex-col items-center gap-4 bg-[#F1F0EB] top-full left-0 w-full py-4 shadow">
            <li>
              <button className="px-6 py-2 bg-gray-300 text-black hover:bg-black hover:text-white transition duration-200">
                Visit Serene Minds
              </button>
            </li>
            <li>
              <button className="px-6 py-2 bg-black text-white hover:bg-white hover:text-black border border-black transition duration-200 flex items-center gap-2">
                <span className="whitespace-nowrap">Find Psychologist</span>
                       <svg class="w-6 h-6 text-white hover:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"/>
</svg>
              </button>
            </li>
          </ul>
        )}
    </header>
  );
}

export default Header;
