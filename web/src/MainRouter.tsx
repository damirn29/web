import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Tasks from './pages/tasks/Tasks';
import About from './pages/about/About';
import Contact from './pages/contact/contact';
import Navbar from './navbar/Navbar';

const MainRouter: React.FC<{ isAuth: boolean, handleAuthentication: () => void }> = ({ isAuth, handleAuthentication }) => {
  return (
    <div>
      <Navbar isAuth={isAuth} handleAuthentication={handleAuthentication} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Добавьте другие маршруты здесь */}
      </Routes>
    </div>
  );
};

export default MainRouter;