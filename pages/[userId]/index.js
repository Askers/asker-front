import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { END } from 'redux-saga';
import { useRouter } from 'next/router';
import { LOAD_AUTH_REQUEST } from '../../reducers/auth';
import { LOAD_ANSWER_REQUEST } from '../../reducers/answer';
import Layout from '../../components/Layout';
import ProfileCard from '../../components/Cards/ProfileCard';
import wrapper from '../../store/configureStore';
import AskFormCard from '../../components/Cards/AskFormCard';
import theme from '../../assets/theme';

const UserIndexSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    gap: ${theme.gap.large};
  }

  transition: all 0.5s ease-in-out;
`;

const UserIndex = () => {
  const router = useRouter();
  const { userId } = router.query;

  return (
    <>
      <Layout>
        <UserIndexSection>
          <ProfileCard />
          <AskFormCard targetUserId={userId} />
        </UserIndexSection>
      </Layout>
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
      type: LOAD_ANSWER_REQUEST,
    });

    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  },
);

export default UserIndex;
