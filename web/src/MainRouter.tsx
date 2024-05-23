import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import Tasks from "./pages/tasks/Tasks";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
import StyledNav from "./navbar/Navbar";
import LoginForm from "./pages/form/form";
import Registration from "./pages/form/regForm";
import DynamicTodos from "./pages/dinamTask/dynamicTodos";
import { SupportForm } from "./pages/support/supportForm";

const MainRouter: React.FC<{ isAuth: boolean; handleAuthentication: () => void }> = ({
  isAuth,
  handleAuthentication,
}) => {
  return (
    <div>
      <StyledNav isAuth={isAuth} handleAuthentication={handleAuthentication} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/support" element={<SupportForm />} />
        <Route path="/dintodo" element={<DynamicTodos />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
