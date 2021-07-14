import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreens from './HomeScreen';
import colors from '../../constants/colors';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.blackPearl,
        headerStyle: {backgroundColor: colors.zircon},
      }}>
      <Stack.Screen name="Acuarifelo" component={HomeScreens} />
    </Stack.Navigator>
  );
};

export default HomeStack;
