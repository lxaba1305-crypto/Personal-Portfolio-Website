import React from 'react';
import aboutImage from '../images/About.png'

function About() {
    return (
        <div>
            <section id="about" className="bg-slate-800 text-white py-20 px-6">

                <div className="max-w-6xl mx-auto">

                    {/* Section header */}
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold">
                            <span className="text-red-600">About</span>
                            <span className="text-orange-500"> Me</span>
                        </h2>
                        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Not just code - intention, creativity, passion, and discipline drive my work.</p>
                    </div>

                    {/* Content */}
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        {/* Image 1 - Left */}

                        <div className="flex justify-center">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-red-600 to-orange-500 p-1">
                                <div className="w-full h-full bg-slate-900 rounded-2xl flex items-center justify-center text-gray-400">
                                    <img src={aboutImage} alt="About Me" className="w-48 h-48 md:w-64 md:h-64 object-cover object-[center_10%] rounded-full border-4 border-gray-700 hover:scale-105 transition duration-300"></img>
                                </div>
                            </div>
                        </div>

                        {/* Text content - Right */}
                        <div>
                            <h3 className="text-2xl md:text-3xl font-semibold mb-6">Frontend Developer with Vision</h3>

                            <p className="text-gray-300 mb-6 leading-relaxed">I'm Lehlohonolo, a passionate frontend developer who's main focus is building clean, responsive, and meaningful user experiences.</p>

                            <p className="text-gray-400 mb-6 leading-relaxed">My journey started with playing around with devices to satisfy my curiousity, which then grew into a deep interest in web development and design. Each Project I build is an opportunity to implement creativity, to improve, to innovate, and create something that serves people with purpose. </p>

                            {/* Highlighted cards */}
                            <div className="grid sm:grid-cols-3 gap-4">

                                <div className="bg-slate-900 p-4 rounded-lg border border-white/10 hover:border-orange-500 transition duration-300">
                                    <h4 className="text-orange-500 font-semibold mb-2">Problem Solver</h4>
                                    <p className="text-gray-400 text-sm">I approach challenges with creativity and persistence, finding innovative solutions to complex problems.</p>
                                </div>

                                <div className="bg-slate-900 p-4 rounded-lg border border-white/10 hover:border-orange-500 transition duration-300">
                                    <h4 className="text-orange-500 font-semibold mb-2">Lifelong Learner</h4>
                                    <p className="text-gray-400 text-sm">I am committed to continuous learning and growth, always seeking new knowledge and skills to stay at the forefront of frontend development.</p>
                                </div>

                                <div className="bg-slate-900 p-4 rounded-lg border border-white/10 hover:border-orange-500 transition duration-300">
                                    <h4 className="text-orange-500 font-semibold mb-2">Team Player</h4>
                                    <p className="text-gray-400 text-sm">I thrive in collaborative environments, valuing open communication and teamwork to achieve shared goals.</p>
                                </div>

                                </div>
                            </div>
                        </div>
                    </div>          
                    
                </section>
                            </div>

    )
}

export default About;

                        