import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default () => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.empty}>
        <Text style={styles.emptyText}> No review yet...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reviewContainer: {
    paddingVertical: 10,
  },
  empty: {
    paddingVertical: 30,
  },
  emptyText: {
    textAlign: 'center',
    fontSize: 18,
  },
});
