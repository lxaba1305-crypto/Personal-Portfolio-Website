import React from 'react';

function Footer() {
  return (
    <div>
      <footer className="bg-slate-900 py-6 px-6 text-center text-gray-400">
        <p>&copy; {new Date().getFullYear()} Lehlohonolo Xaba. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default Footer;
