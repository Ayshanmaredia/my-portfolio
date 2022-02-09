import React from 'react';
import ProjectDetails from '../components/ProjectDetails';

const MovieDb = ({ projects }) => {
    return (
        <ProjectDetails projects={projects} />
    );
};

export default MovieDb;
