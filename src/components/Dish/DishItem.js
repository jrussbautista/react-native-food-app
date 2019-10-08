import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import NavigationService from '../../navigations/NavigationService';

export default ({imageURL, title, id}) => {
  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate('DishDetails', {id, title})}>
      <View style={styles.card}>
        <Image source={{uri: imageURL}} style={styles.image} />
        <Text style={styles.title} numberOfLines={2}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginLeft: 15,
    width: Dimensions.get('window').width / 2 - 22,
    marginBottom: 15,
  },
  image: {
    width: Dimensions.get('window').width / 2 - 22,
    height: Dimensions.get('window').width / 2 - 22,
    borderRadius: 6,
  },
  title: {
    fontSize: 15,
    marginTop: 10,
  },
});
