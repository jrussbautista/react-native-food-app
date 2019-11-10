import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <View style={styles.imageWrapper}></View>
        <Text style={styles.name}> John Doe </Text>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  account: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageWrapper: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    overflow: 'hidden',
  },
  name: {
    fontSize: 20,
    marginTop: 10,
  },
});
