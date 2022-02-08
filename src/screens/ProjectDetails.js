import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { SiGithub } from 'react-icons/si';
import { HiLink } from 'react-icons/hi'


const ProjectDetails = ({ projects }) => {

  const [project, setProject] = useState();

  const search = useLocation().search;

  console.log()

  useEffect(() => {
    const id = new URLSearchParams(search).get('id');
    console.log(id);
    setProject(projects.find(element => element.id === parseInt(id)))
  }, [])

  return (
    project ?
      <section id="projectDetails" className="bg-slate-100">
        <div className="flex flex-col justify-center items-center py-16 px-32">
          <div className='flex justify-between w-4/6 mb-3'>
            <div>
              <h3 className="text-3xl font-bold">{project.name}</h3>
            </div>
            <div>
              <button className="bg-theme-primary hover:opacity-80 text-white py-1.5 px-3 mr-2 rounded">
                <HiLink className="inline-block mb-1 mr-1" />Live
              </button>
              <button className="bg-black hover:opacity-80 text-white text-center py-1.5 px-3 rounded">
                <SiGithub className="inline-block mb-1" /> Source Code
              </button>
            </div>
          </div>
          <div className='h-auto w-4/6 bg-gray-400'>
            <img src={project.image} alt="project screenshot" />
          </div>
          <div className="w-4/6 mt-3">
            <p>{project.description}</p>
          </div>
        </div>
      </section>
      :
      <div>
        Loading...
      </div>
  )
};

export default ProjectDetails;
