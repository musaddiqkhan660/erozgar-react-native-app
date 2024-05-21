import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/SignInScreen';
import ResetPassword from './screens/ResetPassword';
import SignUpScreen from './screens/SignUpScreen'
import UpdatePassScreen from './screens/UpdatePassScreen';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen  name="SplashScreen" component={SplashScreen} options={{ headerShown: true, headerTitle: '', headerRight: () => (<TouchableOpacity><Text style={{ fontSize: 16, marginRight: 16 }} >Skip</Text></TouchableOpacity>), headerStyle: { backgroundColor: '#F7F7F7', borderBottomWidth: 0 } }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerTitle: '' }} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} options={{ headerTitle: '' }} />
        <Stack.Screen name='UpdatePassScreen' component={UpdatePassScreen} options={{ headerTitle: '' }} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerTitle: 'Sign Up' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
