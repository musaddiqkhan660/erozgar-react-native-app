import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import VideoComponent from './VideoComponent';
import { THIRD_COLOR } from '../../colors/colors';
import CustomButton from './CustomButton';

const OverviewComponent = ({ route, navigation, setOverview, setLessons, setReviews }) => {
    const OverviewData = route.params.item.Overview.CourseDetails;
    const SkillsData = route.params.item.Skills;
    const [index, setIndex] = useState(0);

    return (
        <View style={{ flex: 1, width: 340, justifyContent: 'center', alignItems: 'center' }}>
            <VideoComponent setOverview={setOverview} setLessons={setLessons} setReviews={setReviews} />

            <View style={{ flexDirection: 'row', width: 340, marginTop: 10 }}>
                <View style={styles.courseNameSection}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{route.params.item.courseName}</Text>
                    <Text style={{ fontSize: 12 }}>By Syed Hasnain</Text>
                    <Text style={{ fontSize: 20 }}>{route.params.item.courseReview}</Text>
                </View>
                <View style={styles.coursePrice}>
                    <Text>{route.params.item.Overview.coursePrice}$</Text>
                    <Text>Use Coupon</Text>
                </View>
            </View>
            <View style={styles.courseDescriptonContainer}>
                <Text style={{ textAlign: 'justify' }}>
                    {route.params.item.Overview.courseDescription}
                </Text>
            </View>
            <View style={{ backgroundColor: THIRD_COLOR, borderRadius: 10, margin: 10, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.courseBasicResult}>
                    <FlatList
                        data={Object.values(OverviewData)}
                        renderItem={({ item }) => (
                            <View style={{ margin: 2, width: '40%', padding: 1, alignItems: 'flex-start' }}>
                                <Text style={{ textAlign: 'center', fontSize: 12 }}>
                                    {index === 0 && (<View style={{ padding: 4, }} >
                                        <MaterialCommunityIcons name="book-open-page-variant" size={20} color="#666" />
                                    </View>)}
                                    {index === 1 && <MaterialCommunityIcons name="certificate" size={20} color="#666" />}
                                    {index === 2 && <MaterialCommunityIcons name="clock-alert-outline" size={20} color="#666" />}
                                    {index === 3 && <MaterialCommunityIcons name="discount" size={20} color="#666" />}
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ textAlign: 'center', textAlignVertical: 'center', lineHeight: 30 }}>{item}</Text>
                                    </View>
                                </Text>
                            </View>
                        )}
                        keyExtractor={item => Math.random().toString()}
                        numColumns={2}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                        onViewableItemsChanged={({ viewableItems }) => {
                            setIndex(viewableItems[0].index);
                        }}
                    />
                </View>
            </View>
            <Text style={styles.skillsText}>Skills</Text>
            <View style={{ width: 340, justifyContent: 'center', alignItems: 'center', margin: 10, }}>
                <View style={styles.skillsContainer}>
                    <FlatList
                        data={SkillsData}
                        renderItem={({ item }) => (
                            <View style={styles.skillItem}>
                                <Text style={styles.skillItemName} >
                                    {item}
                                </Text>
                            </View>
                        )}
                        keyExtractor={item => Math.random().toString()}
                        numColumns={2}

                        columnWrapperStyle={{ justifyContent: 'space-between' }}
                    />
                </View>
            </View>
        </View>

    )
}

export default OverviewComponent

const styles = StyleSheet.create({
    courseNameSection: { flexDirection: 'column', flex: 2, marginLeft: 20, },
    coursePrice: { flexDirection: 'column', flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 20 },
    courseDescriptonContainer: { width: 340, height: 90, justifyContent: 'center', alignItems: 'center', },
    courseBasicResult: {

        borderRadius: 20,
        width: 300,
        padding: 2,
    },
    skillsText: { fontSize: 20, fontWeight: 'bold', marginLeft: 20, },
    skillsContainer: { borderRadius: 20, width: 300, },
    skillItem: { width: '50%', },
    skillItemName: { borderWidth: 1, textAlign: 'center', borderRadius: 20, padding: 3, margin: 3 },

})