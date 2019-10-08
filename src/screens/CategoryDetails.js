import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {categories, dishes} from '../datas';
import DishList from '../components/Dish/DishList';

const CategoryDetails = ({navigation}) => {
  const categId = navigation.getParam('id');
  let categ = categories.filter(categ => categ.id === categId);
  categ = categ[0];

  const allDishes = dishes.filter(
    dish => dish.category === categ.name.toLowerCase(),
  );
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageWrapper}>
          <ImageBackground source={{uri: categ.imageUrl}} style={styles.image}>
            <View style={styles.overlay}>
              <Text style={styles.name}>{categ.name}</Text>
            </View>
          </ImageBackground>
        </View>
        <View>
          <DishList dishes={allDishes} />
        </View>
      </ScrollView>
    </View>
  );
};

CategoryDetails.navigationOptions = ({navigation}) => ({
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default CategoryDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: -56,
  },
  image: {
    width: '100%',
    height: 200,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  name: {
    color: '#fff',
    fontSize: 25,
    fontWeight: '500',
  },
});
