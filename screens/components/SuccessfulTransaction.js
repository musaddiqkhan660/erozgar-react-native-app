import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PaymentProcedureCompo from './PaymentProcedureCompo'
import { SECONDARY_COLOR } from '../../colors/colors'
import CustomButton from './CustomButton'

const SuccessfulTransaction = ({ navigation }) => {
    console.log("navigation: ", navigation);
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: SECONDARY_COLOR }}>
            <PaymentProcedureCompo />
            <View style={{ marginTop: 30 }}><Text style={{ fontSize: 20, fontWeight: 600 }}>Transaction Completed</Text></View>
            <View><Image height={300} width={300} source={{ uri: 'https://img.freepik.com/premium-vector/success-payment-hand-illustration-flat-style-approved-money-vector-illustration-isolated-background-successful-pay-sign-business-concept_157943-6857.jpg?w=740' }} /></View>
            <View style={{ marginTop: 110 }}>
                <CustomButton title={'Continue'} onPress={() => { navigation.replace('HomeScreen') }} />
            </View>
        </View>
    )
}

export default SuccessfulTransaction

const styles = StyleSheet.create({})