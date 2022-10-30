import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes= () => {
  // const { user, loading } = useAuth();

  // if (loading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size="large" color="#999" />
  //     </View>
  //   );
  // }

  return <AppRoutes />;
};

export default Routes;