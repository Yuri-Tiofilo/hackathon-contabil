import React from 'react';
import { View, ActivityIndicator, ViewBase } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

import TabBar from '../components/TabBar'

const Routes= () => {
  // const { user, loading } = useAuth();

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#999" />
  //     </View>
  //   );
  // }

  // return (
  //   <View>
  //     <AppRoutes />
  //     <TabBar />
  //   </View>
  // );

  return (<TabBar />);
};

export default Routes;