import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomButton = ({ onPress, title }) => {
    console.log("onpress: ", onPress);
    console.log("title: ", title);
    return (
        <View>
            <View style={styles.continueButtonGroup}>
                <TouchableOpacity style={styles.continueButton} onPress={onPress}>
                    <Text style={styles.continueButtonText}>{title}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    continueButtonGroup: {
        width: 290,
        height: 40,
        marginBottom:50
    },
    continueButton: {
        width: 290,
        height: 40,
        backgroundColor: "rgba(0,48,150,1)",
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 10,
        shadowOpacity: 0.15,
        shadowRadius: 10,
        borderWidth: 0,
        borderColor: "rgba(0,0,0,1)",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    continueButtonText: {
        color: "rgba(255,255,255,1)",
        fontSize: 20,
    }
})