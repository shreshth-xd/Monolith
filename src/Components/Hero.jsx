import React from 'react';

const Hero = () => {
  return (
    <section className="pt-40 pb-24 px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
      <div className="space-y-8 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-white">
            Build and Manage <br />
            Content Effortlessly
        </h1>
        <p className="text-[#C7C6C6] text-xl max-w-md leading-relaxed">
          The Monolith provides a serene, high-performance environment for architects of the web. Focus on your narrative while we handle the infrastructure.
        </p>
        <div className="flex gap-4 mt-3.5">
          <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-[#E5E5E5] transition-all">
            Get Started
          </button>
          <button className="bg-[#1B1B1B] text-white border border-white/10 px-8 py-4 rounded-lg font-bold hover:bg-[#252525] transition-all">
            View Demo
          </button>
        </div>
      </div>
      <div className="relative group">
        <div className="absolute -inset-1 bg-linear-to-r from-white/10 to-transparent rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
        <div className="relative bg-[#131313] rounded-2xl border border-white/5 p-8 shadow-2xl">
           {/* Mock Dashboard Graphics */}
           <div className="flex gap-2 mb-8">
             <div className="w-3 h-3 rounded-full bg-white/10"></div>
             <div className="w-3 h-3 rounded-full bg-white/10"></div>
             <div className="w-3 h-3 rounded-full bg-white/10"></div>
           </div>
           <div className="space-y-4">
             <div className="h-32 bg-white/5 rounded-xl animate-pulse"></div>
             <div className="grid grid-cols-2 gap-4">
               <div className="h-24 bg-white/5 rounded-xl"></div>
               <div className="h-24 bg-white/5 rounded-xl"></div>
             </div>
             <div className="h-4 w-1/2 bg-white/5 rounded"></div>
             <div className="h-4 w-3/4 bg-white/5 rounded"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;