import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 px-12 border-t border-white/5 bg-[#0E0E0E]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[#474747] text-xs font-bold uppercase tracking-widest">
          © 2024 THE MONOLITH EDITORIAL. BUILT FOR ARCHITECTS.
        </p>
        <div className="flex gap-10">
          {["About", "Docs", "GitHub", "Contact"].map(link => (
            <a key={link} href="#" className="text-[#474747] hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;