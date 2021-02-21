import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import theme from '../assets/theme';

const Container = styled.header`
  width: 1rem;
  height: 1rem;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};
  border-radius: ${theme.radius.mobile};

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

const LogoSection = styled.div`
  width: 50%;
  padding: ${theme.paddings.mobile};
`;

const NavSection = styled.nav`
  width: 50%;
  padding: ${theme.paddings.mobile};
`;
const Span = styled.span``;

const Header = () => {
  const { me } = useSelector((state) => state.auth);

  return (
    <Container>
      <LogoSection>
        <Span></Span>
        <Span>Asker</Span>
      </LogoSection>
      <NavSection>
        <Span></Span>
        <Span>dfesd</Span>
      </NavSection>
    </Container>
  );
};

export default Header;
