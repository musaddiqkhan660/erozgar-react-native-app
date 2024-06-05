import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../colors/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PaymentScreen = ({ route, item }) => {
    const OverviewData = route.params.item;
    const [index, setIndex] = useState([]);
    const handleOnPress = () => {
    }
    return (
        <View style={{ flex: 1, width: 360, }}>
            {/* Payment Three Cycles */}
            <View style={styles.paymentProcedureStyle}>
                <View style={styles.circleStyle}>
                    <View style={styles.circle}>
                        <Text style={styles.countNo}>1</Text>
                    </View>
                    <Text style={{ fontSize: 10 }}>Overview</Text>
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
            <View style={{ width: 150 }}>
                <Text style={{ marginLeft: 20, fontSize: 20 }}>Overview</Text>
            </View>
            <View style={{ flexDirection: 'row', padding: 10, marginLeft: 10, marginBottom: 8 }}>
                <Text style={{ fontSize: 18, fontWeight: '300' }}>Course Name: </Text>
                <Text style={{ fontSize: 18, }}>Graphic Design</Text>
            </View>
            <View style={{ width: 350 }}>
                <View style={styles.courseBasicResult}>
                    <FlatList
                        data={Object.values(OverviewData)}
                        renderItem={({ item, index }) => (
                            <View style={{ width: '50%' }}>
                                <Text style={{ justifyContent: 'center', alignSelf: 'center', margin: 4, width: 130 }}>
                                    <View style={{ justifyContent: 'center', }}>
                                        <MaterialCommunityIcons
                                            name={index === 0 ? 'book-open-page-variant' : index === 1 ? 'certificate' : index === 2 ? 'clock-alert-outline' : 'sale'}
                                            size={25}
                                            color="#666"
                                        />
                                    </View>
                                    <View style={{ width: 100 }}>
                                        <Text style={{ textAlign: 'center' }}> {item}</Text>
                                    </View>
                                </Text>
                            </View>
                        )}
                        keyExtractor={item => Math.random().toString() + item}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        onViewableItemsChanged={({ viewableItems }) => {
                            // setIndex(viewableItems[0].index);
                            const indices = viewableItems.map((item) => item.index);
                            setIndex(indices);
                        }}

                    />
                </View>
                <View style={{ margin: 10 }}>
                    <View style={styles.textStyleView}>
                        <View style={{ width: 150 }}><Text style={styles.textStylePro}>Course Rating:  </Text></View>
                        <View ><Text style={styles.textStyleValue}>*****</Text></View>
                    </View>
                    <View style={styles.textStyleView}>
                        <View style={{ width: 150 }} ><Text style={styles.textStylePro}>Course Time:  </Text></View>
                        <View ><Text style={styles.textStyleValue}>8 weeks</Text></View>
                    </View>
                    <View style={styles.textStyleView}>
                        <View style={{ width: 150 }}><Text style={styles.textStylePro}>Course Trainer:  </Text></View>
                        <View><Text style={styles.textStyleValue}>Syed Hasnain</Text></View>
                    </View>
                </View>
                <View style={styles.purchaseContainer}>
                    <View style={styles.purchaseTextTitle}><Text>Purchase Details</Text></View>
                    <View >
                        <View style={styles.itemRow}>
                            <View style={styles.itemSingleColumnOfRow}>
                                <View><Text>Date: </Text></View>
                                <View><Text>19/03/2024</Text></View>
                            </View>
                            <View style={styles.itemSingleColumnOfRow}>
                                <View><Text>Price: </Text></View>
                                <View><Text>72$</Text></View>
                            </View>
                        </View>
                        <View style={styles.itemRow}>
                            <View style={styles.itemSingleColumnOfRow}>
                                <View><Text>Coupon: </Text></View>
                                <View><Text>10% OFF</Text></View>
                            </View>
                            <View style={styles.itemSingleColumnOfRow}>
                                <View><Text>Final Price: </Text></View>
                                <View><Text>65$</Text></View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <View style={styles.enrollContainer}>
                    <TouchableOpacity style={styles.enrollStyle} onPress={handleOnPress}>
                        <Text style={{ color: SECONDARY_COLOR, fontSize: 16, fontWeight: 600 }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default PaymentScreen

const styles = StyleSheet.create({
    paymentProcedureStyle: { flexDirection: 'row', backgroundColor: THIRD_COLOR, margin: 15, borderRadius: 20, justifyContent: 'center', alignItems: 'center', },
    circle: { backgroundColor: 'gray', width: 40, height: 40, borderRadius: 50, },
    circleStyle: {
        margin: 3, padding: 5, justifyContent: 'center', alignItems: 'center'
    },
    countNo: { marginLeft: 15, marginTop: 10, fontSize: 14 },
    divider: {
        height: 1,
        backgroundColor: '#000',
        width: 30
    },
    courseBasicResult: {
        backgroundColor: THIRD_COLOR,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 5,
        padding: 10,
    },
    textStylePro: { fontSize: 19, fontWeight: '300' },
    textStyleValue: { fontSize: 18, fontWeight: "500" },
    textStyleView: { flexDirection: 'row', justifyContent: 'flex-start', margin: 6 },
    purchaseContainer: { borderRadius: 20, borderWidth: 1, borderBlockColor: 'black', margin: 10, padding: 10 },
    purchaseTextTitle: { width: 110, backgroundColor: "#fff", marginLeft: 15, marginTop: -20 },
    itemRow: { flexDirection: 'row', margin: 10, },
    itemSingleColumnOfRow: { flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 1 },
    enrollContainer: { borderRadius: 10, backgroundColor: PRIMARY_COLOR, height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: PRIMARY_COLOR, margin: 15 },
    enrollStyle: { padding: 15, borderRadius: 10, },


})