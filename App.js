import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from './screens/SignInScreen';
import ResetPassword from './screens/ResetPassword';
import SignUpScreen from './screens/SignUpScreen'
import UpdatePassScreen from './screens/UpdatePassScreen';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import OverviewScreen from './screens/OverviewScreen';
import PaymentScreen from './screens/PaymentScreen';
import PaymentMethod from './screens/PaymentMethod';
import SuccessfulTransaction from './screens/components/SuccessfulTransaction';
import NotificationScreen from './screens/NotificationScreen';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import PushNotification from './screens/PushNotification';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {

  const [headerTitleName, setHeaderTitleName] = useState('')
  const db = getFirestore();

  useEffect(() => {
    async function fetchData() {
      // console.log("headerTitle: ", headerTitleName);
      const user = getAuth().currentUser;
      // console.log('userApp: ', user);
      const docRef = doc(db, "Users", user.uid);
      // console.log('docRef: ', docRef);
      if (user) {
        const docSnap = await getDoc(docRef);
        // console.log('docSnap: ', docSnap);
        if (docSnap.exists()) {
          const userData = docSnap.data();
          setHeaderTitleName(`${userData.fullName}`)

        } else {
          console.log("No such document!");
        }
      }
    }
    fetchData();
  }, [headerTitleName, getAuth().currentUser]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='PushNotification' component={PushNotification} options={{ headerShown: true }} />
        <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{ headerTitle: '' }} />
        <Stack.Screen name='ResetPassword' component={ResetPassword} options={{ headerTitle: '' }} />
        <Stack.Screen name='UpdatePassScreen' component={UpdatePassScreen} options={{ headerTitle: '' }} />
        <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{ headerTitle: 'Sign Up' }} />
        <Stack.Screen name='HomeScreen' component={MyTabs} options={{
          headerShown: true, headerTitle: `Welcome ${headerTitleName}`, headerRight: () => (
            <>
              <View style={{ margin: 5 }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='home' size={24} />
                </TouchableOpacity>
              </View>
              <View style={{ margin: 5 }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="account-settings" size={24} />
                </TouchableOpacity>
              </View></>)
        }} />
        <Stack.Screen name='OverviewScreen' component={OverviewScreen} options={{ headerShown: false }} />
        <Stack.Screen name='PaymentScreen' component={PaymentScreen} options={{ headerShown: true, headerTitle: '' }} />
        <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={{ headerShown: true, headerTitle: '' }} />
        <Stack.Screen name='SuccessfulTransaction' component={SuccessfulTransaction} options={{ headerShown: true, headerTitle: '' }} />
        <Stack.Screen name='NotificationScreen' component={NotificationScreen} options={{
          headerShown: true, headerTitle: 'Notification',
          headerRight: () => (
            <>
              <View style={{ margin: 5 }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name='home' size={24} />
                </TouchableOpacity>
              </View>
              <View style={{ margin: 5 }}>
                <TouchableOpacity>
                  <MaterialCommunityIcons name="account-settings" size={24} />
                </TouchableOpacity>
              </View></>)
        }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" size={24} />
        ),
        tabBarActiveTintColor: 'blue',

      }} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account-settings" size={24} />
        ),
        tabBarActiveTintColor: 'blue',
      }} />
    </Tab.Navigator>
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
