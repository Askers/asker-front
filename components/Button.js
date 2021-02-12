import Link from 'next/link';
import styled from 'styled-components';

const BtnContainer = styled.button`
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
const Button = ({ name, dest }) => (
  <Link href={`/${dest}`}>
    <BtnContainer>{name}</BtnContainer>
  </Link>
);

export default Button;
