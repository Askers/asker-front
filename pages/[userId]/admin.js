import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Router, { useRouter } from 'next/router';
import AskCard from '../../components/AskCard';
import { LOAD_AUTH_REQUEST } from '../../reducers/auth';
import { LOAD_ASKS_REQUEST } from '../../reducers/asks';
import wrapper from '../../store/configureStore';

const UserAdmin = () => {
  const { me } = useSelector((state) => state.auth);
  const { asks } = useSelector((state) => state.asks);
  const router = useRouter();
  const { userId } = router.query;

  // 프론트 단에서 me의 정보와 me의 정보가 다르면 본인 index로 redirect
  // routeAdress와 me.id는 자료형이 다르다.
  const myID = me.id;
  const routeID = Number(userId);
  useEffect(() => {
    if (myID !== routeID) {
      Router.replace(`/${myID}`);
    }
  }, [myID]);

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
  LOAD_AUTH_REQUEST
  LOAD_ASKS_REQUEST
*/
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    // Cookie
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_AUTH_REQUEST,
    });
    context.store.dispatch({
      type: LOAD_ASKS_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default UserAdmin;
