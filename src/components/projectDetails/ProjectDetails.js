import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import { HiLink, HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Pill from '../Pill';
import NavBar from '../NavBar';
import Spin from '../Spin';
import ProjectImages from './ProjectImages';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"


const ProjectDetails = ({ projects }) => {

  const [project, setProject] = useState();

  const pathName = useLocation().pathname;

  useEffect(() => {
    setProject(projects.find(element => element.current === pathName.replace("/", "")))
  }, [pathName])

  return (
    project ?
      <>
        <NavBar showLinks={false} />
        <AnimatePresence exitBeforeEnter>
          <motion.section
            initial={{ translateX: "100%" }}
            animate={{ translateX: 0 }}
            exit={{ translateX: "-100%" }}
            id="projectDetails"
            className="bg-slate-100"
          >
            <div className="flex flex-col justify-center items-center pt-8 px-6 lg:px-32">
              <div className='flex justify-between w-full mb-3 lg:w-4/6'>
                <div>
                  <h3 className="text-2xl font-Montserrat font-bold md:text-3xl">{project.name}</h3>
                </div>
                <div className='flex flex-row'>
                  <a href={project.livelink} target="_blank" rel="noreferrer">
                    <button className="bg-theme-primary hover:opacity-80 text-white text-sm py-1.5 px-3 mr-2 rounded md:text-base">
                      <HiLink className="inline-block text-sm mr-1 mb-1 lg:text-lg" />Live
                    </button>
                  </a>
                  <a href={project.sourceCodelink} target="_blank" rel="noreferrer">
                    <button className="bg-black hover:opacity-80 text-white text-sm py-1.5 px-3 rounded md:text-base">
                      <SiGithub className="inline-block text-sm mb-1 md:text-lg" /> Source Code
                    </button>
                  </a>
                </div>
              </div>
              <div className='h-auto w-full bg-slate-200 lg:w-4/6'>
                <ProjectImages
                  project={project}
                />
              </div>
              <div className="font-Roboto w-full mt-3 lg:w-4/6">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="flex flex-col px-6 py-10 lg:px-80 lg:mx-4">
              <div>
                <h4 className="text-lg font-Montserrat font-semibold mb-2">Tools and Technologies</h4>
              </div>
              <div>
                {project.skills.map(({ name, Icon }, index) => (
                  <Pill
                    key={index}
                    name={name}
                    Icon={Icon}
                  />
                ))}
              </div>
              <div className="mt-10">
                {
                  project && project.next &&
                  <Link to={`/${project.next}`}>
                    <button className="bg-theme-primary hover:opacity-80 text-white py-1.5 px-3 rounded float-right">
                      {project.next} <HiArrowRight className="text-sm inline-block mb-1" />
                    </button>
                  </Link>
                }
                {
                  project && project.previous &&
                  <Link to={`/${project.previous}`}>
                    <button className="bg-theme-primary hover:opacity-80 text-white py-1.5 px-3 rounded float-left">
                      <HiArrowLeft className="text-sm inline-block mb-1" /> {project.previous}
                    </button>
                  </Link>
                }
              </div>
            </div>
          </motion.section>
        </AnimatePresence>
      </>
      :
      <div className='flex h-screen w-full justify-center items-center'>
        <Spin />
      </div>
  )
};

export default ProjectDetails;
