// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isAuth: boolean;
  handleAuthentication: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth, handleAuthentication }) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={handleAuthentication}>
            {isAuth ? 'Выйти' : 'Войти'}
          </button>
        </li>
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/tasks">Список задач</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/contact">Контакты</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
