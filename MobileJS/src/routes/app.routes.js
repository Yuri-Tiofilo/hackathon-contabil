import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './../pages/Home'

const Stack = createNativeStackNavigator();

const AuthRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#0038FF' },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default AuthRoutes;