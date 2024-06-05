import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TextInputFields = ({ label, email, onChangeText, placeholder, style, ...props }) => {

    return (
        <View>
            <Text style={{ marginLeft: 12, fontSize: 17 }}>{label}</Text>
            <TextInput
                email={email}
                placeholder={placeholder}
                onChangeText={onChangeText}
                style={[styles.email_textInput_field, style]}
            />

        </View>
    )
}

export default TextInputFields

const styles = StyleSheet.create({

    email_textInput_field: { height: 45, borderWidth: 1, padding: 10, borderRadius: 10 },
})