import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import PrimaryHeadingText from './components/PrimaryHeadingText'
import SecondaryDescText from './components/SecondaryDescText'
import PassInputFields from './components/PassInputFields'
import SocialSignButton from './components/SocialSignButton'
import UpdatePassScreen from './UpdatePassScreen'
import { PRIMARY_COLOR } from '../colors/colors'

const ResetPassword = ({ navigation }) => {
    const [visibleNewPassword, setVisibleNewPassword] = useState(false)
    const handleOnReset = () => {
        navigation.navigate(UpdatePassScreen)
    }

    return (
        <View style={styles.container}>
            <View style={{ width: 300 }}>
                <View style={styles.Reset_Container}>
                    <PrimaryHeadingText primary={'Reset Password'} />
                    <SecondaryDescText secondary={'At least 8 characters with uppercase and lowercase letter.'} />
                </View>
                <View style={styles.inputField_container} >

                    <PassInputFields label={'Password'} placeholder={'enter password '} style={{ width: 300 }} />
                    <PassInputFields label={'Confirm Password'} placeholder={'enter Confirm password '} style={{ width: 300 }} />

                </View>
                <SocialSignButton label={'Update Password'} color={'white'} style={{ width: 300, backgroundColor: PRIMARY_COLOR }} onPress={handleOnReset} />
            </View>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    container: { alignItems: 'center', flex: 1 },
    Reset_Container: {
        marginTop: 20, justifyContent: 'center', alignSelf: 'center'
    },
    resetText: { fontSize: 30, fontWeight: 'bold' },
    inputField_container: {
        padding: 20, justifyContent: 'center', alignItems: 'center'
    }, new_password_textInput: { height: 45, borderWidth: 1, padding: 10, borderRadius: 10 },
    password_textInput_field: { height: 45, width: 300, borderWidth: 1, padding: 10, borderRadius: 10 },
    forgetPassword_text: { fontSize: 10, marginLeft: 190, color: '#333333' }
});