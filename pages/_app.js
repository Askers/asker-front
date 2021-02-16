import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import wrapper from '../store/configureStore';
import GrobalStyles from '../assets/globalStyles';
import theme from '../assets/theme';
// 전역으로 적용하고 싶은 것 임포트

const Asker = ({ Component }) => (
  <>
    <GrobalStyles />
    <ThemeProvider theme={{ theme }}>
      <Component />
    </ThemeProvider>
  </>
);

Asker.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// HOC
export default wrapper.withRedux(Asker);
