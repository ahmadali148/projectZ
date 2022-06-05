import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/Ionicons';
import Profile from '../screen/Profile'
import {Dummy} from '../screen/Dummy';
import {Dummy1} from '../screen/Dummy1';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
    initialRouteName='Profile'
      screenOptions={{
        tabBarActiveTintColor: '#B054CBFF',
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        //tabBarStyle: {backgroundColor: 'red'},
      }}>
      <Tab.Screen
        name="Dummy"
        component={Dummy}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="ios-menu-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="ios-home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Dummy1"
        component={Dummy1}
        options={{
          headerShown: false,
          tabBarIcon: ({color}) => (
            <Icons name="ios-person-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default MyTabs;