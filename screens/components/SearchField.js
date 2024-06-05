import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const SearchField = ({ label, placeholder, type, style, ...props }) => {

    return (
        <View style={{ flexDirection: 'row',justifyContent: 'center', alignItems: 'center' ,margin:10,}}>

            <View style={styles.eyeStyle} >
                <MaterialCommunityIcons name='search-web' size={24} onPress={() => console.log('search')} />
            </View>
            <TextInput
                placeholder={placeholder}
                style={styles.email_textInput_field}
            />

        </View>
    )
}

export default SearchField

const styles = StyleSheet.create({
    eyeStyle: { position: 'absolute', right: 10, top: 12, bottom: 12,marginRight:10 },
    email_textInput_field: { height: 45, borderWidth: 1, padding: 10, borderRadius: 10, width: 300 },
})