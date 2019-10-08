import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {View, Text} from 'react-native';
import FavoriteList from '../components/Favorites/FavoriteList';
import {dishes} from '../datas';

const Favorites = () => {
  const allFavorites = useSelector(state => state.favorites.datas);
  let favorites = [];
  allFavorites.forEach(fave => {
    dishes.filter(dish => {
      if (dish.id === fave) {
        favorites.push(dish);
      }
    });
  });

  return (
    <View>
      <FavoriteList favorites={favorites} />
    </View>
  );
};

export default Favorites;
