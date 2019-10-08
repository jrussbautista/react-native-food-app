import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {categories, dishes} from '../datas';
import Heading from '../components/Heading';
import DishList from '../components/Dish/DishList';
import CategoryList from '../components/Category/CategoryList';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Heading title="Categories" view screen="Categories" />
        <CategoryList categories={categories} />
        <Heading title="Discover" />
        <DishList dishes={dishes} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
});
