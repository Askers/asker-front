import React from 'react';
import styled from 'styled-components';
import theme from '../assets/theme';

const Container = styled.footer`
  display: none;

  @media only screen and (min-width: 768px) {
    width: inherit;
    height: inherit;
    background-color: ${theme.colors.white};
    box-shadow: ${theme.colors.shadow};
    border-radius: ${theme.radius.mobile};
    display: flex;
  }

  transition: all 0.5s ease-in-out;
`;

const Footer = () => <Container>Footer</Container>;

export default Footer;
