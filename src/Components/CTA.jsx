import React from 'react';

const CTA = () => {
  return (
    <section className="py-40 px-12 text-center max-w-4xl mx-auto flex flex-col items-center gap-y-6">
      <h2 className="text-6xl font-black uppercase tracking-tighter mb-12">
        Start building your content system today.
      </h2>
      <button className="bg-white text-black px-12 py-5 rounded-lg font-black text-lg uppercase tracking-widest hover:bg-[#E5E5E5] transition-all active:scale-95 shadow-[0_20px_50px_rgba(255,255,255,0.1)]">
        Get Early Access
      </button>
      <p className="mt-8 text-xs text-[#474747] font-bold uppercase tracking-widest">Limited slots available for Q4</p>
    </section>
  );
};

export default CTA;