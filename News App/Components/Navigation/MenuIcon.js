import React from 'react';
import { useCallback } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { DrawerActions, useNavigation } from '@react-navigation/native';

export default function MenuIcon() {
    const navigation = useNavigation();
    // useCallback is fired when the toggleDrawer is fired
    const toggleDrawer = useCallback(() => {
      navigation.dispatch(DrawerActions.toggleDrawer());
    },[]);
  
    return (
      <TouchableOpacity onPress={toggleDrawer}>
          <EvilIcons name="paperclip" size={40} color="black" style={{marginLeft: 25, marginRight: 10}} />
      </TouchableOpacity>
    );
};