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

const ButtonWrapper = styled.div``;
const Button = styled.input``;

const AskForm = ({ targetUserId }) => {
  const dispatch = useDispatch();
  const [nickname, onChangeNickname] = useInput('');
  const [content, onChangeContent] = useInput('');
  console.log(targetUserId);

  // Functions
  const onSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(addAskRequestAction({ nickname, content }));
    },
    [nickname, content],
  );

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
      {/* <FormWrapper>
        <Input type="file" name="file" hidden ref={imageInput} />
        <button onClick={onClickImageUpload}>이미지 업로드</button>
      </FormWrapper> */}

      <ButtonWrapper>
        <Button type="submit" />
      </ButtonWrapper>

      {/* <div>
        {imagePaths.map((v) => (
          <div key={v.id}>
            <img src={v} alt={v} />
          </div>
        ))}
      </div> */}
    </Form>
  );
};

export default AskForm;
