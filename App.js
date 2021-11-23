import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login'
import Register from './screens/Register'
import ForgotPassword from './screens/ForgotPassword';
import Home from './screens/Home';
import Hotel from './screens/Hotel';
import MoreHotels from './screens/MoreHotels'
const Stack = createNativeStackNavigator()
export default function App({ navigation }) {

  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Hotel' component={Hotel} />
        <Stack.Screen name='More' component={MoreHotels} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

