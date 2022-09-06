import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HeaderContainer } from '../header/headerContainer';
import { NavigationContainer } from '@react-navigation/native';
import { AutorizationContainer } from '../autorization/autorizationContainer';
import { CardsContainer } from '../cards/cardsContainer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserInfoState } from '../../store/slices/cardsSlice';
import { setPostState } from '../../store/slices/cardsSlice';
import { StatusBar } from 'expo-status-bar';
const Stack = createNativeStackNavigator();
export const Navigation = () => {
  //эти переменные идут в редакс , затем в компаненты
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  const dispatch = useDispatch();
  //гет запросы
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      //изменяем массив, чтоб мусора не было
      setUsers(
        res.data.map((val) => ({
          id: val.id,
          name: val.name,
          company: val.company.name,
        })),
      );
    };

    const getPosts = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      let data = await res.data;

      setPosts(
        data.map((val) => ({
          id: val.userId,
          title: val.title,
        })),
      );
    };

    getPosts();
    getUsers();
  }, []);

  //диспатчим данные в стейт
  if (posts.length > 0 && users.length > 0) {
    dispatch(setPostState(posts));
    dispatch(getUserInfoState(users));
  }

  return (
    <NavigationContainer>
      <StatusBar style="auto"></StatusBar>
      <HeaderContainer />

      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Авторизация"
          component={AutorizationContainer}
        />
        <Stack.Screen options={{ headerShown: false }} name="Карты" component={CardsContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
