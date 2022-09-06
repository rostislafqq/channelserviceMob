import React from 'react';
import { CardItem } from './card';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
export const CardsContainer = () => {
  //достаем из стейта информацию и создаем итоговый массив
  const posts = useSelector((state) => state.cards.posts);
  const usersInfo = useSelector((state) => state.cards.usersInfo);

  const cardUserPost = [];
  //преобразуем в итоговый формат (cardUserPost)
  if (posts.length > 1 && usersInfo.length > 1) {
    const cards = [...usersInfo, ...posts];

    for (let i = 0; i < 10; i++) {
      if (cards[i].id === cards[i + 10].id) {
        cardUserPost.push({ ...cards[i], ...cards[i + 10] });
      } else {
        return false;
      }
    }
  }

  return (
    <ScrollView>
      {cardUserPost.map((val) => (
        <CardItem key={val.id} name={val.name} company={val.company} title={val.title} />
      ))}
    </ScrollView>
  );
};
