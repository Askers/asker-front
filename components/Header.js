import React from 'react';
import styled from 'styled-components';
import media from '../assets/module';

const Container = styled.footer`
  width: 1280px;
  height: 112px;
  padding: 32px 32px 6px 60px;
  border-radius: 20px;
  box-shadow: 8px 8px 16px 4px rgba(133, 139, 146, 0.06);
  border: solid 0.5px #ebebf9;
  background-color: #ffffff;
`;

const Header = () => {
  return <Container>헤더</Container>;
};

export default Header;
