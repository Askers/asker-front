import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
// import { useDispatch } from "react-redux";
// import { sendAsk } from "../reducers/ask";

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

const AskForm = () => {
  // const { imagePaths } = useSelector((state) => state.ask);
  // const dispatch = useDispatch();
  const [text, setText] = useState('');
  const imageInput = useRef();

  // Functions
  const onChange = useCallback(
    (e) => {
      setText(e.target.value);
    },
    [text],
  );

  const onSubmit = useCallback((e) => {
    e.preventDefault();
    // dispatch(sendAsk);
  }, []);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form onSubmit={onSubmit}>
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

export default AskForm;
