import React from 'react';
import { FaReact } from 'react-icons/fa/index.esm.js';;

function Contact() {
  return (
    <div>
      <section id="contact" className="bg-slate-900 py-20 px-6">
        <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center mb-16">
                <p className="text-orange-500 font-semibold tracking-wide mb-2">Contact</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Connect!</h2>
                <p className="text-gray-400">I'm open to new opportunities and collaborations. Feel free to reach out!</p>
            </div>

            {/* Contact Methods */}
            <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">

                    <div className="flex items-center gap-4">
                        <FaEnvelope className="text-orange-500 text-2xl" />
                        <span className="text-gray-300">lxaba1305@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
                <FaGithub className="text-orange-500 text-2xl" />
                <a href="https://github.com/lxaba1305-crypto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition">GitHub Profile</a>
            </div>

            <div className="flex items-center gap-4">
                <FaLinkedin className="text-orange-500 text-2xl" />
                <a href="https://www.linkedin.com/in/lehlohonolo-xaba-651687368"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-orange-500 transition">LinkedIn Profile</a>
            </div> 

                </div>

                {/* Form */}
                <form className="bg-slate-800 rounded-xl p-8 border border-white/10 space-y-6">

                    <div>
                        <input type="text" placeholder="Your Name" className="w-full bg-slate-900 text-gray-300 p-3 rounded-md border border-white/10 focus:outline-none focus:border-orange-500 transition" />
                    </div>

                    <div>
                        <input type="email" placeholder="Your Email" className="w-full bg-slate-900 text-gray-300 p-3 rounded-md border border-white/10 focus:outline-none focus:border-orange-500 transition" />
                    </div>

                    <div>
                        <textarea rows="4" placeholder="Your Message" className="w-full bg-slate-900 text-gray-300 p-3 rounded-md border border-white/10 focus:outline-none focus:border-orange-500 transition" />
                    </div>

                <button type="submit" className="w-full bg-orange-500 text-white py-3 rounded-md hover:bg-orange-600 transition">Send Message</button>
                </form>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;    
    