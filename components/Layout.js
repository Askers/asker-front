// index, profile, signup이 공통적으로 사용하는 레이아웃임
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

// STYLED COMPONENTS
const LayoutContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const Layout = ({ children }) => (
  <LayoutContainer>
    <Header />
    {children}
    <Footer />
  </LayoutContainer>
);

// node: return안에 들어갈 수 있는 모든 것들이 노드다.
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
