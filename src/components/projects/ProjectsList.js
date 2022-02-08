import React from 'react';
import Project from './Project';

const ProjectsList = ({ projects }) => {

  return (
    <section id="project">
      <div className='flex flex-row justify-center px-32'>
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
