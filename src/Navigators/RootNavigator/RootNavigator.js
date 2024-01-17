
import { createStackNavigator } from '@react-navigation/stack';
import { Splash } from '../../Screens/Auth/Splash';
import AuthNavigator from '../AuthNavigator/AuthNavigator';
import MainNavigator from '../MainNavigator/MainNavigator';

const Stack = createStackNavigator();

export default RootNavigator = ()=> {
  return (
   <Stack.Navigator initialRouteName='Splash'>
    <Stack.Screen
    name='Splash'
    component={Splash}
    options={{
        headerShown:false
    }}
    />
    <Stack.Screen
    name='AuthNavigator'
    component={AuthNavigator}
    options={{
        headerShown:false
    }}
    />
    <Stack.Screen
    name='MainNavigator'
    component={MainNavigator}
    options={{
        headerShown:false
    }}
    />
   </Stack.Navigator>
  );
}