import React from 'react';
import { END } from 'redux-saga';
import axios from 'axios';
import Layout from '../components/Layout';
import UserProfile from '../components/UserProfile';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { LOAD_ASKS_REQUEST } from '../reducers/ask';
import wrapper from '../store/configureStore';

const Profile = () => (
  <Layout>
    <UserProfile />
  </Layout>
);

// SSR
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // Cookie
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = cookie;
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_ASKS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default Profile;
