import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreens from './HomeScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreens} />
    </Stack.Navigator>
  );
};

export default HomeStack;
