import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SignInScreen from './SignInScreen'
import SecondaryDescText from './components/SecondaryDescText'
import TextInputFields from './components/TextInputFields'
import PassInputFields from './components/PassInputFields'
import LineBar from './components/LineBar'
import SocialSignButton from './components/SocialSignButton'
import StatusAlready from './components/StatusAlready'
import { PRIMARY_COLOR } from '../colors/colors'
import { app } from "../firebase-config"
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { doc, getFirestore, setDoc } from 'firebase/firestore'

const SignUpScreen = ({ navigation }) => {
  const [visiblePasswordEye, setVisiblePasswordEye] = useState(false);
  const [visibleConfirmPasswordEye, setVisibleConfirmPasswordEye] = useState(false);
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('');
  const auth = getAuth(app)
  const db = getFirestore();

  const onPressSignUp = async (email, password) => {
    console.log("authSignUp: ", auth);
    if (email === '' || password === '' || fullName === '') {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords don't match");
      return;
    }
    else {
      try {
        await createUserWithEmailAndPassword(auth, email, password, fullName)
        const user = auth.currentUser
        if (user) {
          await setDoc(doc(db, "Users", user.uid), {
            fullName,
            email
          })
        }
        console.log("current User: ", user);
        navigation.navigate("HomeScreen")
      } catch (error) {
        console.error(error);
        Alert.alert("Signup Failed", error.message)
      }
    }
  }
  return (
    <View style={styles.container}>
      <View >
        <View style={styles.signIn_container}>
          <SecondaryDescText secondary={'Create an account to begin your journey'} />
        </View>
        <View style={styles.inputField_container} >
          <View >

            <TextInputFields fullName={fullName} label={'Full Name'} onChangeText={(text) => setFullName(text)} placeholder={'your name here...'} style={{ width: 300 }} />
          </View>

          <View >

            <TextInputFields email={email} label={'Email'} onChangeText={(text) => setEmail(text)} placeholder={'your email here'} style={{ width: 300 }} />
          </View>
          <View >
            <PassInputFields visiblePasswordEye={visiblePasswordEye}
              setVisiblePasswordEye={setVisiblePasswordEye} password={password} onChangeText={(text) => setPassword(text)} label={'Password'} placeholder={'your password'} style={{ width: 300 }} />
          </View>
          <View >
            <PassInputFields visiblePasswordEye={visibleConfirmPasswordEye}
              setVisiblePasswordEye={setVisibleConfirmPasswordEye} confirmPassword={confirmPassword} label={'Confirm Password'} onChangeText={(text) => setConfirmPassword(text)} placeholder={'your confirm password'} style={{ width: 300 }} />

          </View>

        </View>
        <View >
          <TouchableOpacity onPress={() => onPressSignUp(email, password, fullName)} style={{ borderRadius: 10, borderWidth: 1, backgroundColor: PRIMARY_COLOR, height: 40, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: '#ffffff', fontSize: 20 }}>Sign Up</Text></TouchableOpacity>
        </View>
        <LineBar text={'or Sign Up with'} />

        <SocialSignButton label={'f'} social_icon={'facebook'} color={'#ffffff'} style={{ width: 40, borderRadius: 20 }} />
        <StatusAlready text={'Already have an account?'} typeText={'Sign In here'} onPress={() => navigation.navigate(SignInScreen)} />
      </View>
    </View>
  )
}

export default SignUpScreen
const styles = StyleSheet.create({
  container: { alignItems: 'center', flex: 1 },
  signIn_container: {
    marginTop: 20,

  },
  signInText: { fontSize: 30, fontWeight: 'bold' },
  inputField_container: {
    padding: 20, justifyContent: 'center', alignItems: 'center'
  },
  password_textInput_field: { height: 45, width: 300, borderWidth: 1, padding: 10, borderRadius: 10 },
  forgetPassword_text: { fontSize: 10, marginLeft: 190, color: '#333333' }
});