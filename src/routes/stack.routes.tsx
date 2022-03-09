// Packages
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import SignIn from '~/pages/SignIn';
import Users from '~/pages/Users';

// Models
import { StackParamList } from '~/models/stack-routes.model';

// Stores
import { useTypedSelector } from '~/config/store/create-store';

const Stack = createNativeStackNavigator<StackParamList>();

function MyStack() {
  const { token } = useTypedSelector(state => state.authSlice);

  return (
    <Stack.Navigator>
      {!token ? <Stack.Screen name="SignIn" component={SignIn} /> : <Stack.Screen name="Users" component={Users} />}
    </Stack.Navigator>
  );
}

export { MyStack };
