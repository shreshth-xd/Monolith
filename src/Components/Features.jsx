import React from 'react';

const FeatureCard = ({ icon, title, description }) => (
  <div className="p-8 bg-[#131313] border border-white/5 rounded-2xl hover:bg-[#1B1B1B] transition-all duration-300 group cursor-default">
    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
      <span className="material-icons text-white opacity-80">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-[#888888] leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    { icon: 'bolt', title: 'Blazing Speed', description: 'Edge-optimized delivery ensuring your content reaches your audience in milliseconds, globally.' },
    { icon: 'vpn_key', title: 'Secure API', description: 'Enterprise-grade security with granular permission controls and encrypted data transmission.' },
    { icon: 'all_inclusive', title: 'Infinite Scalability', description: 'From single-page blogs to massive corporate networks, our architecture grows with your ambition.' }
  ];

  return (
    <section className="py-32 px-12 max-w-7xl mx-auto">
      <div className="mb-16">
        <p className="text-xs uppercase tracking-widest text-[#474747] font-bold mb-4">Core Capabilities</p>
        <h2 className="text-4xl font-bold">Engineered for Perfection</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => <FeatureCard key={i} {...f} />)}
      </div>
    </section>
  );
};

export default Features;