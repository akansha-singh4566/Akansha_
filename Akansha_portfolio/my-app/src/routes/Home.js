import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import HeroImg from "../components/HeroImg";
import Footer from "../components/Footer";
import { fadeIn, textVariant, slideIn } from "../utils/motion";

// Import icons from assets
import htmlIcon from "../assets/tech/html.png";
import cssIcon from "../assets/tech/css.png";
import jsIcon from "../assets/tech/javascript.png";
import figma from "../assets/tech/figma.png";
import blender from "../assets/tech/blender3d.png";
import reactIcon from "../assets/tech/reactjs.png";
import tailwindIcon from "../assets/tech/tailwind.png";
import nodeIcon from "../assets/tech/nodejs.png";

// Work Experience Data
const workExperience = [
  {
    title: "3D Modeler & Technical Artist",
    company: "HQ VFX Private Limited",
    date: "April 2024 - September 2024",
    description: [
      "Developed 3D models, animations, and assets using Blender for VFX and post-production workflows.",
      "Utilized Python scripting to automate processes, optimize workflows, and enhance efficiency in production.",
      "Conducted research and experimented with open-source tools to improve project quality and technical capabilities.",
      "Designed and optimized character designs, textures, and rendering techniques for high-quality outputs.",
      "Gained hands-on experience in 3D modeling, animation, and technical problem-solving within a professional studio environment.",
    ],
  },
];

// Skill Icons Data
const skills = [
  { title: "HTML", icon: htmlIcon },
  { title: "CSS", icon: cssIcon },
  { title: "JavaScript", icon: jsIcon },
  { title: "Figma", icon: figma },
  { title: "React.js", icon: reactIcon },
  { title: "Tailwind CSS", icon: tailwindIcon },
  { title: "Node.js", icon: nodeIcon },
  { title: "Blender3D", icon: blender }
];

const Home = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={slideIn("top", "tween", 0.2, 1)}
      className="bg-[#0a0a0a] text-white"
    >
      {/* Navbar and Hero */}
      <Navbar />
      <HeroImg />

      {/* Introduction Section */}
      <motion.section
        variants={slideIn("bottom", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <motion.div variants={textVariant()}>
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Introduction
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Overview<span className="text-purple-500">.</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto leading-7"
        >
          I'm a versatile 3D modeling designer, web developer, and Figma
          designer with experience in React.js, Node.js, and Python. I have a
          strong foundation in creating interactive and visually engaging 3D
          models, designing responsive web applications, and crafting
          user-friendly interfaces. As a quick learner, I adapt to new
          technologies and collaborate effectively to build efficient, scalable,
          and creative solutions. Let's turn ideas into reality!
        </motion.p>

        
      </motion.section>

      {/* Work Experience Section */}
      <motion.section
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="max-w-6xl mx-auto px-6 py-16"
      >
        <motion.div variants={textVariant()} className="text-center">
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            What I Have Done So Far
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Work Experience<span className="text-purple-500">.</span>
          </h2>
        </motion.div>

        <div className="mt-10 space-y-10">
          {workExperience.map((job, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "spring", 0.2 * index, 1)}
              className="p-6 bg-[#131313] border border-purple-500 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{job.title}</h3>
              <p className="text-gray-400">{job.company}</p>
              <p className="text-sm text-gray-500">{job.date}</p>
              <ul className="mt-4 text-gray-300 text-lg leading-6 space-y-2">
                {job.description.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        variants={fadeIn("up", "spring", 0.3, 1)}
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <motion.div variants={textVariant()}>
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Skills & Technologies
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            My Tech Stack<span className="text-purple-500">.</span>
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              variants={fadeIn("up", "spring", 0.1 * index, 1)}
              className="p-4 bg-[#131313] border border-purple-500 rounded-lg shadow-lg flex flex-col items-center"
            >
              <img src={skill.icon} alt={skill.title} className="w-16 h-16" />
              <h3 className="text-lg font-semibold mt-4">{skill.title}</h3>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Home;
