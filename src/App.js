import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Listicle from './screens/Listicle';
import MovieDb from './screens/MovieDb';
import Portfolio from './screens/Portfolio';
import { BsBootstrapFill } from 'react-icons/bs'
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiExpress,
  SiPostgresql,
} from 'react-icons/si';

function App() {

  const projects = [{
    "id": 1,
    "name": "Movie DB",
    "language": "React, JavaScript, React Bootstrap",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": require("./assets/image1.jpg"),
    "current": "moviedb",
    "next": "listicle",
    "previous": null,
    "link": "https://github.com/Ayshanmaredia/movieDB",
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
    }]
  },
  {
    "id": 2,
    "name": "Listicle",
    "language": "React, JavaScript, React Bootstrap",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": require("./assets/image2.jpg"),
    "current": "listicle",
    "next": "portfolio",
    "previous": "moviedb",
    "link": "https://github.com/Ayshanmaredia/todo-client",
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
      "name": "Express",
      Icon: SiExpress
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
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": require("./assets/image3.jpg"),
    "current": "portfolio",
    "next": null,
    "previous": "listicle",
    "link": "https://github.com/Ayshanmaredia/my-portfolio",
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
