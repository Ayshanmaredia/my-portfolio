import React from 'react';
import Pill from './Pill';
import { BsBootstrapFill } from 'react-icons/bs'
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiJquery,
  SiExpress,
  SiAngular,
  SiMysql,
  SiPostgresql,
  SiGithub,
  SiMongodb,
  SiAdobephotoshop
} from 'react-icons/si';
import { motion, useViewportScroll, useTransform } from 'framer-motion'

const Skills = () => {

  const { scrollYProgress } = useViewportScroll()
  const scale = useTransform(scrollYProgress, [0, 1.5], [0.2, 1.5]);

  const skills = [{
    "name": "React",
    Icon: SiReact
  },
  {
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
    "name": "JavaScript",
    Icon: SiJavascript
  },
  {
    "name": "JQuery",
    Icon: SiJquery
  },
  {
    "name": "Express",
    Icon: SiExpress
  },
  {
    "name": "Angular",
    Icon: SiAngular
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
    "name": "GitHub",
    Icon: SiGithub
  },
  {
    "name": "MongoDB",
    Icon: SiMongodb
  },
  {
    "name": "Photoshop",
    Icon: SiAdobephotoshop
  }
  ]

  return (
    <section id="skills">
      <motion.div
        style={{ scale }}
        className="flex px-6 py-20 mx-auto my-2 text-center items-center justify-center md:px-80">
        <motion.div
          style={{
            scale: scrollYProgress
          }}>
          <h4 className="text-3xl font-bold my-5">Skills and Tools</h4>
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
