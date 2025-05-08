import React, { useEffect, useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

export default function About({ showPanel, setShowPanel }) {
  const [typedText, setTypedText] = useState('');
  const fullText = `const name = "Candy";\nconst title = "Creative Technologist & Software Engineer";\nconst focus = ["Front-End Dev", "Mobile Apps", "Content Strategy"];
`;

  useEffect(() => {
    let typing;
    if (showPanel) {
      let i = 0;
      const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
      typing = setInterval(() => {
        setTypedText(fullText.slice(0, i++));
        if (audio && i <= fullText.length) audio.play();
        if (i > fullText.length) clearInterval(typing);
      }, 60);
    } else {
      setTypedText('');
    }
    return () => clearInterval(typing);
  }, [showPanel]);

  return (
    <AnimatePresence>
      {showPanel && (
        <>
          {/* Blurred overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-[9998]"
          />

          <motion.div
            key="about-panel"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="about-panel relative z-[9999]"
          >
            {/* Icon-only close button with tooltip */}
            <div className="absolute top-4 right-4 group">
              <button
                onClick={() => setShowPanel(false)}
                className="text-white text-2xl hover:scale-110 transition-transform duration-200"
                aria-label="Close panel"
              >
                <IoClose />
              </button>
              <div className="absolute -top-8 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Close
              </div>
            </div>

            <h2 className="text-xl font-semibold mb-4 mt-12">// About Me</h2>
            <pre className="whitespace-pre-wrap text-[#58a6ff]">
              {typedText}
              <span className="animate-pulse text-[#ff7b72]">|</span>
            </pre>
            <p className="mt-4">
              I build human-centered digital experiences by blending engineering, design, and direction. Whether leading a photo shoot or engineering a UI, I work with curiosity, clarity, and creativity.
            </p>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
