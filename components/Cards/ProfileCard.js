import React from 'react';
import styled from 'styled-components';

import theme from '../../assets/theme';
import LogoSvg from '../Image/LogoSvg';

// Style
const ProfileCardContainer = styled.div`
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

const ProfileWrapper = styled.div`
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
const UserBio = styled.div`
  font-weight: bold;
  font-size: ${theme.fontSizes.small};
  margin: ${theme.margins.base};
`;

const Input = styled.input`
  all: unset;
  width: ${theme.inputButton.width_lg};
  height: ${theme.inputButton.height};
  border-radius: ${theme.inputButton.radius};
  background-color: ${theme.colors.lightblue};
  padding-left: 1rem;

  @media only screen and (min-width: 768px) {
    width: ${theme.inputButton.width_xl};
  }

  transition: all 0.5s ease-in-out;
`;

const ProfileCard = () => {
  return (
    <ProfileCardContainer>
      <LogoWrapper>
        <LogoSvg width="4rem" fill={theme.colors.special} />
      </LogoWrapper>
      <ProfileWrapper>
        <UserName>@유저네임</UserName>
        <UserBio>모든 것은 너의 스탠스로부터 시작된다.</UserBio>
      </ProfileWrapper>
    </ProfileCardContainer>
  );
};

export default ProfileCard;
