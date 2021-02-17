import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswerRequestAction } from '../../reducers/answer';
import useInput from '../../hooks/useInput';
import theme from '../../assets/theme';
import XbtnSvg from '../../components/Image/XbtnSvg';

// Style
const ToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: ${theme.paddings.xl} ${theme.paddings.xl} 0 0;
`;
const Form = styled.form`
  width: 100%;
  min-width: ${theme.width.mb_sm};
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

const AskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: ${theme.gap.small};
  padding: ${theme.paddings.mobile};
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
  margin-left: ${theme.margins.xs};
  color: ${theme.colors.dark};
  font-size: ${theme.fontSizes.lg};
  font-weight: bold;
`;

const AskContent = styled.div`
  margin: ${theme.margins.sm};
  color: ${theme.colors.gray};
  font-size: ${theme.fontSizes.medium};
  line-height: 1.4rem;
`;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: ${theme.gap.small};
  padding: ${theme.paddings.mobile};
  color: ${theme.colors.gray};
`;

const Label = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.gray};
  margin-top: ${theme.margins.mobile};
  margin-left: ${theme.margins.xs};
  line-height: 1rem;
`;

const AnswerInput = styled.textarea`
  all: unset;
  width: 100%;
  height: ${theme.form.height_mb_md};
  border-radius: ${theme.form.radius_mb_sm};
  background-color: ${theme.colors.lightblue};

  @media only screen and (min-width: 768px) {
    min-height: ${theme.form.height_mb_md};
  }

  transition: all 0.5s ease-in-out;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.margins.base};
`;

const Button = styled.button`
  all: unset;
  width: ${theme.submitButton.width_mb_md};
  height: ${theme.submitButton.height_mb_md};
  border-radius: ${theme.linkButton.radius};
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
    width: ${theme.submitButton.width_mb_md};
  }

  transition: all 0.5s ease-in-out;
`;

const ButtonName = styled.span`
  font-size: ${theme.fontSizes.small};
  line-height: 1rem;
`;

const AnswerFormCard = ({ nickname, content, date }) => {
  const { addAskDone } = useSelector((state) => state.ask);
  const dispatch = useDispatch();
  //   const id = useSelector((state)=>state.) ??????
  const [answer, onChangeAnswer] = useInput('');
  const [text, setText] = useState('');

  // Functions
  useEffect(() => {
    if (addAskDone) {
      setText('');
    }
  }, [addAskDone]);

  const handdleDelete = () => {};

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(addAnswerRequestAction(answer));
  }, []);

  return (
    <Form onSubmit={onSubmitForm}>
      <ToggleContainer onClick={handdleDelete}>
        <XbtnSvg width="1.25rem" />
      </ToggleContainer>
      <AskWrapper>
        <AskDetail>
          <Label>From.</Label>
          <Nickname>{nickname}</Nickname>
          <Date>{date}</Date>
        </AskDetail>
        <AskContent>{content}</AskContent>
      </AskWrapper>
      <FormWrapper>
        <Label>질문에 대답하세요....</Label>
        <AnswerInput
          name="text"
          value={text}
          onChange={onChangeAnswer}
          required
        />
      </FormWrapper>

      <ButtonWrapper>
        <Button type="submit">
          <ButtonName>Answer</ButtonName>
        </Button>
      </ButtonWrapper>
    </Form>
  );
};

export default AnswerFormCard;
