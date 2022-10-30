import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './../pages/Login'
import Cadastro from './../pages/Cadastro'

const Auth = createNativeStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#0038FF' },
    }}
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Cadastro" component={Cadastro} />
  </Auth.Navigator>
);

export default AuthRoutes;