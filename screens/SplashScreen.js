import { View, Text, Button, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React,{useEffect} from 'react'

import PrimaryHeadingText from './components/PrimaryHeadingText'
import SecondaryDescText from './components/SecondaryDescText'
import LandingSignButtons from './components/LandingSignButtons'
import SignUpScreen from './SignUpScreen'
import SignInScreen from './SignInScreen'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../colors/colors'
import { getAuth } from 'firebase/auth'
import firebase from 'firebase/compat/app'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const auth = getAuth();
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate('HomeScreen'); // navigate to home screen if user is already signed in
      }
    });
  }, []);
  const handleSignInPress = () => {
    navigation.navigate(SignInScreen)
  };
  const handleSignUpPress = () => {
    navigation.navigate(SignUpScreen)
  };
  return (
    <>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ flex: 5 }}></View>
        <View style={{ width: 60, flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 10, marginTop: 50, borderRadius: 30, borderColor: PRIMARY_COLOR, borderWidth: 1, backgroundColor: SECONDARY_COLOR }}>
          <TouchableOpacity>
            <Text style={{ fontSize: 15, padding: 2 }} >Skip</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.main_container}>
        <View style={{ borderRadius: 20 }}><Image style={{ borderRadius: 20 }} height={200} width={300} source={{ uri: 'https://img.freepik.com/premium-vector/people-working-office_18591-59735.jpg?w=740' }} /></View>
        <View style={{ marginTop: 10 }}>
          <View style={{ margin: 10 }}><PrimaryHeadingText primary={'Join IT Group to Kick Start Your Lesson'} /></View>
          <View style={{ margin: 10 }}><SecondaryDescText secondary={'Join and Learn from Our Top Instructor'} /></View>
          <View style={styles.innerButtonsContainer}>
            <LandingSignButtons title={'Sign In'} onPress={handleSignInPress} type={'signin'} />
            <LandingSignButtons title={'Sign Up'} onPress={handleSignUpPress} type={'signup'} />
          </View>
        </View>
      </View>
    </>
  )
}

export default SplashScreen
const styles = StyleSheet.create(
  {
    main_container: { flex: 1, alignItems: 'center', justifyContent: 'center', },
    innerButtonsContainer: {
      flexDirection: 'row',
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
)