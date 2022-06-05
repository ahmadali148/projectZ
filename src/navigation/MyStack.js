import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyTabs from './MyTabs';
const Stack = createNativeStackNavigator();

const MyStack=()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="MyTabs" component={MyTabs}
       options={{headerShown: false}}
      />
    </Stack.Navigator>
    </NavigationContainer>

  );
};
export default MyStack;