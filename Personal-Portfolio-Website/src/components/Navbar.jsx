import React, { useState } from 'react';
import logo from '../images/logo.png';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
    <div> 
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
            
            <div className="container flex justify-between">

                <div className="flex items-center space-x-6">

                   {/* HAMBURGER MENU */}
                
                   <div className="md:hidden">
                    <button type="button" className="p-2 rounded-md hover:bg-white/5 transition duration-300" aria-expanded={isOpen} aria-label="Toggle menu" onClick={() => setIsOpen(!isOpen)}>
                        <span className={`block w-6 h-0.5 bg-gray-300 mb-1 transition duration-300 ${isOpen ? 'rotate-45 origin-center translate-y-1.5' : 'rotate-0'}`}></span>
                        <span className={`block w-6 h-0.5 bg-gray-300 transition duration-300 ${isOpen ? '-rotate-45 -translate-y-1' : 'rotate-0'}`}></span>
                        </button>
                </div>
                

                {/* Logo */}
                    <div>
                        <img src={logo} alt="Logo" className="w-12 h-12 object-contain hover:scale-105 transition duration-300"></img>
                    </div>

                    {/* LINKS */}
                    <div className="hidden md:flex space-x-6">
                        
                        <a href="#hero"  className="text-gray-300 hover:text-orange-500 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300">Home</a>
                        <a href="#about" className="text-gray-300 hover:text-orange-500 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300">About</a>
                        <a href="#skills" className="text-gray-300 hover:text-orange-500 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300">Skills</a>
                        <a href="#projects" className="text-gray-300 hover:text-orange-500 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300">Projects</a>
                        <a href="#journey" className="text-gray-300 hover:text-orange-500 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300">Journey</a>
                        <a href="#contact" className="text-gray-300 hover:text-orange-500 transition duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-orange-500 after:transition-all after:duration-300">Contact</a>
                    </div>
                </div>
            </div>

   {isOpen && (
         <div id="" className="md:hidden flex flex-col items-center px-4 space-y-4 py-4 bg-slate-900/90 backdrop-blur-md border-b border-white/10 transition-all duration-300 ease-out">
            
                <a href="#hero" className="block text-gray-300 hover:text-orange-500 transition">Home</a>
                <a href="#about" className="block text-gray-300 hover:text-orange-500 transition">About</a>
                <a href="#skills" className="block text-gray-300 hover:text-orange-500 transition">Skills</a>
                <a href="#projects" className="block text-gray-300 hover:text-orange-500 transition">Projects</a>
                <a href="#journey" className="block text-gray-300 hover:text-orange-500 transition">Journey</a>
                <a href="#contact" className="block text-gray-300 hover:text-orange-500 transition">Contact</a>
            </div>
            )}

       </nav>
    </div>
        
    );
}

export default Navbar;


