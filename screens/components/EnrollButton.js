import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SECONDARY_COLOR,PRIMARY_COLOR } from '../../colors/colors'

const EnrollButton = () => {
    return (
        <View style={styles.enrollContainer}>
            <TouchableOpacity >
                <Text style={styles.enrollStyle}>Get Enroll</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EnrollButton

const styles = StyleSheet.create({
    enrollContainer: { width: 360, justifyContent: 'center', alignItems: 'center', marginBottom: 40, backgroundColor: PRIMARY_COLOR },
    enrollStyle: { padding: 10, borderRadius: 10, color: SECONDARY_COLOR },
})