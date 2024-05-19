import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from './colors';

export const GlobalStyle = createGlobalStyle<{ isDarkTheme: boolean }>`
  body {
    background-color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkBackgroundColor : colors.lightBackgroundColor)};
    color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkTextColor : colors.lightTextColor)};
  }
`;

export const StyledNav = styled.nav<{ isDarkTheme: boolean }>`
  background-color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkBackgroundColor : colors.lightBackgroundColor)};
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledUl = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

export const StyledLi = styled.li`
  margin-right: 10px;
`;

export const StyledButton = styled.button<{ isDarkTheme: boolean }>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkButtonColor : colors.lightButtonColor)};
  cursor: pointer;
`;

export const StyledLink = styled(Link)<{ isDarkTheme: boolean }>`
  color: ${({ isDarkTheme }) => (isDarkTheme ? colors.darkTextColor : colors.lightTextColor)};
  text-decoration: none;
`;
