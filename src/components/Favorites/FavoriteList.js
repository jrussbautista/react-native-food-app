import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import color from '../../utils/colors';

const FavoriteList = ({favorites}) => {
  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <View></View>
      ) : (
        <View style={styles.empty}>
          <Image
            source={require('../../images/empty_cat.png')}
            style={styles.emptyImg}
          />
          <Text style={styles.emptyText}> Your favorites is empty </Text>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Go Add Now </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default FavoriteList;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  empty: {
    paddingVertical: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyImg: {
    width: 200,
    height: 200,
  },
  emptyText: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
    backgroundColor: color.primary,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 4,
  },
  btnText: {
    fontSize: 16,
    color: '#fff',
  },
});
