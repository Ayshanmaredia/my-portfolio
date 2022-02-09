import React from 'react';
import ProjectDetails from '../components/ProjectDetails';

const Portfolio = ({ projects }) => {
    return (
        <ProjectDetails projects={projects} />
    );
};

export default Portfolio;
