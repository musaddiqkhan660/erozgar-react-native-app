import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PrimaryHeadingText from './components/PrimaryHeadingText'
import SocialSignButton from './components/SocialSignButton'

const UpdatePassScreen = ({navigation}) => {
    const handleOnReset=()=>{
        console.log('Successfull update');
    }
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <View style={{marginTop:-150}}><Image source={require('../src/successfullButton.png')} style={{width:250,height:250}}/></View>
            <PrimaryHeadingText primary={'Your Password has been updated Successfully!'} />
            <SocialSignButton label={'Done'} style={{width:300}} onPress={handleOnReset}/>
        </View>
    )
}

export default UpdatePassScreen

const styles = StyleSheet.create({})