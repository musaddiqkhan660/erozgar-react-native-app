import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { FOURTH_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../../colors/colors'

const AddToCardComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.cardView}>
        <View style={styles.cardInputViewItem}>
          <TextInput style={styles.cardInputText} placeholder='Name on Card' />
        </View>
        <View style={styles.cardInputViewItem}>
          <TextInput style={styles.cardInputText} placeholder='Card Number' />
        </View>
        <View style={styles.methodThirdGroupRow}>
          <View style={styles.methodThirdGroup}>
            <TextInput style={styles.button3} placeholder='CVC Number' />
          </View>
          <View style={styles.methodThirdGroup}>
            <TextInput style={styles.button3} placeholder='Expirty Date' />
          </View>
        </View>
      </View>
    </View>
  )
}

export default AddToCardComponent

const styles = StyleSheet.create({
  container: {
    borderColor: "#000000",
    height: 263,
  },
  cardView: {
    width: 300,
    margin: 10,
    alignItems: 'center',
  },
  cardInputViewItem: {
    width: 300,
    height: 50,
    margin: 5,
  },
  cardInputText: {
    backgroundColor:FOURTH_COLOR,
    width: 300,
    height: 50,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    padding: 10,
  },
  methodThirdGroup: {
    width: 144,
    height: 70,
    margin: 5,
  },
  button3: {
    width: 144,
    height: 50,
    borderRadius: 5,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    backgroundColor: SECONDARY_COLOR,
    padding: 10,    
    backgroundColor:FOURTH_COLOR,

  },
  methodThirdGroupRow: {
    height: 50,
    flexDirection: "row",
  },
});