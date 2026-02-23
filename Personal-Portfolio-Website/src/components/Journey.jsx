import React from 'react';

function Journey() {
  return (
    <div>
      <section id="journey" className="bg-slate-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">

            {/* Header */}
            <div className="text-center mb-16">
                <p className="text-orange-500 font-semibold tracking-wide mb-2">Journey</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Growth as a Developer</h2>
                <p className="text-gray-400">From foundations to building real-world projects🌎</p>
                </div>

            {/* Journey blocks */}
            <div className="space-y-8">

                {/* Part 1 */}
                <div className="bg-slate-800 rounded-xl p-8 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                   <h3 className="text-xl font-semibold text-orange-500 mb-4">The Beginning</h3> 
                     <p className="text-gray-400 mb-4">I started my coding journey with HTML and CSS, learning the basics of web development and creating simple static websites. This foundation helped me understand layout, styling, spacing, and clean user interfaces.</p>
                     </div>

                {/* Part 2 */}
                <div className="bg-slate-800 rounded-xl p-8 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                   <h3 className="text-xl font-semibold text-orange-500 mb-4">Diving into JavaScript</h3> 
                     <p className="text-gray-400 mb-4">Moving into JavaScript introduced me to logic, problem-solving, and DOM manipulation. I built interactive projects like browser games and real-time applications, which deepened my understanding of Dynamic web development.</p>
                    </div>

                {/* Part 3 */}
                <div className="bg-slate-800 rounded-xl p-8 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                   <h3 className="text-xl font-semibold text-orange-500 mb-4">Collaboration & Team Projects</h3> 
                     <p className="text-gray-400 mb-4">Working on team projects introduced me to version control systems like Git and collaborative workflows, and structured development practices. Using GitHub helped me understand how real-world projects are built and maintained collaboratively.</p>
                  </div>

                  {/* Part 4 */}
                    <div className="bg-slate-800 rounded-xl p-8 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
                     <h3 className="text-xl font-semibold text-orange-500 mb-4">Expanding My Stack</h3>
                        <p className="text-gray-400 mb-4">I am currently expanding my skills in modern frameworks like React and Tailwind CSS, focusing on building responsive, accessible, and performant interfaces while continuously improving performance, structure, and design quality.</p>
                    </div>

            </div>
        </div>
      </section>
    </div>
  );
}

export default Journey;