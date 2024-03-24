import React from 'react';
import styled from 'styled-components';
import { lightTextColor } from '../../navbar/colors';

const StyledHeading = styled.h1`
  color: ${lightTextColor};
`;

const StyledParagraph = styled.p`
  color: ${lightTextColor};
`;

const Contact: React.FC = () => {
  return (
    <div>
      <StyledHeading>Контакты</StyledHeading>
      <StyledParagraph>
        Вы можете связаться с нами, используя следующие контактные данные.
      </StyledParagraph>
      <StyledParagraph>Email: example@example.com</StyledParagraph>
      <StyledParagraph>Телефон: +123456789</StyledParagraph>
    </div>
  );
}

export default Contact;
