import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import DishItem from './DishItem';

export default ({dishes}) => {
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={dishes}
        renderItem={({item}) => <DishItem {...item} />}
        keyExtractor={item => `dish-item-${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});
