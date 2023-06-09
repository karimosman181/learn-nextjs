import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center  rounded-full font-semibold bg-dark text-light p-8  shadow-dark cursor-pointer px-6 py-3 absolute dark:bg-light dark:text-dark dark:shadow-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      //animate once uncomment below
      // viewport={{once:true}}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center dark:text-light">
        Skills
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-cicularLight dark:bg-cicularDark">
        <motion.div
          className="flex items-center justify-center  rounded-full font-semibold bg-dark text-light p-8  shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>

        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="5vw" y="10vw" />
        <Skill name="HTML" x="20vw" y="15vw" />
        <Skill name="HTML" x="15vw" y="5vw" />
        <Skill name="HTML" x="-25vw" y="15vw" />
        <Skill name="HTML" x="-10vw" y="-15vw" />
        <Skill name="HTML" x="-20vw" y="-5vw" />
        <Skill name="HTML" x="35vw" y="-10vw" />
      </div>
    </>
  );
};

export default Skills;
