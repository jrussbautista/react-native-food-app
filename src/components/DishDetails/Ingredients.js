import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default ({ingredients}) => {
  return (
    <View>
      {ingredients.length > 0 &&
        ingredients.map((ing, i) => (
          <View key={i} style={styles.ingredient}>
            <Text style={styles.ingredientText}>{ing}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  ingredient: {
    paddingVertical: 10,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  ingredientText: {
    fontSize: 15,
  },
});
