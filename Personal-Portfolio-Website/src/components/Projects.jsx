import React from 'react';
import teamProject from '../images/team-project.png';
import jsGame from '../images/js-game.png';
import restaurant from '../images/restaurant.png';
import clock from '../images/clock.png';

function Projects() {
  return (
    <div>
      <section id="projects" className="bg-slate-800 py-20 px-6">
        <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
                <p className="text-orange-500 font-semibold tracking-wide mb-2">Projects</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What I've built</h2>
                <p className="text-gray-400">Real projects. Real growth. Real results.</p>
                </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">

                <div className="bg-slate-900 rounded-xl border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                    <img src={teamProject} alt="Team Project" className="w-full h-56 object-cover" />

                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">Collaborative Web Platform</h3>
                        <p className="text-gray-400 text-sm mb-4">Built collaboratively using version control and shared development responsibilities.</p>

                        <p className="text-xs text-orange-500 mb-4">HTML ‧ CSS</p>

                        <div className="flex gap-4">
                            <a href="https://code-crushers.netlify.app/" className="text-sm bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">Live Demo</a>
                            <a href="https://github.com/NatalieVinyu/TeamPortfolio.git" className="text-sm border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">GitHub</a>
                        </div>
                    </div>
                </div>

                {/* Game */}
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                    <img src={jsGame} alt="JavaScript Game" className="w-full h-56 object-cover" />

                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">Interactive JavaScript Game</h3>
                        <p className="text-gray-400 text-sm mb-4">A fun and interactive game built using JavaScript, showcasing dynamic gameplay and user engagement.</p>

                        <p className="text-xs text-orange-500 mb-4">HTML ‧ CSS ‧ JavaScript</p>

                        <div className="flex gap-4">
                            <a href="https://egamejs.netlify.app/" className="text-sm bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">Live Demo</a>
                            <a href="https://github.com/lxaba1305-crypto/Game---OOP.git" className="text-sm border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">GitHub</a>
                        </div>
                    </div>
                </div>

                {/* Restaurant */}
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                    <img src={restaurant} alt="Restaurant Website" className="w-full h-56 object-cover" />

                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">Modern Restaurant Website</h3>
                        <p className="text-gray-400 text-sm mb-4">A sleek and modern restaurant website designed to attract customers and showcase the menu.</p>
                       
                        <p className="text-xs text-orange-500 mb-4">HTML ‧ CSS</p>

                        <div className="flex gap-4">
                            <a href="https://fego-caffe.netlify.app/" className="text-sm bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">Live Demo</a>
                            <a href="https://github.com/lxaba1305-crypto/https---github.com-lxaba1305-crypto-Capstone-project---Fego-caffe.git" className="text-sm border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">GitHub</a>
                        </div>
                    </div>
                </div>

                {/* Clock */}
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                    <img src={clock} alt="Clock App" className="w-full h-56 object-cover" />

                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-white mb-2">Dynamic Clock App</h3>
                        <p className="text-gray-400 text-sm mb-4">A dynamic clock application that displays the current time and updates in real-time.</p>

                        <p className="text-xs text-orange-500 mb-4">HTML ‧ CSS ‧ JavaScript</p>

                        <div className="flex gap-4">
                            <a href="https://clock-x-melsof.netlify.app/" className="text-sm bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">Live Demo</a>
                            <a href="https://github.com/lxaba1305-crypto/Digital-Clock.git" className="text-sm border border-orange-500 text-orange-500 px-4 py-2 rounded-md hover:bg-orange-500 hover:text-white transition">GitHub</a>
                        </div>
                    </div>
                </div>

                </div>
                </div>
                </section>
            </div>
  );

}

export default Projects;