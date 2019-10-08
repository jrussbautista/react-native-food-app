import React from 'react';
import {View, Text} from 'react-native';
import FavoriteList from '../components/Favorites/FavoriteList';

const Favorites = () => {
  return (
    <View>
      <FavoriteList favorites={[]} />
    </View>
  );
};

export default Favorites;
