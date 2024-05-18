import React, { useState } from 'react';
import {
  GlobalStyle,
  StyledNav,
  StyledUl,
  StyledLi,
  StyledButton,
  StyledLink
} from './NavbarStyles';

interface NavbarProps {
  isAuth: boolean;
  handleAuthentication: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isAuth, handleAuthentication }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  return (
    <>
      <GlobalStyle isDarkTheme={isDarkTheme} />
      <StyledNav isDarkTheme={isDarkTheme}>
        <StyledUl>
          <StyledLi><StyledLink to="/" isDarkTheme={isDarkTheme}>Главная</StyledLink></StyledLi>
          <StyledLi><StyledLink to="/tasks" isDarkTheme={isDarkTheme}>Список задач</StyledLink></StyledLi>
          <StyledLi><StyledLink to="/about" isDarkTheme={isDarkTheme}>О нас</StyledLink></StyledLi>
          <StyledLi><StyledLink to="/contact" isDarkTheme={isDarkTheme}>Контакты</StyledLink></StyledLi>
          <StyledLi><StyledLink to="/support" isDarkTheme={isDarkTheme}>Техподдержка</StyledLink></StyledLi>
          <StyledLi>
            {isAuth ? (
              <StyledLink to="/" onClick={handleAuthentication} isDarkTheme={isDarkTheme}>
                Выйти
              </StyledLink>
            ) : (
              <StyledLink to="/login" isDarkTheme={isDarkTheme}>
                Войти
              </StyledLink>
            )}
          </StyledLi>
          <StyledLi>
            <StyledButton onClick={toggleTheme} isDarkTheme={isDarkTheme}>Сменить тему</StyledButton>
          </StyledLi>
        </StyledUl>
      </StyledNav>
    </>
  );
};

export default Navbar;
