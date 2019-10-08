import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {DishDetails, Categories, CategoryDetails} from '../screens';
import TabNavigation from './TabNavigation';

const MainNavigator = createStackNavigator({
  TabNavigation,
  DishDetails,
  Categories,
  CategoryDetails,
});

const AppNavigation = createAppContainer(MainNavigator);

export default AppNavigation;
