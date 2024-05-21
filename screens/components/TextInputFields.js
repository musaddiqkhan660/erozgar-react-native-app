import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TextInputFields = ({ label, placeholder, style, ...props }) => {
    const [emailSignin, setEmailSignin] = useState('')
    const [passwordSignin, setPasswordSignin] = useState('')

    return (
        <View>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>{label}</Text>
            <TextInput
                placeholder={placeholder}
                style={[styles.email_textInput_field,style]}
            />
        </View>
    )
}

export default TextInputFields

const styles = StyleSheet.create({
    
    email_textInput_field: { height: 45, borderWidth: 1, padding: 10, borderRadius: 10 },
})