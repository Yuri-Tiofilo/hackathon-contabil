// import { StatusBar } from 'expo-status-bar';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components/native';
import { Provider as PaperProvider } from 'react-native-paper';

import Routes from './src/routes';
import theme from './src/theme'

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>
        <PaperProvider>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          showHideTransition='fade'
          hidden={false} />
          <Routes />
        </PaperProvider>
      </ThemeProvider>
    </NavigationContainer>
  );
}
