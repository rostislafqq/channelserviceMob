import React from 'react';

import { StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
export const AutorizationPage = ({
  onSubmit,
  password,
  login,
  setLogin,
  setPassword,
  isRealPas,
  isRealLogin,
}) => {
  return (
    <Home>
      <Autorization>Autorization</Autorization>
      <View>
        <Labels>login</Labels>
        <Input
          style={!isRealLogin ? styles.bad : ''}
          value={login}
          onChangeText={(e) => {
            setLogin(e);
          }}
        />
        <Block></Block>
        <Labels>password</Labels>
        <Input
          style={!isRealPas ? styles.bad : ''}
          secureTextEntry={true}
          value={password}
          onChangeText={(e) => {
            setPassword(e);
          }}
        />
      </View>
      <Block></Block>
      <AuthButton
        onPress={() => {
          onSubmit();
        }}>
        {' '}
        Submit
      </AuthButton>
    </Home>
  );
};

const Home = styled.View`
  display: flex;
  padding: 8px 43px 32px 34px;
  border: 5px solid #27569c;
  box-sizing: border-box;
  flex-direction: column;
  width: 95%;
  align-items: center;

  margin: 0 auto;
  margin-top: 10px;
`;
const Autorization = styled.Text`
  font-size: 24px;
  color: #27569c;
  font-weight: 800;
`;

const Input = styled.TextInput`
  box-sizing: border-box;
  width: 212px;
  height: 33px;
  background: #d9d9d9;
  border: 4px solid #27569c;
  margin-top: 6px;
  border-radius: 10px;
  padding-left: 10px;
`;

const Labels = styled.Text`
  font-size: 24px;
  font-weight: 800;
`;

const Block = styled.View`
  height: 20px;
  width: 50%;
`;

const AuthButton = styled.Text`
  font-size: 24px;
  font-weight: 800;
  padding: 10px 65px;
  background-color: #e4b062;
  border-radius: 10px;
`;

const styles = StyleSheet.create({
  bad: {
    borderColor: 'red',
  },
});
