import React from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';

const NavBar = ({ showLinks = true }) => {

    return (
        <nav className="sticky top-0 w-full z-10 bg-slate-50 border-gray-200 px-4 py-2.5 md:px-32 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="/" className="flex">
                    <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                        <img className="w-10" src={require("../assets/logo.png")} alt="programmerImage" />
                    </span>
                </a>
                <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Show menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="inline-flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {showLinks &&
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 hover:text-theme-primary md:p-0" aria-current="page">
                                    Home
                                </a>
                            </li>
                        }
                        {showLinks &&
                            <li>
                                <a href="#contact" className="block py-2 pr-4 pl-3 hover:text-theme-primary md:p-0">
                                    Contact
                                </a>
                            </li>
                        }
                        <li>
                            <a href="https://github.com/Ayshanmaredia" target="_blank" rel="noreferrer" className="block py-2 pr-4 pl-3 hover:text-theme-primary md:p-0">
                                <SiGithub className="inline-block text-sm mr-0.5 mb-1" />  GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/ayshan-maredia" target="_blank" rel="noreferrer" className="block py-2 pr-4 pl-3 hover:text-theme-primary md:p-0">
                                <SiLinkedin className="inline-block text-sm mr-0.5 mb-1" /> LinkedIn
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;
