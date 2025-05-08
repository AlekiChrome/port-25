import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJsSquare, FaNodeJs, FaPython, FaGitAlt } from 'react-icons/fa';
import {
  SiTailwindcss,
  SiApachenetbeanside,
  SiCreativetechnology,
  SiKotlin,
  SiJetpackcompose
} from 'react-icons/si';

const skillsByCategory = [
  {
    label: 'Web',
    color: 'bg-blue-200 text-blue-800',
    skills: [
      { name: 'React', icon: <FaReact size={48} /> },
      { name: 'JavaScript', icon: <FaJsSquare size={48} /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={48} /> },
      { name: 'Node.js', icon: <FaNodeJs size={48} /> },
      { name: 'API Integration', icon: <SiApachenetbeanside size={48} /> },
    ],
  },
  {
    label: 'Mobile',
    color: 'bg-green-200 text-green-800',
    skills: [
      { name: 'Kotlin', icon: <SiKotlin size={48} /> },
      { name: 'Jetpack Compose', icon: <SiJetpackcompose size={48} /> },
    ],
  },
  {
    label: 'Creative',
    color: 'bg-pink-200 text-pink-800',
    skills: [
      { name: 'Creative Direction', icon: <SiCreativetechnology size={48} /> },
      { name: 'Git & GitHub', icon: <FaGitAlt size={48} /> },
      { name: 'Python', icon: <FaPython size={48} /> },
    ],
  },
];

export default function Skills() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <motion.section
      id="skills"
      className="py-24 px-6 border-t bg-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/pw_maze_white.png')] opacity-30 mix-blend-multiply pointer-events-none" aria-hidden="true"></div>


      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Skills & Tools
        </motion.h2>

        <div className="skill-filters flex justify-center flex-wrap mb-12 px-4">
          {["All", "Web", "Mobile", "Creative"].map(label => (
            <button
              key={label}
              onClick={() => setActiveFilter(label)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                activeFilter === label
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {skillsByCategory
          .filter(category => activeFilter === "All" || category.label === activeFilter)
          .map((category, idx) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
              className="mb-16"
            >
              <div className={`skill-label p-2 mb-10 ${category.label.toLowerCase()}-label`}>

                {category.label}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
  {category.skills.map((skill, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="skill-card"
    >
      <div className="skill-card-icon">
        {skill.icon}
      </div>
      <p className="skill-card-title">{skill.name}</p>
    </motion.div>
  ))}
</div>

            </motion.div>
          ))}
      </div>
    </motion.section>
  );
}
