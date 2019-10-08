import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import NavigationService from '../../navigations/NavigationService';

export default ({imageUrl, name, id}) => {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate('CategoryDetails', {id, name})}>
      <View style={styles.card}>
        <Image source={{uri: imageUrl}} style={styles.image} />
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 125,
    height: 125,
    marginLeft: 15,
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    paddingTop: 10,
  },
});
