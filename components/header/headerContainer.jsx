import React from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { HeaderExit } from './headerExit';
import { HeaderLogo } from './headerLogo';
import { removeUserAuth } from '../../store/slices/authSlice';

export const HeaderContainer = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  const navigation = useNavigation();
  const onSubmit = () => {
    dispatch(removeUserAuth());
    navigation.navigate('Авторизация');
  };
  return !isAuth ? (
    <Header>
      <HeaderLogo />
    </Header>
  ) : (
    <Header>
      <HeaderLogo />
      <HeaderExit onSubmit={onSubmit} />
    </Header>
  );
};

const Header = styled.View`
  height: 118px;
  background-color: #e4b062;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  lign-items: center;
`;
