import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { END } from 'redux-saga';
import Router, { useRouter } from 'next/router';
import { LOAD_AUTH_REQUEST } from '../../reducers/auth';
import { LOAD_ASKS_REQUEST } from '../../reducers/asks';
import wrapper from '../../store/configureStore';
import Layout from '../../components/Layout';
import theme from '../../assets/theme';
import AnswerFormCard from '../../components/Cards/AnswerFormCard';
import AdminBlock from '../../components/Blocks/AdminBlock';

const UserAdminSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    gap: ${theme.gap.large};
  }

  transition: all 0.5s ease-in-out;
`;

const AskCardList = styled.section``;

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
    <Layout>
      <UserAdminSection>
        <AdminBlock username={me.username} />
      </UserAdminSection>
      <AskCardList>
        {asks.map((ask) => (
          <AnswerFormCard
            key={ask.id}
            askId={ask.id}
            nickname={ask.nickname}
            content={ask.content}
            date={ask.createdAt}
          />
        ))}
      </AskCardList>
    </Layout>
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
      data: context.params.userId,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default UserAdmin;
