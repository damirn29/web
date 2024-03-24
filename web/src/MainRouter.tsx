import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Tasks from './pages/tasks/Tasks';
import About from './pages/about/About';
import Contact from './pages/contact/contact';
import Login from './pages/login/login';
import StyledNav from './navbar/Navbar';

const MainRouter: React.FC<{ isAuth: boolean, handleAuthentication: () => void }> = ({ isAuth, handleAuthentication }) => {
  return (
    <div>
      <StyledNav isAuth={isAuth} handleAuthentication={handleAuthentication} />
      <Routes>
        {/* Маршрут к странице авторизации */}
        <Route path="/login" element={<Login handleAuthentication={handleAuthentication} />} />
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
