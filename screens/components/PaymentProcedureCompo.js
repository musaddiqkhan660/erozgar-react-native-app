import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FOURTH_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../../colors/colors'

const PaymentProcedureCompo = ({ activeStep }) => {
    return (
        <View style={styles.paymentProcedureStyle}>
            <View style={styles.circleStyle}>
                <View style={styles.circle}>
                    <Text style={styles.countNo}>1</Text>
                </View>
                <Text style={{ fontSize: 10,}}>Overview</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.circleStyle}>
                <View style={styles.circle}>
                    <Text style={styles.countNo}>2</Text>
                </View>
                <Text style={{ fontSize: 10 }}>Payment Method</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.circleStyle}>
                <View style={styles.circle}>
                    <Text style={styles.countNo}>3</Text>
                </View>
                <Text style={{ fontSize: 10 }}>Confirmation</Text>
            </View>
        </View>
    )
}

export default PaymentProcedureCompo

const styles = StyleSheet.create({
    paymentProcedureStyle: {
        flexDirection: 'row',
        backgroundColor: FOURTH_COLOR, margin: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: 290
    },
    circle: { backgroundColor: 'gray', width: 30, height: 30, borderRadius: 50, },
    // circleHighlight: { backgroundColor: 'blue', width: 30, height: 30, borderRadius: 50, },

    circleStyle: {
        margin: 3, padding: 3, justifyContent: 'center', alignItems: 'center'
    },
    countNo: { marginLeft: 10, marginTop: 5, fontSize: 14,color:SECONDARY_COLOR  },
    divider: {
        height: 1,
        backgroundColor: '#000',
        width: 30
    },
})