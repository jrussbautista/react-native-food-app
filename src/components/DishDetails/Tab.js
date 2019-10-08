import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import color from '../../utils/colors';

const Tab = ({active, setActive}) => {
  return (
    <View style={styles.tabContainer}>
      <View style={styles.tabList}>
        <TouchableOpacity onPress={() => setActive('Details')}>
          <Text
            style={[
              styles.tabLink,
              active === 'Details' ? styles.tabLinkActive : '',
            ]}>
            Details
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabList}>
        <TouchableOpacity onPress={() => setActive('Review')}>
          <Text
            style={[
              styles.tabLink,
              active === 'Review' ? styles.tabLinkActive : '',
            ]}>
            Review
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tab;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
  },
  tabList: {
    flex: 1,
  },
  tabLink: {
    fontSize: 16,
    color: '#576574',
    paddingVertical: 10,
    textAlign: 'center',
  },
  tabLinkActive: {
    color: color.primary,
    borderBottomColor: color.primary,
    borderBottomWidth: 1,
    fontWeight: '600',
  },
});
