import React from 'react';
import { MdDownload } from 'react-icons/md';
import Resume from '../assets/Resume.pdf';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { motion } from 'framer-motion';

const Intro = () => {
    return (
        <section id="home">
            <div className="flex flex-col justify-center items-center px-6 md:flex-row lg:px-32 lg:h-[calc(100vh-48px)]">
                <motion.div
                    initial={{ x: -150 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="basis-1/2 mt-6 md:mt-0">
                    <h1 className="text-4xl font-Montserrat text-center leading-tight lg:text-5xl md:text-left">Hi, I am Ayshan Maredia, a <span className="text-theme-primary font-semibold">Front-End-Developer</span></h1>
                    <p className="mt-2">I am a passionate Front-end Developer with bachelors in Information Technology and recently graduated in Web design and development.
                    I like to build interactive UI layouts with my skills in development.
                    </p>
                    <div className="flex flex-row justify-center items-center md:justify-start">
                        <a href={Resume} download="Ayshan_Resume.pdf">
                            <button className="bg-theme-primary text-white py-1.5 px-3 my-5 rounded inline-block">
                                <MdDownload className="inline-block text-lg mr-0.5" /> Resume
                            </button>
                        </a>
                        <a href="https://github.com/Ayshanmaredia" target="_blank" rel="noreferrer" className="block py-2 pr-2 pl-3 text-gray-700 hover:text-theme-primary md:p-0 md:hidden">
                            <SiGithub className="inline-block text-2xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/ayshan-maredia-669479129/" target="_blank" rel="noreferrer" className="block py-2 pr-2 pl-3 text-gray-700 hover:text-theme-primary md:p-0 md:hidden">
                            <SiLinkedin className="inline-block text-2xl" />
                        </a>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 150 }}
                    animate={{ x: 0 }}
                    transition={{ type: "spring", stiffness: 50 }}
                    className="basis-1/2 content-center">
                    <img className="mx-auto w-11/12" src={require("../assets/programmer_image.png")} alt="programmerImage" />
                </motion.div>
            </div>
        </section>
    );
};

export default Intro;
