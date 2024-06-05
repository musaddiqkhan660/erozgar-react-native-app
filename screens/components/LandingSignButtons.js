import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../colors/colors'

const LandingSignButtons = ({ title, onPress, type, style, ...props }) => {


    const buttonStyle = type === 'signin' ? styles.signinButton : styles.signupButton
    return (
        <View >
            <View style={{ margin: 10 }}>
                <TouchableOpacity

                    onPress={onPress}
                    style={[buttonStyle, buttonStyle]}
                >
                    <Text style={{ color: type === 'signin' ? SECONDARY_COLOR : PRIMARY_COLOR }}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>

    )
}

export default LandingSignButtons

const styles = StyleSheet.create({
    signinButton: {
        borderRadius: 30,
        width: 150,
        height: 50,
        backgroundColor: PRIMARY_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupButton: {
        borderRadius: 30,
        width: 150,
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center', borderWidth: 1, borderColor: '#003096'
    }
})