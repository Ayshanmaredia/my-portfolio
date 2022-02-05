import React from 'react';
import {
  SiReact,
  SiHtml5,
  SiCss3,
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

const Skills = () => {

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
      <div className="flex px-80 py-24 mx-auto my-2 text-center items-center justify-center ">
        <div>
          <h4 className="text-3xl font-bold my-7">Skills and Tools</h4>
          {skills.map(({ name, Icon }) => (
            <p key={name} className="px-4 py-2 mx-2 my-1 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-full inline-block">
              <Icon className=" mr-1 inline-block" /> {name}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
};

export default Skills;
