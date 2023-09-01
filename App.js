import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native-web';
import HomeScreen from './screens/Home';
import InitialScreen from './screens/Initial';
import LoginScreen from './screens/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SignUpScreen from './screens/SignUp';


const Stack = createNativeStackNavigator();

// optios={{ headerShown: false }} remove header from Stack Screen
function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUpScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Initial" component={InitialScreen} />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );
}

export default App;