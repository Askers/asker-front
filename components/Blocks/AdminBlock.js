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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media only screen and (min-width: 768px) {
    width: 100%;
    height: ${theme.height.pc_sm};
    border-radius: ${theme.radius.pc};
  }

  transition: all 0.5s ease-in-out;
`;

const LogoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AdminWrapper = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: ${theme.gap.small};
    color: ${theme.colors.special};
  }

  transition: all 0.5s ease-in-out;
`;

const SocialSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: ${theme.colors.special};
`;

const UserName = styled.span`
  font-size: ${theme.fontSizes.small};
  color: ${theme.colors.special};
  font-weight: bold;
`;

const AdminBlock = () => {
  return (
    <AdminBlockContainer>
      <LogoWrapper>
        <LogoSvg width="4rem" fill={theme.colors.special} />
        <UserName>@username</UserName>
      </LogoWrapper>
      <AdminWrapper>
        <UserName>@username</UserName>
        <SocialSection></SocialSection>
      </AdminWrapper>
    </AdminBlockContainer>
  );
};

export default AdminBlock;
