import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import { HiLink, HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Pill from './Pill';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion"


const ProjectDetails = ({ projects }) => {

  const [project, setProject] = useState();

  const pathName = useLocation().pathname;

  console.log(pathName)

  const navigate = useNavigate();

  useEffect(() => {
    setProject(projects.find(element => element.current === pathName.replace("/", "")))
  }, [pathName])

  const onNextClick = () => {
    const nextId = project.id + 1;
    setProject(projects.find((element) => element.id === nextId))
    navigate(`?id=${nextId}`)
  }

  const onPrevClick = () => {
    const prevId = project.id - 1
    setProject(projects.find((element) => element.id === prevId))
    navigate(`?id=${prevId}`)
  }

  return (
    project ?
      <>
        <NavBar showLinks={false} />
        <AnimatePresence exitBeforeEnter>
          <motion.section
            initial={{ translateX: -100 }}
            animate={{ translateX: 0 }}
            exit={{ translateX: 100 }}
            id="projectDetails"
            className="bg-slate-100"
          >
            <div className="flex flex-col justify-center items-center pt-16 px-10 md:px-32">
              <div className='flex justify-between w-full mb-3 md:w-4/6'>
                <div>
                  <h3 className="text-3xl font-bold">{project.name}</h3>
                </div>
                <div>
                  <button className="bg-theme-primary hover:opacity-80 text-white py-1.5 px-3 mr-2 rounded">
                    <HiLink className="inline-block text-lg mr-1 mb-1" />Live
                  </button>
                  <button className="bg-black hover:opacity-80 text-white text-center py-1.5 px-3 rounded">
                    <SiGithub className="inline-block text-lg mb-1" /> Source Code
                  </button>
                </div>
              </div>
              <div className='h-auto w-full bg-gray-400 md:w-4/6'>
                <img src={project.image} alt="project screenshot" />
              </div>
              <div className="w-full mt-3 md:w-4/6">
                <p>{project.description}</p>
              </div>
            </div>
            <div className="flex flex-col px-10 py-10 md:px-80">
              <div>
                <h4 className="text-lg font-medium mb-2">Tools and Technologies</h4>
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
              <div className="mt-5">
                {
                  project && project.next &&
                  <Link to={`/${project.next}`}>
                    <button className="bg-theme-primary hover:opacity-80 text-white py-1.5 px-3 rounded float-right" onClick={onNextClick}>
                      {project.next} <HiArrowRight className="text-sm inline-block mb-1" />
                    </button>
                  </Link>
                }
                {
                  project && project.previous &&
                  <Link to={`/${project.previous}`}>
                    <button className="bg-theme-primary hover:opacity-80 text-white py-1.5 px-3 rounded float-left" onClick={onPrevClick}>
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
      <div>
        Loading...
      </div>
  )
};

export default ProjectDetails;
