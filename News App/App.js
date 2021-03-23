import React from 'react'
import { createAppContainer } from 'react-navigation'
import News from './Screens/News'
import { createStackNavigator } from '@react-navigation/stack'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './Components/Navigation/BottomTabNavigator'
import DrawerNavigator from './Components/Navigation/DrawerNavigatior'

const Stack = createStackNavigator()

const PlatformSpecificNavigator = Platform.select ({
  // If it's iOS, equal BottomTabNavigator
  ios: () => BottomTabNavigator,
  // If it's android, equal DrawerNavigator
  android: () => DrawerNavigator
})()

export default function App(){
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Root" component={PlatformSpecificNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

// const stackNavigator = createStackNavigator({
//   News: News
// })

// const App = createAppContainer(stackNavigator)
// export default App