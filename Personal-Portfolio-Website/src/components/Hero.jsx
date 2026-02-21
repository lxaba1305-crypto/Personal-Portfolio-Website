import React from 'react';

function Hero() {
    return (
        <div>
<section className="min-h-screen flex items-center justify-center bg-slate-900 text-white px-6">

    <div className="max-w-5xl mx-auto text-center">

         {/* The main heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">Hi, I'm{" "}
        <span className="text-red-600">Lehlohonolo</span>
        <br />
        <span className="text-orange-500">Frontend Developer</span>
        </h1>

      {/* The subtext */}
        <p className="text-gray-300 text-lg md:text-xl mb-8">I build responsive and user-friendly websites with modern web technologies, like React, Tailwind CSS, and JavaScript.</p>
    

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row justify-center gap-4">

        <a href="#projects" className="px-6 py-3 bg-red-600 hover:bg-orange-500 transition duration-300 rounded-md font-medium">View My Work</a>

        <a href="#contact" className="px-6 py-3 border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition duration-300 rounded-md font-medium">Contact Me</a>
    </div>
    </div>
</section>
    </div>
    )
}

export default Hero;