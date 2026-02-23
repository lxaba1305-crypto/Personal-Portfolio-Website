import React from 'react';
import { FaReact, FaHtml5, FaCss3, FaJs, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiCanva } from 'react-icons/si';

function Skills() {
  return (
    <div>
       <section id="skills" className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">

            {/* Header  */}
            <div className="text-center mb-16">
                <p className="text-orange-500 font-semibold tracking-wide mb-2">My Stack</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
                <p className="text-gray-400 text-lg">Foundations mastered. Growth in progress</p>

            </div>

            {/* Categories */}
            <div className="grid md:grid-cols-3 gap-8">

                <div className="bg-slate-800 rounded-xl p-8 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20">
                    <h3 className="text-xl font-semibold text-orange-500 mb-6">Core Foundations</h3>

                    <div className="grid md:grid-cols-2 gap-4">

                        <div className="flex flex-col items-center bg-slate-900 p-4 rounded-lg border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/20 hover:scale-105">
                            <FaHtml5 className="text-4xl mb-2 text-orange-600" />
                            <p className="text-sm font-medium text-gray-300 tracking-wide">HTML</p>
                        </div>

                        <div className="flex flex-col items-center bg-slate-900 p-4 rounded-lg border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/20 hover:scale-105">
                            <FaCss3 className="text-4xl mb-2 text-blue-600" />
                            <p className="text-sm font-medium text-gray-300 tracking-wide">CSS</p>
                        </div>

                        <div className="flex flex-col items-center bg-slate-900 p-4 rounded-lg border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/20 hover:scale-105">
                            <FaJs className="text-4xl mb-2 text-yellow-500" />
                            <p className="text-sm font-medium text-gray-300 tracking-wide">JavaScript</p>
                        </div>

                        </div>
                </div>

                <div className="bg-slate-800 rounded-xl p-8 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                    <h3 className="text-xl font-semibold text-orange-500 mb-6">Tools & Workflow</h3>

                    <div className="flex flex-col items-center bg-slate-900 p-4 rounded-lg border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/30 hover:scale-105">
                        <FaGithub className="text-4xl mb-4 text-white" />
                        <p className="text-sm font-medium text-gray-300 tracking-wide">GitHub</p>
                    </div>

                </div>

                <div className="bg-slate-800 rounded-xl p-8 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                <h3 className="text-xl font-semibold text-orange-500 mb-2">Currently Learning</h3>
                <p className="text-sm text-gray-400 mb-4">Actively building projects while sharpening these skills</p>

                <div className="grid md:grid-cols-2 gap-4">

                    <div className="flex flex-col items-center bg-slate-900 p-4 rounded-lg border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/30 hover:scale-105">
                        <FaReact className="text-4xl mb-2 text-cyan-400" />
                        <p className="text-sm font-medium text-gray-300 tracking-wide">React</p>
                    </div>

                    <div className="flex flex-col items-center bg-slate-900 p-4 rounded-lg border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/30 hover:scale-105">
                        <SiTailwindcss className="text-4xl mb-2 text-teal-400" />
                        <p className="text-sm font-medium text-gray-300 tracking-wide">Tailwind CSS</p>
                    </div>

                    <div className="flex flex-col items-center bg-slate-900 p-4 rounded-lg border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-md hover:shadow-orange-500/30 hover:scale-105">
                        <SiCanva className="text-4xl mb-2 text-green-400" />
                        <p className="text-sm font-medium text-gray-300 tracking-wide">Canva</p>
                    </div>

                </div>
                </div>

            </div>
        </div>

    </section>
    </div>
  );

}

export default Skills;