import React from 'react';

export default function Hero({ setShowPanel }) {
  return (
    <section className="h-screen bg-white flex flex-col items-center justify-center text-center">
      <h1 className="text-5xl font-bold mb-4">Hi, I'm Candy</h1>
      <p className="text-xl mb-8">Creative Technologist & Software Engineer</p>

      <button
        onClick={() => setShowPanel(true)}
        className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Open About Panel
      </button>
    </section>
  );
}
