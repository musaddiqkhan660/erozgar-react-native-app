import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
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
import { PRIMARY_COLOR } from '../colors/colors'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { app } from '../firebase-config'
import AsyncStorage from '@react-native-async-storage/async-storage'

const SignInScreen = ({ navigation }) => {
    const [visiblePasswordEye, setVisiblePasswordEye] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const auth = getAuth(app)
    const storeEmail = async (email) => {
        try {
            await AsyncStorage.setItem('email', email);
        } catch (error) {
            console.error(error);
        }
    };

    const storePassword = async (password) => {
        try {
            await AsyncStorage.setItem('password', password);
        } catch (error) {
            console.error(error);
        }
    };
    const getEmail = async () => {
        try {
            const email = await AsyncStorage.getItem('email');

            return email;
        } catch (error) {
            console.error(error);
        }
    };

    const getPassword = async () => {
        try {
            const password = await AsyncStorage.getItem('password');
            console.log('Stored password:', password);

            return password;
        } catch (error) {
            console.error(error);
        }
    };
    const handleSignin = async (email, password) => {
        setLoading(true)
        storeEmail(email); // Store the email
        storePassword(password); // Store the password
        const storedEmail = await getEmail();
        console.log('Stored email:', storedEmail);

        const storedPassword = await getPassword();

        if (email === '' || password === '') {
            Alert.alert("Error", "Please fill in all fields");
            return;
        }
        if (storedEmail && storedPassword) {
            // Automatically sign in the user
            await signInWithEmailAndPassword(auth, storedEmail, storedPassword);
            navigation.navigate('HomeScreen');
        } else {
            Alert.alert("Error", "Invalid email or password");
        }

    };
    useEffect(() => {
        const checkForStoredCredentials = async () => {
            const storedEmail = await getEmail();
            const storedPassword = await getPassword();

            if (storedEmail && storedPassword) {
                handleSignin(storedEmail, storedPassword);
            }
        };

        checkForStoredCredentials();
    }, []);
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
                        <TextInputFields
                            type={'signin'}
                            value={email}
                            label={'Email'}
                            onChangeText={setEmail}
                            placeholder={'your email here'} />
                        {/* password field */}
                        <PassInputFields
                            visiblePasswordEye={visiblePasswordEye}
                            setVisiblePasswordEye={setVisiblePasswordEye}
                            label={'Password'} value={password}
                            onChangeText={setPassword}
                            placeholder={'your password here...'}
                            style={{ width: 300 }} />
                        {/* forget password text button */}
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(ResetPassword) }}>
                            <Text style={styles.forgetPassword_text}>
                                Forget Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Sign In Button on Sign In Screen */}
                <View style={{ justifyContent: 'center', alignItems: 'center' }} >
                    {loading ? (
                        <ActivityIndicator />
                    ) : (
                        <LandingSignButtons title={'Sign In'} onPress={() => {
                            if (email && password) {
                                handleSignin(email, password)
                            }
                            else {
                                Alert.alert("Error", "Please fill in all fields");
                            }
                        }} type={'signin'} style={{ width: 300, borderRadius: 10, borderWidth: 1, backgroundColor: PRIMARY_COLOR, height: 40, }} />

                    )}
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