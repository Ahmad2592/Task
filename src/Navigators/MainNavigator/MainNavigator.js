import { createStackNavigator } from '@react-navigation/stack';
import Home from '../../Screens/Main/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductDetail from '../../Screens/Main/ProductDetail';
import SearchProduct from '../../Screens/Main/SearchProduct';
import AccountScreen from '../../Screens/Main/Account';
import AddProduct from '../../Screens/Main/AddProduct';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = ()=> {
  return (
   <Stack.Navigator initialRouteName='Home'>
    <Stack.Screen
    name='Home'
    component={Home}
    options={{
        headerShown:false
    }}
    />
    <Stack.Screen
    name='ProductDetail'
    component={ProductDetail}
    options={{
        headerShown:false
    }}
    />
    <Stack.Screen
    name='Addproduct'
    component={AddProduct}
    options={{
        headerShown:false
    }}
    />
   </Stack.Navigator>
  );
}
const SearchStack = ()=> {
    return (
     <Stack.Navigator initialRouteName='SearchProduct'>
      <Stack.Screen
      name='SearchProduct'
      component={SearchProduct}
      options={{
        headerTitle:"Search Product"
      }}
      />
     </Stack.Navigator>
    );
  }
  const AccountStack = ()=> {
    return (
     <Stack.Navigator initialRouteName='Account'>
      <Stack.Screen
      name='Account'
      component={AccountScreen}
      options={{
        headerTitle:"Account"
      }}
      />
     </Stack.Navigator>
    );
  }
  export default MainNavigator = ()=>{
    return(
        <Tab.Navigator initialRouteName='HomeStack'>
            <Tab.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ headerTitle:"Products", tabBarLabel:"Home"}}
            />
            <Tab.Screen
            name="SearchStack"
            component={SearchStack}
            options={{headerShown:false, tabBarLabel:"Search"}}
            />
            <Tab.Screen
            name="AccountStack"
            component={AccountStack}
            options={{headerShown:false, tabBarLabel:"Account"}}
            />
        </Tab.Navigator>
    )
  }