import React from 'react';
import styled from 'styled-components';
import { lightTextColor } from '../../navbar/colors';

const StyledHeading = styled.h1`
  color: ${lightTextColor};
`;

const StyledParagraph = styled.p`
  color: ${lightTextColor};
`;

const About: React.FC = () => {
  return (
    <div>
      <StyledHeading>О нас</StyledHeading>
      <StyledParagraph>
        Это страница с информацией о нашей команде или о проекте.
      </StyledParagraph>
    </div>
  );
}

export default About;
