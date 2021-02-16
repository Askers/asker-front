import React from 'react';
import styled from 'styled-components';
import theme from '../assets/theme';

const Container = styled.footer`
  width: inherit;
  height: inherit;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};
  border-radius: ${theme.radius.mobile};

  @media only screen and (min-width: 768px) {
    border-radius: ${theme.radius.pc};
  }
  transition: all 0.5s ease-in-out;
`;

const Footer = () => <Container>Footer</Container>;

export default Footer;
