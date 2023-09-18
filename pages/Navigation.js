import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CadastroProdutos from './CadastroProdutos';
import Home from './Home';
import Catalog from '../models/Catalog';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CadastroProdutos" component={CadastroProdutos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}