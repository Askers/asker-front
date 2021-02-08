import React, { useState, useCallback, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { addAnswerRequestAction } from '../reducers/ask';

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

const AnswerForm = () => {
  const { addAskDone } = useSelector((state) => state.ask);
  const dispatch = useDispatch();
  //   const id = useSelector((state)=>state.) ??????
  const [text, setText] = useState('');
  const imageInput = useRef();

  // Functions
  useEffect(() => {
    if (addAskDone) {
      setText('');
    }
  }, [addAskDone]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    dispatch(addAnswerRequestAction(text));
  }, []);

  return (
    <Form onSubmit={onSubmitForm}>
      <FormWrapper>
        <Label>Ask what you want!</Label>
        <Input
          type="text"
          name="text"
          value={text}
          onChange={onChange}
          required
        />
      </FormWrapper>
      <FormWrapper>
        <Input type="file" name="file" hidden ref={imageInput} />
        <button onClick={onClickImageUpload}>이미지 업로드</button>
      </FormWrapper>

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

export default AnswerForm;
