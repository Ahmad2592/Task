import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../Screens/Auth/Login';

const Stack = createStackNavigator();

export default AuthNavigator = ()=> {
  return (
   <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen
    name='Login'
    component={LoginScreen}
    options={{
        headerShown:false
    }}
    />

 
   </Stack.Navigator>
  );
}