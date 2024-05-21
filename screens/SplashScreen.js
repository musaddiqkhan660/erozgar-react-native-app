import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import SignInScreen from './SignInScreen'

import PrimaryHeadingText from './components/PrimaryHeadingText'
import SecondaryDescText from './components/SecondaryDescText'
import LandingSignButtons from './components/LandingSignButtons'
import SignUpScreen from './SignUpScreen'


const SplashScreen = ({ navigation }) => {
  const handleSignInPress = () => {
    navigation.navigate(SignInScreen)
  };
  const handleSignUpPress = () => {
    navigation.navigate(SignUpScreen)
  };
  return (
    <View style={styles.main_container}>

      <View style={{ marginTop: 250 }}>
        <View style={{ margin: 10 }}><PrimaryHeadingText primary={'Join IT Group to Kick Start Your Lesson'} /></View>
        <View style={{ margin: 10 }}><SecondaryDescText secondary={'Join and Learn from Our Top Instructor'} /></View>
        <View style={styles.innerButtonsContainer}>
          <LandingSignButtons title={'Sign In'} onPress={handleSignInPress} type={'signin'} />
          <LandingSignButtons title={'Sign Up'} onPress={handleSignUpPress} type={'signup'} />
        </View>
      </View>
    </View>
  )
}

export default SplashScreen
const styles = StyleSheet.create(
  {
    main_container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#F7F7F7" },
    innerButtonsContainer: {
      flexDirection: 'row',
      marginHorizontal: 20,
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
)