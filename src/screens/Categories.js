import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {categories} from '../datas';
import NavigationService from '../navigations/NavigationService';

const AllCategories = ({imageUrl, name, id}) => {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate('CategoryDetails', {id})}>
      <View style={styles.backgroundWrapper}>
        <ImageBackground source={{uri: imageUrl}} style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.title}>{name}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const Categories = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={({item}) => <AllCategories {...item} />}
        keyExtractor={item => `category-item-${item.id}`}
      />
    </View>
  );
};

Categories.navigationOptions = () => {
  return {
    title: 'All Categories',
  };
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 150,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundWrapper: {
    borderRadius: 15,
    overflow: 'hidden',
    marginTop: 15,
    marginHorizontal: 15,
  },
  title: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '500',
  },
});
