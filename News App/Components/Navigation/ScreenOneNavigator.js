import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import ScreenOne from '../../Screens/ScreenOne'
import MenuIcon from './MenuIcon'

const ScreenOneStack = createStackNavigator();
export default function ScreenOneNavigator() {
    return (
      <ScreenOneStack.Navigator>
        <ScreenOneStack.Screen 
          name="ScreenOne"
          component={ScreenOne}
          options={Platform.OS === "android" ? {headerTitle: 'BBC News Api', headerRight: () => <MenuIcon />} : {headerTitle: 'BBC News Api'}} 
          />
      </ScreenOneStack.Navigator>
    );
}