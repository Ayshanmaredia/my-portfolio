import React from 'react';
import Project from './Project';

const ProjectsList = () => {

  const projects = [{
    "id": 1,
    "name": "Movie DB",
    "language": "React, JavaScript, React Bootstrap"
  },
  {
    "id": 2,
    "name": "Listicle",
    "language": "React, JavaScript, React Bootstrap"
  },
  {
    "id": 3,
    "name": "Portfolio",
    "language": "React, JavaScript, Tailwind"
  }]

  return (
    <section id="project">
      <div className='flex flex-row justify-center px-32'>
        {
          projects.map((project) => (
            <div key={project.id} className="m-4">
              <Project {...project}/>
            </div>
          ))
        }
      </div>
    </section>
  );
};

export default ProjectsList;
