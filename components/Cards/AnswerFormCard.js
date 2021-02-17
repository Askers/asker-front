import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswerRequestAction } from '../../reducers/answer';
import useInput from '../../hooks/useInput';
import theme from '../../assets/theme';

// Style

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

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: ${theme.gap.small};
  padding: ${theme.paddings.mobile};
  color: ${theme.colors.gray};
`;

const Label = styled.span``;

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
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.margins.base};
`;

const Button = styled.input`
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

const AnswerFormCard = ({ nickname, content }) => {
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

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(addAnswerRequestAction(answer));
  }, []);

  return (
    <Form onSubmit={onSubmitForm}>
      <FormWrapper>
        <Label>Ask what you want!</Label>
        <AnswerInput
          name="text"
          value={text}
          onChange={onChangeAnswer}
          required
        />
      </FormWrapper>

      <ButtonWrapper>
        <Button type="submit" value="SEND" />
      </ButtonWrapper>
    </Form>
  );
};

export default AnswerFormCard;
