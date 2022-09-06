import React from 'react';
import { View, Image } from 'react-native';
import styled from 'styled-components/native';
export const HeaderLogo = () => {
  return <Logo source={require('../../assets/logoMob.png')} />;
};

const Logo = styled.Image`
  margin-left: 27px;
`;
