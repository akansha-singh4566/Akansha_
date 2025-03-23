import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import myImage from "../assets/MyImage.jpg";
import { techIcons } from "../assets";



const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      exit="exit"
      variants={fadeIn("up", "spring", 0.3, 1)}
      className="bg-[#0a0a0a] text-white"
    >
      <Navbar />
      
      {/* About Section */}
      <motion.section
        variants={slideIn("bottom", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <motion.div variants={textVariant()}>
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            About Me
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Who I Am<span className="text-purple-500">.</span>
          </h2>
        </motion.div>

        <motion.img
          src={myImage}
          alt="My Profile"
          className="w-40 h-40 mx-auto rounded-full mt-6 shadow-lg shadow-purple-500/50 hover:scale-110 transition-transform duration-500"
        />

        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto leading-7"
        >
          I'm a passionate and versatile individual with expertise in 3D modeling, web development, and business. 
          I have experience in React.js, Node.js, Blender, and Python, along with a strong foundation in UI/UX design 
          using Figma. Apart from technical skills, I love sketching, painting, dancing, reading, and cooking. I am 
          a fast learner, multitasker, and thrive under pressure. My goal is to innovate and create impactful solutions.
        </motion.p>
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
            My Expertise<span className="text-purple-500">.</span>
          </h2>
        </motion.div>

        <div className="flex justify-center gap-6 mt-6">
          {Object.values(techIcons).map((icon, index) => (
            <motion.img
              key={index}
              src={icon}
              alt="Skill Icon"
              className="w-14 h-14 hover:scale-125 transition-transform duration-500"
              variants={fadeIn("up", "spring", index * 0.1, 1)}
            />
          ))}
        </div>


        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto leading-7"
        >
          Skilled in React.js, Tailwind CSS, Node.js, Blender 3D, Python, Figma, and JavaScript. 
          I also have experience in business strategies, market analysis, and supply chain logistics.
        </motion.p>
      </motion.section>

      {/* Animation Section */}
      <motion.section
        variants={slideIn("left", "spring", 0.3, 1)}
        className="max-w-6xl mx-auto px-6 py-16 text-center"
      >
        <motion.div variants={textVariant()}>
          <p className="text-purple-400 uppercase tracking-widest text-sm">
            Creativity & Passion
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold mt-2">
            Beyond Tech<span className="text-purple-500">.</span>
          </h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className="mt-4 text-gray-300 text-lg max-w-3xl mx-auto leading-7"
        >
          Apart from technology, I find joy in sketching, painting, dancing, and sports like volleyball and badminton. 
          My ability to handle pressure, multitask, and constantly explore new ideas helps me push my boundaries and 
          bring creativity into everything I do.
        </motion.p>
      </motion.section>

      <Footer />
    </motion.div>
  );
};

export default About;






// const About = () => {
//   return (
//     <div>
//       <Navbar/>
//       <HeroImg2 heading="ABOUT." text="I am currently pursuing a dual degree: A Bachelor's in Web Designing from Delhi University
//        and a BBA from DEI(Dayalbagh Educational Institute). With a solid foundation in web development, Python, and computer fundamentals, 
//        I am eager to apply my knowledge in real-world scenarios and continuously explore new areas in technology and design.

//        Bachelor's in Web Designing, Delhi University (Expected Graduation: [2026])
//        BBA, DEI (Expected Graduation: [2025])"/>
//        <HeroImg2 heading="Experience" text="Computer Teacher
//        Taught 50 students, honing my ability to convey complex concepts clearly and effectively.

//        Intern at HQVFX
//        Currently expanding my skills and gaining valuable industry experience.

//        Intern in Painting
//        Gained practical experience and enhanced my artistic skills."/>
//       <Footer/>
//     </div>
//   )
// }

// export default About