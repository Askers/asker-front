import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div``;
const TextContainer = styled.div``;
const AnswerContainer = styled.div``;

const AskCard = () => (
  <CardContainer>
    <TextContainer>
      <span>님 배고프신강</span>
    </TextContainer>
    <AnswerContainer>
      <span>배고파요 안배고파요</span>
    </AnswerContainer>
  </CardContainer>
);

AskCard.propTypes = {
  ask: PropTypes.shape({
    id: PropTypes.number,
    target_user: PropTypes.array,
    content: PropTypes.string,
    createdAt: PropTypes.array,
    answer: PropTypes.string,
  }).isRequired,
};
export default AskCard;
