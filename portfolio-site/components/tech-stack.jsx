import React from "react";
import { motion } from "framer-motion";

const techStack = [
  { name: "Next.js", icon: "/nextjs-icon-svgrepo-com.svg" },
  { name: "React", icon: "/react-svgrepo-com.svg" },
  { name: "JavaScript", icon: "/js-svgrepo-com.svg" },
  { name: "Node.js", icon: "/node-js-svgrepo-com.svg" },
  { name: "Express", icon: "/express-svgrepo-com.svg" },
  { name: "Tailwind CSS", icon: "/tailwind-svgrepo-com.svg" },
  { name: "PostgreSQL", icon: "/postgresql-svgrepo-com.svg" },
  { name: "Redis", icon: "/redis-svgrepo-com.svg" },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

export const TechStack = () => {
  return (
    <section className="w-full px-4 py-20 md:py-3 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-purple-400 font-michroma">Tech Stack</h2>
        <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-turret">
          I use a modern and efficient stack to build fast, scalable, and maintainable applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {techStack.map((tech, i) => (
            <motion.div
              key={tech.name}
              className="bg-zinc-300 backdrop-blur-lg p-6 rounded-2xl flex flex-col items-center justify-center gap-4"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={i}
              whileHover= {{ scale: 1.02 }}
              transition={ {  type: 'spring', stiffness: 300, damping: 20, } }
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="p-2 w-14 h-14 sm:w-12 sm:h-12 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-110"
              />
              <p className="text-black font-michroma text-sm sm:text-base">{tech.name}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};





