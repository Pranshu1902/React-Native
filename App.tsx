/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './components/Home';
import Icon from 'react-native-ionicons';
import {Blogs} from './components/Blogs';
import {Projects} from './components/Project';
import {Blog1} from './components/Blogs/Blogs1';
import {Counter} from './components/Counter';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackNavigationContainer() {
  return (
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
  );
}

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={StackNavigationContainer}
          options={{
            tabBarBadge: 3,
            tabBarLabel: 'Home',
            tabBarIcon: () => <Icon name="add" color="#000000" />,
          }}
        />
        <Tab.Screen
          name="Project"
          component={Projects}
          options={{
            tabBarIcon: () => <Icon name="add" color="#000000" />,
          }}
        />
        <Tab.Screen
          name="Blog"
          component={Blogs}
          options={{
            tabBarIcon: () => <Icon name="add" color="#000000" />,
          }}
        />
        <Tab.Screen
          name="Counter"
          component={Counter}
          options={{
            tabBarIcon: () => <Icon name="add" color="#000000" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
