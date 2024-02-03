import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import RestuarentScreen from '../screens/RestuarentScreen';
import CartScreen from '../screens/CartScreen';
import OrderScreen from '../screens/OrderScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown:false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rest" component={RestuarentScreen} />
        <Stack.Screen name="OrderPreparing" component={OrderScreen} />
        <Stack.Screen name="Delivery" component={DeliveryScreen} />
        <Stack.Screen name="Cart" screenOptions={{ presentation: 'modal' }} component={CartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation
