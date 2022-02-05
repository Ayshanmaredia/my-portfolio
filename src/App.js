import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import ProjectDetails from './screens/ProjectDetails';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/projectDetails" element={<ProjectDetails />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
