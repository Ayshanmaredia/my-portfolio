import React from 'react';
import Intro from '../components/Intro';
import ProjectsList from '../components/projects/ProjectsList';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="bg-slate-100 py-5">
            <Intro />
            <ProjectsList />
            <Skills />
            <Contact />
        </div>
    );
};

export default Home;
