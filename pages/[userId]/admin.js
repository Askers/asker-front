import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Router, { useRouter } from 'next/router';
import AskCard from '../../components/AskCard';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import { LOAD_ASKS_REQUEST } from '../../reducers/asks';
import wrapper from '../../store/configureStore';

const UserAdmin = () => {
  const { asks } = useSelector((state) => state.asks);
  const { me } = useSelector((state) => state.user);
  const router = useRouter();
  const { userId } = router.query;

  // type 변환 -> String
  const myID = String(me.id);
  const userID = userId;

  // 프론트 단에서 me의 정보와 user의 정보가 다르면 본인 index로 redirect
  useEffect(() => {
    if (myID !== userID) {
      Router.replace(`/${me.id}`);
    }
  }, [me.id]);

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
