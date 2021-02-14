import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { addAskRequestAction } from '../reducers/ask';
import useInput from '../hooks/useInput';

// Style
const Form = styled.form``;
const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Label = styled.span``;
const Input = styled.input``;

const InputWrapper = styled.div``;

const AskForm = ({ targetUserId }) => {
  const dispatch = useDispatch();
  const [nickname, onChangeNickname] = useInput('');
  const [content, onChangeContent] = useInput('');

  // Functions
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addAskRequestAction({ nickname, content, targetUserId }));
    },
    [nickname, content],
  );

  const handlePopUp = () => {
    alert('ask를 성공ㄱ적으로 보냈습니다.');
    window.location.reload();
  };

  return (
    <Form onSubmit={onSubmitForm}>
      <FormWrapper>
        <Label>Your Nickname</Label>
        <Input
          type="text"
          name="text"
          value={nickname}
          onChange={onChangeNickname}
          required
        />
        <Label>Ask what you want!</Label>
        <Input
          type="text"
          name="text"
          value={content}
          onChange={onChangeContent}
          required
        />
      </FormWrapper>

      <InputWrapper>
        <Input type="submit" onClick={handlePopUp} value="제출" />
      </InputWrapper>
    </Form>
  );
};

export default AskForm;
