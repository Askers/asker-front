import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import AskCard from '../../components/AskCard';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_ASKS_REQUEST } from '../../reducers/ask';
import wrapper from '../../store/configureStore';

const UserAdmin = () => {
  const { asks } = useSelector((state) => state.ask);
  const { user } = useSelector((state) => state.user);

  const userId = user.id;
  const username = user.username;

  return (
    <>
      {asks.map((ask) => (
        <AskCard nickname={ask.nickname} content={ask.content} />
      ))}
    </>
  );
};

/*
  SSR Dispatch
  LOAD_MY_INFO_REQUEST
  LOAD_ASKS_REQUEST
*/
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

export default UserAdmin;
