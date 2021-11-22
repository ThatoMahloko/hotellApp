import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Login from './screens/Login'
import Register from './screens/Register'
import Home from './screens/Home';
import PopularLocations from './screens/PopularLocations.'
import MoreHotels from './screens/MoreHotels'
import ScrollCard from './components/ScrollCard';
import Hotel from './screens/Hotel';
import { SafeAreaView } from 'react-navigation';
const Stack = createNativeStackNavigator()
export default function App({ navigation }) {

  return (
      <NavigationContainer >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Hotel' component={Hotel} />
          <Stack.Screen name='More' component={MoreHotels} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

