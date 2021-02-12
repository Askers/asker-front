import React from 'react';
import Button from '../components/Button';
// import axios from 'axios';
// import { END } from 'redux-saga';
// import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
// import AskForm from '../components/AskForm';
// import wrapper from '../store/configureStore';

// Style

const Home = () => (
  <>
    <Button name="Join" dest="login" />
  </>
);

// SSR
// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {
//     // Cookie
//     const cookie = context.req ? context.req.headers.cookie : '';
//     axios.defaults.headers.Cookie = cookie;
//     context.store.dispatch({
//       type: LOAD_MY_INFO_REQUEST,
//     });

//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
//   },
// );

export default Home;
