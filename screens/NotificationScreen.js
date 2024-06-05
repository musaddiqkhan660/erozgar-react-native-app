import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { FOURTH_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../colors/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const NotificationScreen = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: SECONDARY_COLOR }}>
            <View style={styles.container}>
                <View style={styles.rect}>
                    <View style={styles.methodFirstGroup}>
                        <TouchableOpacity style={styles.buttonOfMethod}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={{ marginLeft:20,width: 30, height: 30, marginTop: 14, justifyContent: 'center', alignItems: 'center', borderRadius: 50, borderWidth: 1, backgroundColor: FOURTH_COLOR }}>
                                    <MaterialCommunityIcons name="check-all" size={24} />
                                </View>
                                <View style={{ marginLeft: -40 }}>
                                    <Text style={styles.loremIpsum}>Transaction Successfully!</Text>
                                    <Text style={styles.text}>
                                        Yor&#39;e transaction was successfully completed...
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default NotificationScreen

const styles = StyleSheet.create({
    container: {
        borderWidth: 0,
        backgroundColor: SECONDARY_COLOR,
        alignItems: 'center'

    },
    rect: {
        width: 300,
    },
    methodFirstGroup: {
        width: 300,
        height: 68,
        marginTop: 10,
    },
    buttonOfMethod: {
        width: 300,
        height: 68,
        backgroundColor: FOURTH_COLOR,
        borderRadius: 5,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 3,
            height: 3
        },
        shadowOpacity: 0.2,
        shadowRadius: 4
    },
    loremIpsum: {
        color: "#121212",
        marginTop: 16,
        marginLeft: 54,
        fontWeight: '600'
    },
    text: {
        color: "#121212",
        marginLeft: 54,
        fontSize: 11
    }
});