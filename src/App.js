import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ProjectDetails from './screens/ProjectDetails';
import NavBar from './components/NavBar';

function App() {

  const projects = [{
    "id": 1,
    "name": "Movie DB",
    "language": "React, JavaScript, React Bootstrap",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": require("./assets/image1.jpg")
  },
  {
    "id": 2,
    "name": "Listicle",
    "language": "React, JavaScript, React Bootstrap",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": require("./assets/image2.jpg")
  },
  {
    "id": 3,
    "name": "Portfolio",
    "language": "React, JavaScript, Tailwind",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": require("./assets/image3.jpg")
  }]

  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home projects={projects} />} />
          <Route path="/projectDetail" element={<ProjectDetails projects={projects} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
