import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DishDetails, Categories, CategoryDetails, Login} from '../screens';
import TabNavigation from './TabNavigation';

const MainNavigator = createStackNavigator({
  TabNavigation,
  DishDetails,
  Categories,
  CategoryDetails,
});

const AuthStack = createStackNavigator({
  Login,
});

const SwitchNavigator = createSwitchNavigator({
  AuthStack,
  MainNavigator,
});

const AppNavigation = createAppContainer(SwitchNavigator);

export default AppNavigation;
