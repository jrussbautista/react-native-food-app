import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from 'react-native';
import color from '../../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import NavigationService from '../../navigations/NavigationService';
import {useDispatch} from 'react-redux';
import {toggleFavorites} from '../../store/actions/favorites';

const FaveItem = ({imageURL, title, id}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.faveList}>
      <TouchableOpacity
        onPress={() => NavigationService.navigate('DishDetails', {id})}>
        <View style={styles.faveInfo}>
          <Image source={{uri: imageURL}} style={styles.faveImage} />
          <Text numberOfLines={2} style={styles.faveName}>
            {title}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => dispatch(toggleFavorites(id))}>
          <Icon name="ios-trash" size={28} color={color.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const FavoriteList = ({favorites}) => {
  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({item}) => <FaveItem {...item} />}
          keyExtractor={item => `fave-item-${item.id}`}
        />
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
    backgroundColor: '#f5f5f5',
    height: Dimensions.get('window').height,
  },
  faveList: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    padding: 10,
    overflow: 'hidden',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.54,
    elevation: 4,
  },
  faveInfo: {
    flexDirection: 'row',
  },
  faveName: {
    fontSize: 15,
    width: 160,
  },
  faveImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
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
