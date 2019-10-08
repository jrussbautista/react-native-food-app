import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../utils/colors';

const Search = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <View style={styles.searchIcon}>
          <Icon name="ios-search" size={24} color={color.primary} />
        </View>
        <TextInput placeholder="Find a food" style={styles.searchInput} />
      </View>
      <View style={styles.searchHistory}>
        <Text style={{fontSize: 16}}> Search history: </Text>
        <View style={{marginTop: 15}}>
          <View style={styles.searchList}>
            <Text style={styles.searchListText}> Menudo </Text>
          </View>
          <View style={styles.searchList}>
            <Text style={styles.searchListText}> Afritada </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchContainer: {
    padding: 15,
  },
  searchIcon: {
    paddingRight: 5,
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#d5d5d5',
    borderWidth: 1,
    paddingHorizontal: 15,
    borderRadius: 6,
  },
  searchInput: {
    fontSize: 16,
  },
  searchHistory: {
    paddingTop: 10,
  },
  searchList: {
    paddingVertical: 10,
    borderColor: '#eee',
    borderBottomWidth: 1,
  },
  searchListText: {
    fontSize: 16,
    color: '#757575',
  },
});
