import React, { useState } from 'react';

function Navbar() {
    useState(isOpen => {
        if (isOpen) {
            document.body.classList.add('nav-open');
        } else {
            document.body.classList.remove('nav-open');
        }
    });
    return (
        <div>
        <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
            <div className="flex items-center space-x-6">
                <div className="md:hidden flex items-center">

                    <button type="button" className="p-2 rounded-md hover:bg-white/5 transition duration-300">
                        <span className="block w-6 h-0.5 bg-gray-300 mb-1 transition duration-300"></span>
                        <span className="block w-6 h-0.5 bg-gray-300 transition duration-300 transition duration-300"></span>
                        </button>
                </div>
                <div className="">
                    <div className="">
                        <img src=""></img>
                    </div>
                    <div className="hidden md:flex space-x-6">
                        
                        <a href="" aria-current className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                        <a href="" className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                        <a href="" className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                        <a href="" className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                        <a href="" className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                        <a href="" className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                        <a href="" className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                        <a href="" className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                        <a href="" className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                        <a href="" className="text-gray-300 hover:text-orange-500 transition duration-300 relative"></a>
                    </div>
                </div>
            </div>
            <div className="">
                <button type="button" className="md:hidden text-gray-300 hover:text-orange-500 transition">
                    <span className=""></span>
                    <span className=""></span>
                    </button>
            
            <div className="">
                <button className="">
                    <span className=""></span>
                    <span className=""></span>
                </button>

                <div className="">
                    <a href="" className=""></a>
                    <a href="" className=""></a>
                    <a href="" className=""></a>
                    </div>
            </div>
            </div>
        </div>

        <div id="" className="md:hidden bg-slate-900 px-4 py-4 space-y-4 border-top-subtle">
            <div className="">

                <a href="" className="block text-gray-300 hover:text-orange-500 transition "></a>
                <a href="" className="block text-gray-300 hover:text-orange-500 transition"></a>
                <a href="" className="block text-gray-300 hover:text-orange-500 transition"></a>
                <a href="" className="block text-gray-300 hover:text-orange-500 transition"></a>
                <a href="" className="block text-gray-300 hover:text-orange-500 transition"></a>
                <a href="" className="block text-gray-300 hover:text-orange-500 transition"></a>
                <a href="" className="block text-gray-300 hover:text-orange-500 transition"></a>
                <a href="" className=""></a>
            </div>
        </div>
        </nav>
        </div>
    );
}

export default Navbar;


