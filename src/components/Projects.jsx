import React from 'react';
import { motion } from 'framer-motion';

const projectList = [
  {
    title: "Weather App",
    description: "A React app that fetches real-time weather using OpenWeatherMap API.",
  },
  {
    title: "Portfolio Website",
    description: "Personal site built with React, Tailwind, and Framer Motion to showcase my projects and skills.",
  },
  {
    title: "Todo App",
    description: "A full-stack MERN todo app with auth, drag-and-drop, and MongoDB storage.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-gray-100 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-xl p-6 hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

