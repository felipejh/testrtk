// Packages
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';

// Config
import Routes from '~/routes';

// Stores
import { store } from '~/config/store/create-store';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Routes />
      </Provider>
    </NavigationContainer>
  );
}

export default App;
