import React from 'react';
import ProjectDetails from '../components/projectDetails/ProjectDetails';

const Portfolio = ({ projects }) => {
    return (
        <ProjectDetails projects={projects} />
    );
};

export default Portfolio;
