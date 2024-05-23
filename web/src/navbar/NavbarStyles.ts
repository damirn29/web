import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from './colors';

export const GlobalStyle = createGlobalStyle<{ isDarkTheme: boolean }>`
  body {
    background-color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkBackgroundColor : colors.lightBackgroundColor)};
    color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkTextColor : colors.lightTextColor)};
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
    box-sizing: border-box;
  }
`;

export const StyledNav = styled.nav<{ isDarkTheme: boolean }>`
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkBackgroundColor : colors.lightBackgroundColor)};
  width: 100%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const StyledLi = styled.li`
  margin-right: 10px;

  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const StyledButton = styled.button<{ isDarkTheme: boolean }>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkButtonColor : colors.lightButtonColor)};
  cursor: pointer;
  background: none;
  border: none;
  padding: 5px 10px;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)<{ isDarkTheme: boolean }>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkTextColor : colors.lightTextColor)};
  text-decoration: none;
  padding: 5px 10px;

  &:hover {
    text-decoration: underline;
  }
`;
