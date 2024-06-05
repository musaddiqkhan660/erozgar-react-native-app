import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { PRIMARY_COLOR } from '../../colors/colors'

const StatusAlready = ({ text, typeText, onPress }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 20, flexDirection: 'row' }}>
            <Text style={{ fontSize: 10, color: '#333333' }}>
                {text}
            </Text>
            <TouchableOpacity onPress={onPress} >
                <Text style={{ fontWeight: 'bold', fontSize: 12, color: PRIMARY_COLOR }}>
                    {typeText}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default StatusAlready

const styles = StyleSheet.create({})