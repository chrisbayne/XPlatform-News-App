import React from 'react';
import MenuIcon from './MenuIcon'
import News from '../../Screens/News';
import { createStackNavigator } from '@react-navigation/stack';

const ScreenTwoStack = createStackNavigator();
export default function ScreenTwoNavigator() {
    return (
        <ScreenTwoStack.Navigator>
            <ScreenTwoStack.Screen
                name="Breaking News"
                component={News}
                // If the platform OS is android THEN ( Then = ? a ternary operator ) show headerTitle and menuIcon. Otherwise ( Otherwise = : ) don't show the header title and menuIcon
                options={Platform.OS === "android" ? {headerTitle: 'Breaking News', headerRight: () => <MenuIcon />} : {headerTitle: 'Breaking News'}}
                />
        </ScreenTwoStack.Navigator>
    );
}