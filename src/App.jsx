import React from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Features from './Components/Features';
import DashboardPreview from './Components/DashboardPreview';
import EditorPreview from './Components/EditorPreview';
import CTA from './Components/CTA';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="bg-[#0A0A0A] text-white font-['Plus_Jakarta_Sans'] min-h-screen selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <EditorPreview />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;