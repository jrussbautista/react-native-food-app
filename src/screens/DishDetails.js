import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import {dishes} from '../datas';
import Icon from 'react-native-vector-icons/Ionicons';
import color from '../utils/colors';
import Tab from '../components/DishDetails/Tab';
import Ingredients from '../components/DishDetails/Ingredients';
import Reviews from '../components/DishDetails/Reviews';
import {toggleFavorites} from '../store/actions/favorites';

const DishDetails = ({navigation}) => {
  const [openTab, setOpenTab] = useState('Details');
  const dishId = navigation.getParam('id');
  let dish = dishes.filter(dish => dish.id === dishId);
  dish = dish[0];
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites.datas);
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{paddingBottom: 60}}>
          <Image source={{uri: dish.imageURL}} style={styles.image} />
          <View style={styles.info}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{flex: 1}}>
                <Text style={styles.title}>{dish.title}</Text>
              </View>
              <View style={{width: 80}}>
                <Text style={styles.price}>P{dish.price}</Text>
              </View>
            </View>
            <View style={{marginTop: 10}}>
              <Text style={styles.desc}>{dish.description}</Text>
            </View>
            <View style={{marginTop: 10}}>
              <Tab active={openTab} setActive={setOpenTab} />
              {openTab === 'Details' ? (
                <Ingredients ingredients={dish.ingredients} />
              ) : (
                <Reviews />
              )}
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomAction}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <TouchableOpacity
            style={[styles.btn, {backgroundColor: '#E65100', flex: 11}]}>
            <Text style={styles.btnText}> Get It </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => dispatch(toggleFavorites(dish.id))}>
            <Text style={styles.btnText}>
              {favorites.find(fave => fave === dish.id) ? (
                <Icon name="ios-heart" size={26} color="#E65100" />
              ) : (
                <Icon name="ios-heart-empty" size={26} color="#E65100" />
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

DishDetails.navigationOptions = ({navigation}) => ({
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
});

export default DishDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: -56,
    flex: 1,
  },
  image: {
    flex: 1,
    height: 250,
    width: '100%',
  },
  info: {
    padding: 15,
  },
  title: {
    fontSize: 20,
  },
  desc: {
    color: '#616161',
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    fontSize: 22,
    fontWeight: '700',
    color: color.primary,
  },
  bottomAction: {
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flex: 1,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  btn: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 6,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
});
