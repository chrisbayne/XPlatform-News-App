import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// Unwrapping navigation as a prop(erty)
export default function ScreenOne({ navigation }) {
    return (
      <View style={styles.container}>
            <Text style={styles.text}>BBC</Text>
            <Text style={styles.text}>NEWS</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D50000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: "white"
    }
  });