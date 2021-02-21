import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import theme from '../../assets/theme';
import TwitterSvg from '../Image/TwitterSvg';
import XbtnSvg from '../Image/XbtnSvg';

/*
    Style
 */
const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${theme.paddings.xl} ${theme.paddings.xl} 0 0;
`;

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
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
  margin-top: ${theme.margins.sm};
  margin-left: ${theme.margins.xs};
  line-height: 1rem;
  font-weight: bold;
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

const Button = styled.button`
  all: unset;
  width: ${theme.submitButton.width_sm};
  height: ${theme.submitButton.height_mb_md};
  border-radius: ${theme.submitButton.radius_mb_md};
  background-color: ${(props) =>
    props.type === 'submit'
      ? `${theme.colors.blue}`
      : `${theme.colors.lightblue}`};
  color: ${(props) =>
    props.type === 'submit' ? `${theme.colors.white}` : `${theme.colors.gray}`};
  text-align: center;

  :hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.type === 'submit'
        ? `${theme.colors.lightblue}`
        : `${theme.colors.blue}`};
    color: ${(props) =>
      props.type === 'submit'
        ? `${theme.colors.lightblue}`
        : `${theme.colors.white}`};
  }

  @media only screen and (min-width: 768px) {
  }

  transition: all 0.5s ease-in-out;
`;

// DayJs Parse
dayjs.locale('ko');

const AnswerCard = ({
  answerId,
  nickname,
  askContent,
  answerContent,
  date,
}) => {
  const handleDelete = () => {};
  return (
    <AsnwerCardContainer>
      <ToggleContainer onClick={handleDelete}>
        <XbtnSvg width="1.25rem" />
      </ToggleContainer>

      <AskWrapper>
        <AskDetail>
          <Label>To.</Label>
          <Nickname>{nickname}</Nickname>
        </AskDetail>
        <AskContent>{askContent}</AskContent>
      </AskWrapper>

      <AnswerWrapper>
        <AnswerDetail>
          <AnswerContent>{answerContent}</AnswerContent>
        </AnswerDetail>
      </AnswerWrapper>

      <ButtonWrapper>
        <TwitterSvg width="1.25rem" fill={theme.colors.blue} />
      </ButtonWrapper>
    </AsnwerCardContainer>
  );
};

AnswerCard.propTypes = {
  ask: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    answer: PropTypes.string,
    nickname: PropTypes.string,
    content: PropTypes.string.isRequired,
  }).isRequired,
};
export default AnswerCard;
