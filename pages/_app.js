import React from 'react';
import PropTypes from 'prop-types';
import withRduxSaga from 'next-redux-saga';
import wrapper from '../store/configureStore';
// 전역으로 적용하고 싶은 것 임포트

const Asker = ({ Component }) => <Component />;

Asker.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

// HOC
export default wrapper.withRedux(withRduxSaga(Asker));
