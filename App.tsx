/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Button} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import {Blogs} from './components/Blogs';
import {Projects} from './components/Project';
import {Blog1} from './components/Blogs/Blogs1';
import {Counter} from './components/Counter';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Pranshu Aggarwal',
          }}
        />
        <Stack.Screen name="Blogs" component={Blogs} />
        <Stack.Screen name="Projects" component={Projects} />
        <Stack.Screen name="Blog1" component={Blog1} />
        <Stack.Screen name="Counter" component={Counter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
