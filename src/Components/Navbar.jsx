import React from 'react';

const Navbar = () => {
  const navLinks = ["Features", "Dashboard", "Pricing"];
  
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131313]/80 backdrop-blur-xl border-b border-white/5 px-12 py-6 flex justify-between items-center">
      <div className="text-2xl font-bold tracking-tighter text-white">THE MONOLITH</div>
      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-[#C7C6C6] hover:text-white transition-colors duration-300 text-sm font-medium">
              {link}
            </a>
          ))}
        </div>
        <button className="bg-white text-black px-6 py-2 rounded-lg font-bold text-sm hover:bg-[#E5E5E5] transition-all active:scale-95">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;