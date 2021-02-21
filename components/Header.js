import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import styled from 'styled-components';
import theme from '../assets/theme';

const Container = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  transition: all 0.5s ease-in-out;
`;

const Toggle = styled.button`
  all: unset;
  width: 3rem;
  height: 1.5rem;
  top: ${theme.gap.large};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};
  border-radius: ${theme.radius.max};
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.medium};

  position: fixed;
  z-index: 99;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
    background-color: ${theme.colors.blue};
    color: ${theme.colors.white};
  }
`;

const NavList = styled.nav`
  display: ${(props) => (props.toggle ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: ${theme.gap.base};
  top: ${theme.gap.nav};
  right: ${theme.margins.mobile};
  position: fixed;
  z-index: 99;

  @media only screen and (min-width: 768px) {
    right: ${theme.margins.pc};
  }

  transition: all 0.5s ease-in-out;
`;

const Label = styled.span`
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
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const moveToHome = () => {
    Router.push(`/${me.id}`);
  };
  const moveToAdmin = () => {
    Router.push(`/${me.id}/admin`);
  };

  return (
    <Container>
      <Toggle onClick={handleToggle}>+</Toggle>
      <NavList toggle={toggle}>
        <Label onClick={moveToHome}>홈</Label>
        <Label onClick={moveToAdmin}>질문함</Label>
      </NavList>
    </Container>
  );
};

export default Header;
