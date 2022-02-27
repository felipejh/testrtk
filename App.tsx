// Packages
import React from 'react';
import { StatusBar, useColorScheme } from 'react-native';

// Pages
import SignIn from '~/pages/SignIn';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SignIn />
    </>
  );
}

export default App;
