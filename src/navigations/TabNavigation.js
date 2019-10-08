import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Home, Favorites, Search} from '../screens';
import color from '../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import LogoTitle from '../components/MenuIcons/LogoTitle';

const TabNavigation = createBottomTabNavigator(
  {
    Home,
    Favorites,
    Search,
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const {routeName} = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = `md-home`;
        } else if (routeName === 'Favorites') {
          iconName = `md-heart`;
        } else if (routeName === 'Search') {
          iconName = `ios-search`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: color.primary,
      inactiveTintColor: 'gray',
    },
  },
);

TabNavigation.navigationOptions = ({navigation}) => {
  const {routeName} = navigation.state.routes[navigation.state.index];
  const headerTitle = routeName === 'Home' ? <LogoTitle /> : routeName;
  return {
    headerTitle,
  };
};

export default TabNavigation;
