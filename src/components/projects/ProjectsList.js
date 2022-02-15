import React from 'react';
import Project from './Project';

const ProjectsList = ({ projects }) => {

  return (
    <section id="project">
      <h4 className="text-3xl font-bold my-5 text-center">Projects</h4>
      <div className='flex flex-col justify-center items-center px-10 md:flex-row lg:px-32'>
        {
          projects.map((project) => (
            <div key={project.id} className="m-4">
              <Project {...project} />
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default ProjectsList;
