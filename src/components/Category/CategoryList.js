import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import CategoryItem from './CategoryItem';

export default ({categories}) => {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={categories}
        renderItem={({item}) => <CategoryItem {...item} />}
        keyExtractor={item => `category-item-${item.id}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
