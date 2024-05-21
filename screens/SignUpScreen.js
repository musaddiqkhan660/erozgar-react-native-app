import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SignInScreen from './SignInScreen'
import SecondaryDescText from './components/SecondaryDescText'
import TextInputFields from './components/TextInputFields'
import PassInputFields from './components/PassInputFields'
import LineBar from './components/LineBar'
import SocialSignButton from './components/SocialSignButton'
import StatusAlready from './components/StatusAlready'

const SignUpScreen = ({ navigation }) => {
  const [visiblePasswordEye, setVisiblePasswordEye] = useState(true);
  const [visibleConfirmPasswordEye, setvisibleConfirmPasswordEye] = useState(false)
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const onPressSignUp = () => {
    console.log(password)
  }
  return (
    <View style={styles.container}>
      <View >
        <View style={styles.signIn_container}>
          <SecondaryDescText secondary={'Create an account to begin your journey'} />
        </View>
        <View style={styles.inputField_container} >
          <View >
            {/* <Text style={{ marginLeft: 12, fontSize: 17 }}>Full Name</Text> */}
            {/* <TextInput
              value={fullName}
              onChangeText={(fullName) => setFullName(fullName)}
              placeholder='your name here...'
              style={styles.email_textInput_field}
            /> */}
            <TextInputFields label={'Full Name'} placeholder={'your name here...'} style={{ width: 300 }} />
          </View>

          <View >
            {/* <Text style={{ marginLeft: 12, fontSize: 17 }}>Email</Text>
            <TextInput
              value={email}
              onChangeText={(email) => setEmail(email)}
              placeholder='your email here...'
              style={styles.email_textInput_field}
            /> */}
            <TextInputFields label={'Email'} placeholder={'your email here'} style={{ width: 300 }} />
          </View>
          <View >
            <PassInputFields label={'Password'} placeholder={'your password'} style={{ width: 300 }} />
          </View>
          <View >
            <PassInputFields label={'Confirm Password'} placeholder={'your confirm password'} style={{ width: 300 }} />

          </View>

        </View>
        <View >
          <TouchableOpacity onPress={onPressSignUp} style={{ borderRadius: 10, borderWidth: 1, backgroundColor: '#000000', height: 40, justifyContent: 'center', alignItems: 'center' }}><Text style={{ color: '#ffffff', fontSize: 20 }}>Sign Up</Text></TouchableOpacity>
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