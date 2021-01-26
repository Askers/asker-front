import React from "react";
import PropTypes from "prop-types";
import wrapper from "../store/configureStore";
// 전역으로 적용하고 싶은 것 임포트

const Asker = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

Asker.propTypes = {
  Component: PropTypes.elementType.isRequired,
};
export default wrapper.withRedux(Asker);
