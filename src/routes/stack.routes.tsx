// Packages
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Pages
import SignIn from '~/pages/SignIn';
import Users from '~/pages/Users';

// Models
import { StackParamList } from '~/models/stack-routes.model';

const Stack = createNativeStackNavigator<StackParamList>();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
}

export { MyStack };
