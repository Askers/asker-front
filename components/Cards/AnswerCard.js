import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../assets/theme';

const Container = styled.div`
  width: 100%;
  min-height: ${theme.height.mb_sm};
  border-radius: ${theme.radius.mobile};
  background-color: ${theme.colors.white};
  box-shadow: ${theme.colors.shadow};
  margin: ${theme.margins.mobile} 0;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    border-radius: ${theme.radius.pc};
    min-height: ${theme.height.pc_sm};
  }

  transition: all 0.5s ease-in-out;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  height: 20%;
`;
const Label = styled.span`
  font-size: 0.7rem;
`;
const Nickname = styled.div`
  font-size: 1rem;
  font-weight: bold;
`;

const Content = styled.div`
  font-size: 1rem;
`;

const AnswerCard = ({ nickname, content }) => (
  <Container>
    <Header>
      <Label>Asker Nickname</Label>
      <Nickname>{nickname}</Nickname>
    </Header>
    <Content>{content}</Content>
  </Container>
);

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
