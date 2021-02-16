import Link from 'next/link';
import styled from 'styled-components';

/*
    기본 버튼
    props
    - type

 */

const Container = styled.button`
  all: unset;
  width: ${(props) => props.size}


  /* Accent/Blue */

  background: #0346f2;
  border-radius: 12px;
`;
const inputBtn = ({ name, dest, size }) => (
  <Link href={`/${dest}`}>
    <Container>{name}</Container>
  </Link>
);

export default inputBtn;
