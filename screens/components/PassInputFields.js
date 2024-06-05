import { StyleSheet, TextInput, Text, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Animated } from 'react-native';

const PassInputFields = ({ label, password, onChangeText, visiblePasswordEye, setVisiblePasswordEye, placeholder, style, ...props }) => {
    const animation = new Animated.Value(0);
    const handleEyePress = () => {
       
        setVisiblePasswordEye(!visiblePasswordEye);
    };
    return (
        <View>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>{label}</Text>
            <View style={{ flexDirection: 'row', }} >
                <TextInput
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={password}
                    style={[styles.password_textInput_field, style]}
                    secureTextEntry={visiblePasswordEye ? false : true}
                    keyboardType='Password'
                />
                
                    <View style={styles.eyeStyle} >
                        <MaterialCommunityIcons name={visiblePasswordEye ? "eye-outline" : "eye-off"} size={24} onPress={handleEyePress} />
                        </View>
                        </View>
        </View>
    )
}

export default PassInputFields

const styles = StyleSheet.create({
    password_textInput_field: { height: 45, borderWidth: 1, padding: 10, borderRadius: 10 },
    eyeStyle: { position: 'absolute', right: 10, top: 12, bottom: 12 },

})