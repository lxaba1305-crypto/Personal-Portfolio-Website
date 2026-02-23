import React from 'react';

function Vision() {
  return (
    <div>
      <section className="bg-slate-800 py-20 px-6">
        <div className="max-w-4xl mx-auto">

            {/* Header */}
            <p className="text-orange-500 font-semibold tracking-wide mb-2">Vision</p>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Where I'm Headed</h2>

            {/* Main Vision Statement */}

            <p className="text-gray-300 leading-relaxed mb-12">My goal is to grow into a well-rounded developer capable of building 
          scalable, modern web applications that combine strong logic with 
          clean design. I am committed to continuous learning, improving my 
          technical depth, and contributing to projects that create meaningful 
          digital experiences.
          </p>

          {/* Focus Areas */}
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-slate-900 rounded-xl p-6 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">Continuous Growth</h3>
              <p className="text-gray-400 text-sm">Continuously improving my skills in JavaScript, React, and modern web technologies to build performant and scalable applications.</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">Real-World Impact</h3>
              <p className="text-gray-400 text-sm">Building projects that solve real problems and create meaningful digital experiences for users.</p>
            </div>

            <div className="bg-slate-900 rounded-xl p-6 border border-white/10 transition duration-300 hover:border-orange-500 hover:shadow-orange-500/20 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">Clean & Scalable Code</h3>
              <p className="text-gray-400 text-sm">Writing clean, maintainable code that is scalable and follows best practices in software development.</p>
            </div>

            </div>

        </div>
      </section>
    </div>
  );
}

export default Vision;