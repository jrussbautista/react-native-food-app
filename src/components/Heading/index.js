import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import color from '../../utils/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigationService from '../../navigations/NavigationService';

export default ({title, view, screen}) => {
  return (
    <View style={styles.heading}>
      <Text style={styles.headingText}>{title}</Text>
      {view && (
        <TouchableOpacity onPress={() => NavigationService.navigate(screen)}>
          <View style={styles.viewWrapper}>
            <Text style={styles.view}> View All</Text>
            <Icon name="chevron-right" size={22} color={color.primary} />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  headingText: {
    fontSize: 20,
    fontWeight: '500',
  },
  viewWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  view: {
    fontSize: 15,
    color: color.primary,
  },
});
