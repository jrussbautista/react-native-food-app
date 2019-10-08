import React from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import NavigationService from './src/navigations/NavigationService';

const App = () => {
  return (
    <AppNavigation
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  );
};

export default App;
