import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React from 'react'
import ResetPassword from './ResetPassword'
import SignUpScreen from './SignUpScreen'
import PrimaryHeadingText from './components/PrimaryHeadingText'
import SecondaryDescText from './components/SecondaryDescText'
import TextInputFields from './components/TextInputFields'
import PassInputFields from './components/PassInputFields'
import LandingSignButtons from './components/LandingSignButtons'
import LineBar from './components/LineBar'
import SocialSignButton from './components/SocialSignButton'
import StatusAlready from './components/StatusAlready'
const SignInScreen = ({ navigation }) => {
    const handleSignin = () => {
        console.log('handle signin press');
    };
    return (
        <View style={styles.container}>
            <View style={{ width: 300 }}>
                {/* main header text container */}
                <View style={styles.signIn_container}>
                    <PrimaryHeadingText primary={'Sign In'} />
                    <SecondaryDescText secondary={'Please Sign in with your account'} />
                </View>
                <View style={styles.inputField_container} >
                    <View style={{ width: 300 }}>
                        {/* email field */}
                        <TextInputFields type={'signin'} label={'Email'} placeholder={'your email here'} />
                        {/* password field */}
                        <PassInputFields label={'Password'} placeholder={'your password here...'} style={{ width: 300 }} />
                        {/* forget password text button */}
                        <TouchableOpacity onPress={() => { navigation.navigate(ResetPassword) }}>
                            <Text style={styles.forgetPassword_text}>
                                Forget Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Sign In Button on Sign In Screen */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    <LandingSignButtons title={'Sign In'} onPress={handleSignin} type={'signin'} style={{ width: 300, borderRadius: 10, borderWidth: 1, backgroundColor: '#000000', height: 40, }} />
                </View>
                {/* Showing Linebar */}
                <LineBar text={'or Sign In with'} />
                {/* Sign in with facebook */}
                <View style={{ marginTop: 20, marginBottom: 10 }}>

                    <SocialSignButton label={'Sign in with Facebook'} social_icon={'facebook'} style={{ width: 300 }} />
                </View>
                {/* Sign Up with Gmail */}
                <SocialSignButton label={'Sign in with Gmail'} social_icon={'gmail'} color={'white'} style={{ width: 300 }} />

                <StatusAlready text={"Don't have an account?"} typeText={'Sign Up here'} onPress={() => navigation.navigate(SignUpScreen)} />

            </View>
        </View>
    )
}

export default SignInScreen
const styles = StyleSheet.create({
    container: { alignItems: 'center', flex: 1 },
    signIn_container: {
        padding: 20, justifyContent: 'center',
        alignItems: 'center'
    },
    signInText: { fontSize: 30, fontWeight: 'bold' },

    forgetPassword_text: { fontSize: 10, marginLeft: 190, color: '#333333' },

});