import React from 'react';
import styled from 'styled-components';

import theme from '../../assets/theme';
import LogoSvg from '../Image/LogoSvg';

// Style
const AdminBlockContainer = styled.div`
  width: 100%;
  height: ${theme.height.mb_xs};
  border-radius: ${theme.radius.mobile};
  background-color: ${theme.colors.bgColor};
  margin: ${theme.margins.mobile} 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: ${theme.width.pc_lg};
    height: ${theme.height.pc_sm};
    border-radius: ${theme.radius.pc};
  }

  transition: all 0.5s ease-in-out;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: ${theme.gap.small};
  color: ${theme.colors.special};
`;

const UserName = styled.div`
  font-size: ${theme.fontSizes.small};
  font-weight: bold;
`;

const AdminBlock = () => {
  return (
    <AdminBlockContainer>
      <LogoWrapper>
        <LogoSvg width="4rem" fill={theme.colors.special} />
      </LogoWrapper>
      <AdminWrapper>
        <UserName>`@username`</UserName>
      </AdminWrapper>
    </AdminBlockContainer>
  );
};

export default AdminBlock;
