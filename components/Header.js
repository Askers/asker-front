import React from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import theme from '../assets/theme';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 0.5s ease-in-out;
`;

const NavList = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${theme.gap.nav};
  position: fixed;
  z-index: 99;

  @media only screen and (min-width: 768px) {
    top: ${theme.margins.pc};
  }

  transition: all 0.5s ease-in-out;
`;

const Label = styled.span`
  margin: 0 ${theme.margins.mobile};
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
  font-weight: bold;

  :hover {
    cursor: pointer;
    color: ${theme.colors.blue};
  }
`;

const Header = () => {
  const { me } = useSelector((state) => state.auth);

  const goToHome = () => {
    Router.push(`/${me.id}`);
  };
  const goToAdmin = () => {
    Router.push(`/${me.id}/admin`);
  };

  return (
    <Container>
      <NavList>
        <Label onClick={goToHome}>홈</Label>
        <Label onClick={goToAdmin}>질</Label>
      </NavList>
    </Container>
  );
};

export default Header;
