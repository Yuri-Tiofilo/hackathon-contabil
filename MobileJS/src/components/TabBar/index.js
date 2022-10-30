import React from 'react';
import { View, Image } from 'react-native';

import { Container } from './styles';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import Home from '../../pages/Home';
import FluxoDeCaixa from '../../pages/FluxoDeCaixa';
import Relatorio from '../../pages/Relatorio';
import Notification from '../../pages/Notification';

import IconEntypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import IconFluxo from '../../assets/fluxoCaixaIcon.png'

const TabBar = () => {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				activeTintColor: `${({ theme }) => theme.COLORS.PRIMARY}`,
				inactiveTintColor: `${({ theme }) => theme.COLORS.GRAY1}`,
				tabBarIcon: ({ color, size }) => {
					switch (route.name) {
						case 'Home':
							return (<IconEntypo name="home" size={24} color="#000" />);
						case 'FluxoDeCaixa':
							return (<Image style={{width: 24, height: 24}} source={IconFluxo}/>);
						case 'Relatorio':
							return <IconEntypo name="bar-graph" size={24} color="#000" />;
						case 'Notifications':
							return <MaterialIcons name="notifications-none" size={24} color="#000" />;
						default:
							break;
					}		
				},
			})}
		>
			<Tab.Screen 
				name="Home" 
				component={Home} 
				options={{headerShown: false}}
			/>
			<Tab.Screen name="FluxoDeCaixa" component={FluxoDeCaixa} options={{headerShown: false}}/>
			<Tab.Screen name="Relatorio" component={Relatorio} />
			<Tab.Screen name="Notifications" component={Notification} />
		</Tab.Navigator>
  );
}

export default TabBar;