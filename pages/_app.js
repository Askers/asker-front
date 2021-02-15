import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import wrapper from '../store/configureStore';
import GrobalStyles from '../assets/globalStyles';
import theme from '../assets/theme';
import media from '../assets/media';
// 전역으로 적용하고 싶은 것 임포트

const Asker = ({ Component }) => (
  <>
    <Head>
      <title>Asker</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <GrobalStyles />
    <ThemeProvider theme={{ theme, ...media }}>
      <Component />
    </ThemeProvider>
  </>
);

Asker.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// HOC
export default wrapper.withRedux(Asker);
