import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Listicle from './screens/Listicle';
import MovieDb from './screens/MovieDb';
import Portfolio from './screens/Portfolio';
import { BsBootstrapFill } from 'react-icons/bs'
import { AiFillApi } from 'react-icons/ai'
import { DiNodejs } from 'react-icons/di'
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiStyledcomponents,
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiFramer,
} from 'react-icons/si';

function App() {

  const projects = [{
    "id": 1,
    "name": "Movie DB",
    "language": "React, JavaScript, React Bootstrap",
    "description": "MovieDB is an online platform showing information related to films. It uses TMDB API to fetch latest information about your favorite movies. It helps you search different movies, get in-detail information about films and also lets you watch movie trailers. I have created this project using React and hosted it on Netlify. While implanting the project I learned important concepts like debouncing and learned Bootstrap UI framework.",
    "image": [require("./assets/moviedb.png"), require("./assets/moviedb2.png"), require("./assets/moviedb3.png")],
    "current": "moviedb",
    "next": "listicle",
    "previous": null,
    "livelink": "https://movie-db-22.netlify.app",
    "sourceCodelink": "https://github.com/Ayshanmaredia/movieDB",
    "skills": [{
      "name": "React",
      Icon: SiReact
    },
    {
      "name": "HTML",
      Icon: SiHtml5
    },
    {
      "name": "CSS",
      Icon: SiCss3
    },
    {
      "name": "Bootstrap",
      Icon: BsBootstrapFill
    },
    {
      "name": "JavaScript",
      Icon: SiJavascript
    },
    {
      "name": "API",
      Icon: AiFillApi
    }]
  },
  {
    "id": 2,
    "name": "Listicle",
    "language": "React, JavaScript, React Bootstrap",
    "description": "Listicle Board is a platform where you can manage your to-do items as well as have common list of to-dos by inviting your friends into your group. While creating this project I learned concepts like JWT authentication, sending mails with SMTP and creating API with Express.",
    "image": [require("./assets/listicle.png"), require("./assets/listicle2.png"), require("./assets/listicle3.png")],
    "current": "listicle",
    "next": "portfolio",
    "previous": "moviedb",
    "livelink": "https://listicle-board.netlify.app",
    "sourceCodelink": "https://github.com/Ayshanmaredia/todo-client",
    "skills": [{
      "name": "React",
      Icon: SiReact
    },
    {
      "name": "HTML",
      Icon: SiHtml5
    },
    {
      "name": "CSS",
      Icon: SiCss3
    },
    {
      "name": "Styled-components",
      Icon: SiStyledcomponents
    },
    {
      "name": "JavaScript",
      Icon: SiJavascript
    },
    {
      "name": "Express",
      Icon: SiExpress
    },
    {
      "name": "Node",
      Icon: DiNodejs
    },
    {
      "name": "PostgreSQL",
      Icon: SiPostgresql
    }]
  },
  {
    "id": 3,
    "name": "Portfolio",
    "language": "React, JavaScript, Tailwind",
    "description": "A website to demonstrate my skills and projects with their live links. I have used framer motion for animation. The website is also compatible for mobile and tablet.",
    "image": [require("./assets/portfolio.png"),  require("./assets/portfolio2.png"), require("./assets/portfolio3.png")],
    "current": "portfolio",
    "next": null,
    "previous": "listicle",
    "livelink": "https://www.ayshanmaredia.com",
    "sourceCodelink": "https://github.com/Ayshanmaredia/my-portfolio",
    "skills": [{
      "name": "React",
      Icon: SiReact
    },
    {
      "name": "HTML",
      Icon: SiHtml5
    },
    {
      "name": "CSS",
      Icon: SiCss3
    },
    {
      "name": "Tailwind",
      Icon: SiTailwindcss
    },
    {
      "name": "JavaScript",
      Icon: SiJavascript
    },
    {
      "name": "Framer Motion",
      Icon: SiFramer
    }]
  }]

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/listicle" element={<Listicle projects={projects} />} />
          <Route path="/moviedb" element={<MovieDb projects={projects} />} />
          <Route path="/portfolio" element={<Portfolio projects={projects} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
