import React from 'react';

const EditorPreview = () => {
  return (
    <section className="py-32 px-12 bg-black">
       <div className="max-w-4xl mx-auto bg-[#131313] border border-white/5 rounded-3xl p-12 shadow-inner">
          <div className="flex justify-between items-center mb-16">
            <div className="flex gap-2">
               <div className="w-2 h-2 rounded-full bg-white/20"></div>
               <div className="w-2 h-2 rounded-full bg-white/20"></div>
               <div className="w-2 h-2 rounded-full bg-white/20"></div>
            </div>
            <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition-transform">
              Publish
            </button>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-bold bg-transparent outline-none border-none placeholder:text-white/10 text-white w-full">
              The Monolith: A New Paradigm
            </h2>
            <div className="w-full h-px bg-white/5"></div>
            <p className="text-xl text-[#888888] leading-relaxed min-h-[200px]">
              In the realm of digital creation, noise is the enemy. The Monolith was conceived as a silent partner—a robust foundation that allows the architect's intent to shine through without distraction...
            </p>
          </div>
       </div>
    </section>
  );
};

export default EditorPreview;