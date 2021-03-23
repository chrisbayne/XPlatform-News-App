import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenOneNavigator from './ScreenOneNavigator';
import ScreenTwoNavigator from './ScreenTwoNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName="ScreenOne" >
        <Drawer.Screen 
        name="Home"
        component={ScreenOneNavigator}
        />
        <Drawer.Screen 
        name="Go To News"
        component={ScreenTwoNavigator}
        />
      </Drawer.Navigator>
  );
}