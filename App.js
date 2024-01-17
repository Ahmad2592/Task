import React from 'react';
import { SplashScreen } from './src/Screens/Auth/Splash';
import RootNavigator from './src/Navigators/RootNavigator/RootNavigator';
import { NavigationContainer } from '@react-navigation/native';
import FlashMessage from 'react-native-flash-message';


function App(){


  return (
  //  <SplashScreen/>
  <NavigationContainer>
<RootNavigator/>
<FlashMessage position="top" />
  </NavigationContainer>
  );
}

export default App;
