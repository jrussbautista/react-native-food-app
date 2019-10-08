import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../images/logo.png')} style={styles.image} />
      <Text style={styles.title}>Foody</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
});
