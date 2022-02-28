// Packages
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// Config
import Routes from '~/routes';

// Stores
import { store, persistor } from '~/config/store/create-store';

if (__DEV__) {
  import('~/config/ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <Routes />
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
