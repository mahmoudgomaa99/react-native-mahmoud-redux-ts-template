import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'src/screens/Auth/Home';

export type TAuthStack = {
  home: undefined;
};

const Stack = createNativeStackNavigator<TAuthStack>();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
