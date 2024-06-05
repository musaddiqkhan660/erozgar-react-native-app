import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
const styles = StyleSheet.create({
    methodFirstGroup: {
        width: 290,
        height: 68,
        margin: 10
    },
    buttonOfMethod: {
        width: 290,
        height: 68,
        backgroundColor: "#E6E6E6",
        borderRadius: 10,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        elevation: 12,
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    imageOfMethod: {
        height: 26,
        width: 30
    },

    imageOfMethodRow: {
        height: 26,
        flexDirection: "row",
        marginTop: 19,
        marginLeft: 24,
        marginRight: 210
    },

    easyPaisa: {
        color: "#121212",
        lineHeight: 16,
        width: 150,
        fontSize: 16,
        marginLeft: 14,
        marginTop: 5
    },
})
const PaymentMethodWay = ({ title, onPress }) => {
    return (
        <View style={styles.methodFirstGroup}>
            <TouchableOpacity style={styles.buttonOfMethod} onPress={onPress}>
                <View style={styles.imageOfMethodRow}>
                    <Image
                        source={require("../../src/add.png")}
                        resizeMode="contain"
                        style={styles.imageOfMethod}
                    ></Image>
                    <Text style={styles.easyPaisa}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default PaymentMethodWay

