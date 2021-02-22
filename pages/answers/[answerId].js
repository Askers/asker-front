import React, { useEffect } from 'react';
import Router from 'next/router';
import { END } from 'redux-saga';
import axios from 'axios';
import styled from 'styled-components';
import wrapper from '../../store/configureStore';
import { LOAD_AUTH_REQUEST } from '../../reducers/auth';
import { LOAD_ANSWER_REQUEST } from '../../reducers/answer';

const AsnwerCardContainer = styled.div`
  width: 100%;
  min-width: ${theme.width.mb_sm};
  height: auto;
  border-radius: ${theme.radius.mobile};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};
  margin: ${theme.margins.mobile} 0;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    border-radius: ${theme.radius.pc};
    height: auto;
  }

  transition: all 0.5s ease-in-out;
`;

const AskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 ${theme.gap.small};
  padding: 0 ${theme.paddings.mobile};
  color: ${theme.colors.gray};
`;

const AskDetail = styled.div`
  display: flex;
  flex-direction: column;
`;
const Nickname = styled.span`
  margin-left: ${theme.margins.xs};
  color: ${theme.colors.dark};
  font-size: ${theme.fontSizes.lg};
  font-weight: bold;
`;
const Date = styled.span`
  width: 100%;
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.lightgray};
  margin-top: ${theme.margins.lg};
  margin-left: ${theme.margins.xs};
  line-height: 1rem;
  font-weight: bold;
  text-align: center;
`;

const AskContent = styled.div`
  margin: ${theme.margins.sm};
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.medium};
  line-height: 1.4rem;
`;

const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 ${theme.gap.small};
  padding: 0 ${theme.paddings.mobile};
  color: ${theme.colors.gray};
`;

const AnswerDetail = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.lightblue};
  border-radius: ${theme.radius.mobile};
`;

const AnswerContent = styled.div`
  margin: ${theme.margins.sm};
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.medium};
  line-height: 1.4rem;
`;

const Label = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
  margin-top: ${theme.margins.mobile};
  margin-left: ${theme.margins.xs};
  line-height: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.margins.xl};
`;

const AnswerDetail = () => {
  return (
    <AsnwerCardContainer>
      <ToggleContainer onClick={handdleDelete}>
        <XbtnSvg width="1.25rem" />
      </ToggleContainer>

      <AskWrapper onClick={goToAnswerDetail}>
        <AskDetail>
          <Label>FROM. {nickname}</Label>
        </AskDetail>
        <AskContent>{askContent}</AskContent>
      </AskWrapper>

      <AnswerWrapper>
        <AnswerDetail>
          <AnswerContent>{answerContent}</AnswerContent>
        </AnswerDetail>
        <Date>{dayjs(date).format('YYYY.MM.DD')}</Date>
      </AnswerWrapper>

      <ButtonWrapper>
        <TwitterSvg width="1.25rem" fill={theme.colors.blue} />
      </ButtonWrapper>
    </AsnwerCardContainer>
  );
};

/*
  SSR Dispatch
  LOAD_AUTH_REQUEST
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

export default AnswerDetail;
