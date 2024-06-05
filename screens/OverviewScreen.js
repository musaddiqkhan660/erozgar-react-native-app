import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import OverviewComponent from './components/OverviewComponent';
import LessonsComponent from './components/LessonsComponent';
import ReviewComponent from './components/ReviewComponent';
import { PRIMARY_COLOR, SECONDARY_COLOR, THIRD_COLOR } from '../colors/colors';
import CustomButton from './components/CustomButton';

const OverviewScreen = ({ route, navigation }) => {

    const [overview, setOverview] = useState(true);
    const [lessons, setLessons] = useState(false);
    const [reviews, setReviews] = useState(false);

    return (
        <View style={styles.main_container}>

            <View >
                {overview ? (
                    <OverviewComponent route={route} navigation={navigation} setOverview={setOverview} setLessons={setLessons} setReviews={setReviews} />
                ) : lessons ? (
                    <LessonsComponent route={route} navigation={navigation} setOverview={setOverview} setLessons={setLessons} setReviews={setReviews} />
                ) : (
                    <ReviewComponent route={route} navigation={navigation} setOverview={setOverview} setLessons={setLessons} setReviews={setReviews} />
                )}
            </View>
            <CustomButton onPress={() => navigation.navigate('PaymentMethod')} title={'Continue'} />
        </View >
    )
}

export default OverviewScreen

const styles = StyleSheet.create({
    main_container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: SECONDARY_COLOR },

})