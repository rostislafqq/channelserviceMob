import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

export const HeaderExit = ({ onSubmit }) => {
  return (
    <View>
      <ExitImg source={require('../../assets/Exit.png')} />
      <ButtonExit
        title="sssasd"
        onPress={() => {
          onSubmit();
        }}>
        sdfsd
      </ButtonExit>
    </View>
  );
};

const ExitImg = styled.Image`
  margin-right: 15px;
`;
const ButtonExit = styled.Text`
  opacity: 1;
  width: 55px;
  height: 55px;
  position: absolute;
  right: 14;
  top: 15;
  opacity: 0;
`;
