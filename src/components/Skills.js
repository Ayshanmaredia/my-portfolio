import React from 'react';
import Pill from './Pill';
import { BsBootstrapFill } from 'react-icons/bs'
import { DiNodejs } from 'react-icons/di'
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
  SiJquery,
  SiExpress,
  SiNextdotjs,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiMongodb,
  SiAdobephotoshop,
  SiFigma
} from 'react-icons/si';
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Skills = () => {

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1.5], [0.2, 1.5]);

  const skills = [{
    "name": "HTML",
    Icon: SiHtml5
  },
  {
    "name": "CSS",
    Icon: SiCss3
  },
  {
    "name": "Bootstrap",
    Icon: BsBootstrapFill
  },
  {
    "name": "Tailwind",
    Icon: SiTailwindcss
  },
  {
    "name": "styled-components",
    Icon: SiStyledcomponents
  },
  {
    "name": "JavaScript",
    Icon: SiJavascript
  },
  {
    "name": "JQuery",
    Icon: SiJquery
  },
  {
    "name": "React",
    Icon: SiReact
  },
  {
    "name": "Next.js",
    Icon: SiNextdotjs
  },
  {
    "name": "Node",
    Icon: DiNodejs
  },
  {
    "name": "Express",
    Icon: SiExpress
  },
  {
    "name": "MySQL",
    Icon: SiMysql
  },
  {
    "name": "PostgreSQL",
    Icon: SiPostgresql
  },
  {
    "name": "MongoDB",
    Icon: SiMongodb
  },
  {
    "name": "GitHub",
    Icon: SiGithub
  },
  {
    "name": "Photoshop",
    Icon: SiAdobephotoshop
  },
  {
    "name": "Figma",
    Icon: SiFigma
  }]

  return (
    <section id="skills">
      <motion.div
        style={{ scale }}
        className="flex px-6 py-20 mx-auto my-2 text-center items-center justify-center md:px-12 lg:px-80">
        <motion.div
          style={{
            scale: scrollYProgress
          }}>
          <h4 className="text-3xl font-Montserrat font-bold my-5">Skills and Tools</h4>
          {skills.map(({ name, Icon }, index) => (
            <Pill
              key={index}
              name={name}
              Icon={Icon}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
};

export default Skills;
