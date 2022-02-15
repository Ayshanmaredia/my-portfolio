import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Listicle from './screens/Listicle';
import MovieDb from './screens/MovieDb';
import Portfolio from './screens/Portfolio';
import { BsBootstrapFill } from 'react-icons/bs'
import { AiFillApi } from 'react-icons/ai'
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
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
    "description": "MovieDB is a platform to know about your favourite movies. It fetches information from API. You can get the list of movies from popular, top rated and upcoming. From this project I learned about search functionality with the concept of debouncing, concept of useState and data context. The website is also compatible for mobile and tablet devices.",
    "image": require("./assets/moviedb.png"),
    "current": "moviedb",
    "next": "listicle",
    "previous": null,
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
    "description": "Listicle Board is a web application where you can manage your list of items, create a group list and invite your friends to the group. I have used SMTP to send the group invitation to the user. The application uses JWT token for login/register functionality and is connected to the back-end. You can create, update and delete the list or group anytime you want.",
    "image": require("./assets/listicle.png"),
    "current": "listicle",
    "next": "portfolio",
    "previous": "moviedb",
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
    "description": "A website to demonstrate my skills and projects. Have used framer motion for animation. It has the live projects and their source code. The website is also compatible for mobile and tablet.",
    "image": require("./assets/image3.jpg"),
    "current": "portfolio",
    "next": null,
    "previous": "listicle",
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
