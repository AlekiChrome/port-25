import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  const [showPanel, setShowPanel] = useState(false);

  return (
    <div>
      <Navbar />
      <main className="pt-20" id="hero">
        <Hero setShowPanel={setShowPanel} />

        <Skills />
        <Projects />

        <section id="contact" className="h-screen bg-gray-200 flex items-center justify-center">
          <h2 className="text-3xl font-semibold">Contact Section</h2>
        </section>
      </main>

      <About showPanel={showPanel} setShowPanel={setShowPanel} />


    </div>
  );
}

export default App;
