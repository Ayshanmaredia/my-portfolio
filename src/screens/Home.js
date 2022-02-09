import React from 'react';
import Intro from '../components/Intro';
import ProjectsList from '../components/projects/ProjectsList';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';

const Home = ({ projects }) => {
    return (
        <>
            <NavBar />
            <div className="bg-slate-100 py-5">

                <Intro />
                <ProjectsList
                    projects={projects}
                />
                <Skills />
                <Contact />
            </div>
        </>
    );
};

export default Home;
