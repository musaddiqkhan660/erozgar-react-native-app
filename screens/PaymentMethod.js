import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import PaymentProcedureCompo from './components/PaymentProcedureCompo'
import PaymentMethodWay from './components/PaymentMethodWay'
import EasyPaisaMethodComp from '././components/EasyPaisaMethodComp'
import AddToCardComponent from '././components/AddToCardComponent'
import JazzCashComponent from '././components/JazzCashComponent'
import CustomButton from './components/CustomButton';
import { SECONDARY_COLOR } from '../colors/colors'
const PaymentMethod = ({ navigation }) => {
    const [selectedMethod, setSelectedMethod] = useState('')
    const onHandlePress = (SuccessfulTransaction) => {
        console.log("onpress: ", 'continue');
        navigation.navigate('SuccessfulTransaction')
    }

    const handleSelectMethod = (method) => {
        console.log("method: ", method);
        setSelectedMethod(method)
    }
    return (
        <View style={styles.container}>
            <View style={styles.rect}>
                {/* Payment Three Cycles */}
                <PaymentProcedureCompo />
                <View style={styles.textContainer}>
                    <Text style={styles.loremIpsum}>Select Payment Method</Text>
                </View>
                {
                    selectedMethod === '' ? (
                        <>
                            <PaymentMethodWay title={'EasyPaisa'} onPress={() => handleSelectMethod('EasyPaisa')} />
                            <PaymentMethodWay title={'Add To Card'} onPress={() => handleSelectMethod('Add To Card')} />
                            <PaymentMethodWay title={'JazzCash'} onPress={() => handleSelectMethod('JazzCash')} />
                        </>
                    ) : selectedMethod === 'EasyPaisa' ? (
                        <EasyPaisaMethodComp />
                    ) : selectedMethod === 'JazzCash' ? (
                        <JazzCashComponent />
                    ) : selectedMethod === 'Add To Card' ? (
                        <AddToCardComponent />
                    ) : null}



            </View>
            <View style={{ alignItems: 'center', }}>
                <CustomButton onPress={() => onHandlePress('SuccessfulTransaction')} title={'Continue'} />
            </View>
        </View>
    );
}

export default PaymentMethod

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 0,
        borderColor: "#000000",
        backgroundColor: SECONDARY_COLOR,

    },
    rect: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 168
    },

    textContainer: {
        width: 290,
        height: 30,
        marginBottom: 10
    },
    loremIpsum: {
        color: "#121212",
        fontSize: 22
    },


});