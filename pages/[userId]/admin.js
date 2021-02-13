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
  const { user } = useSelector((state) => state.user);
  const { asks } = useSelector((state) => state.asks);
  const router = useRouter();
  const { routeID } = router.query;

  console.log(routeID);

  // type 변환 -> String
  const myID = String(user.id);

  // 프론트 단에서 me의 정보와 user의 정보가 다르면 본인 index로 redirect
  useEffect(() => {
    if (myID !== routeID) {
      Router.replace(`/${user.id}`);
    }
  }, [user.id]);

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
