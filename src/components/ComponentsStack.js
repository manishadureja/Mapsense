import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InputScreen from './InputScreen';
import DisplayScreen from './DisplayScreen';

const Stack = createStackNavigator();

const ComponentStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Input Form"
          component={InputScreen}
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen name="Display" component={DisplayScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ComponentStack;