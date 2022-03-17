import React, { useState } from 'react';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const NavBar = ({ showLinks = true }) => {


    const [openNavbar, setOpenNavbar] = useState(false);

    const getOverflowClass = () => {
        return !openNavbar ? "overflow-hidden" : "";
    }

    const toggleNavbar = () => {
        setOpenNavbar(!openNavbar)
    }

    return (
        <nav className={"sticky top-0 w-full z-10 bg-slate-50 px-4 py-2.5 md:px-32 pl-7 md:pl-auto " + (getOverflowClass())}>
            <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex">
                        <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
                            <img className="w-10" src={require("../assets/logo.png")} alt="programmerImage" />
                        </span>
                    </Link>
                    <span className="text-2xl cursor-pointer md:hidden" onClick={toggleNavbar}>
                        <GiHamburgerMenu />
                    </span>
                </div>
                <ul className="md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-slate-50 w-full left-0 md:w-auto py-2.5 md:py-0 pl-4 md:pl-0">
                    <li className="mx-3.5 my-1 md:my-0" onClick={toggleNavbar}>
                        <Link to="/" className="block py-2 pr-4 pl-3 hover:text-theme-primary md:p-0">
                            Home
                        </Link>
                    </li>
                    {showLinks &&
                        <li className="mx-3.5 my-1 md:my-0" onClick={toggleNavbar}>
                            <a href="#contact" className="block py-2 pr-4 pl-3 hover:text-theme-primary md:p-0">
                                Contact
                            </a>
                        </li>
                    }
                    <li className="mx-3.5 my-1 md:my-0" onClick={toggleNavbar}>
                        <a href="https://github.com/Ayshanmaredia" target="_blank" rel="noreferrer" className="block py-2 pr-4 pl-3 hover:text-theme-primary md:p-0">
                            <SiGithub className="inline-block text-sm mr-0.5 mb-1" />  GitHub
                        </a>
                    </li>
                    <li className="mx-3.5 my-1 md:my-0" onClick={toggleNavbar}>
                        <a href="https://www.linkedin.com/in/ayshan-maredia" target="_blank" rel="noreferrer" className="block py-2 pr-4 pl-3 hover:text-theme-primary md:p-0">
                            <SiLinkedin className="inline-block text-sm mr-0.5 mb-1" /> LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};

export default NavBar;
