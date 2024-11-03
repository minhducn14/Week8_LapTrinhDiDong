import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from  './Home'
import List from './List'
import Detail from './Details'
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Detail" component={Detail}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

