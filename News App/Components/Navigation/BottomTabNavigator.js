import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenOneNavigator from './ScreenOneNavigator'
import ScreenTwoNavigator from './ScreenTwoNavigator'
import { EvilIcons } from '@expo/vector-icons'

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="ScreenOne" >
      <BottomTab.Screen 
        name="Home Page" 
        component={ScreenOneNavigator} 
        options={{tabBarIcon: () => <EvilIcons name="paperclip" size={51} color="black" />}}/>
      <BottomTab.Screen 
        name="Go To News" 
        component={ScreenTwoNavigator} 
        options={{tabBarIcon: () => <EvilIcons name="eye" size={55} color="black" />}}/>
    </BottomTab.Navigator>
  );
}