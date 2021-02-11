import styled from 'styled-components';

const Container = styled.button`
  all: unset;
  padding: 14px 24px;

  width: 195px;
  height: 48px;
  left: 619px;
  top: 355px;

  /* Accent/Blue */

  background: #0346f2;
  border-radius: 12px;
`;
const Button = ({ name }) => {
  return <Container type="submit">{name}</Container>;
};

export default Button;
