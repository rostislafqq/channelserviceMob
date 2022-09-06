import React, { useState } from 'react';
import { AutorizationPage } from './autorization';
import { useDispatch, useSelector } from 'react-redux';
import { setIsAuth, removeUserAuth } from '../../store/slices/authSlice';
export const AutorizationContainer = ({ navigation }) => {
  //иммитация логирования
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isRealLogin, setIsRealLogin] = useState(true);
  const [isRealPas, setIsRealPas] = useState(true);
  const needLogin = 'Username';
  const needPas = 'qwerty';
  const isAuth = useSelector((state) => state.auth.isAuth);
  const onSubmit = () => {
    if (login === needLogin && password === needPas) {
      navigation.navigate('Карты');
      dispatch(setIsAuth());
      setPassword('');
      setLogin('');
      setIsRealPas(true);
      setIsRealLogin(true);
    } else if (password !== needPas) {
      setPassword('');
      setIsRealPas(false);
      dispatch(removeUserAuth());
    }
    if (login !== needLogin) {
      setLogin('');
      setIsRealLogin(false);
      dispatch(removeUserAuth());
    }
  };
  return (
    <AutorizationPage
      onSubmit={onSubmit}
      setLogin={setLogin}
      setPassword={setPassword}
      login={login}
      password={password}
      navigation={navigation}
      isRealLogin={isRealLogin}
      isRealPas={isRealPas}
      isAuth={isAuth}
    />
  );
};
