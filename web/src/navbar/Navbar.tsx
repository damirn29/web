import React from 'react';
import { Link } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import * as colors from './colors';

interface NavbarProps {
  isAuth: boolean;
  handleAuthentication: () => void;
}

const GlobalStyle = createGlobalStyle<{ isDarkTheme: boolean }>`
  body {
    background-color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkBackgroundColor : colors.lightBackgroundColor)};
    color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkTextColor : colors.lightTextColor)};
  }
`;

const StyledNav = styled.nav<{ isDarkTheme: boolean }>`
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkBackgroundColor : colors.lightBackgroundColor)};
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const StyledLi = styled.li`
  margin-right: 10px;
`;

const StyledButton = styled.button<{ isDarkTheme: boolean }>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkButtonColor : colors.lightButtonColor)};
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;
`;

const StyledLink = styled(Link)<{ isDarkTheme: boolean }>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkTextColor : colors.lightTextColor)};
  text-decoration: none;
`;

const Navbar: React.FC<NavbarProps> = ({ isAuth, handleAuthentication }) => {
  const [isDarkTheme, setIsDarkTheme] = React.useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(prevTheme => !prevTheme);
  };

  const handleLoginClick = () => {
    handleAuthentication(); // Вызов функции авторизации
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
          <StyledLi>
            {isAuth ? (
              <StyledButton onClick={handleLoginClick} isDarkTheme={isDarkTheme}>Выйти</StyledButton>
            ) : (
              <StyledLink to="/login" isDarkTheme={isDarkTheme}>
                <StyledButton isDarkTheme={isDarkTheme}>Войти</StyledButton>
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
