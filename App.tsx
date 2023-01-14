/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import {Blogs} from './components/Blogs';
import {Projects} from './components/Project';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Projects" component={Projects} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
