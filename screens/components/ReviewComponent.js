import { FlatList, StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import users_reviews from "../../src/users_reviews"
import PaymentScreen from '../PaymentScreen';
import VideoComponent from './VideoComponent';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY_COLOR, FOURTH_COLOR } from '../../colors/colors';

const ReviewComponent = ({ route, navigation, setOverview, setLessons, setReviews }) => {
  const courseName = route.params.item.courseName;
  const courseReviews = users_reviews[courseName];
  const OverviewData = route.params.item.Overview.CourseDetails;

  // console.log("reviewRotue:", OverviewData);

  const handleOnPress = (item) => {
    console.log("handledata: ", item);
    navigation.navigate("PaymentScreen", { item: OverviewData })
  }
  return (
    <View style={{ alignContent: 'center', marginTop: 28 }}>
      <View style={{ flexDirection: 'column', marginBottom: 110, justifyContent: 'center', alignItems: 'center' }}>
        <VideoComponent setOverview={setOverview} setLessons={setLessons} setReviews={setReviews} />
        <ScrollView>
          {
            courseReviews.map((review, index) => (
              <>
                <View keyExtractor={index} style={{ flexDirection: 'column',backgroundColor:FOURTH_COLOR, margin: 5, padding: 10, borderRadius: 10,   width: 300, justifyContent: 'center', alignContent: 'center', }}>
                  <View style={{ flexDirection: 'row', }}>
                    <View style={{ justifyContent: 'center' }}>
                      <MaterialCommunityIcons name="face-man-profile" size={40} />
                    </View>
                    <View style={{ width: 100, flex: 2, }} >
                      <View><Text style={{ fontSize: 15, fontWeight: 'bold' }}>{review.user.name}</Text></View>
                      <View><Text style={{ fontSize: 12, }}>{review.user.designation}</Text></View>
                    </View>
                    <View style={{ flex: 1,justifyContent:"center" }}>
                      <Text style={{ fontSize: 18,textAlign:'center',fontWeight:'600',color:PRIMARY_COLOR }}>
                        {Array(review.user.review_star).fill("*").join('')}
                      </Text>
                    </View>
                  </View>
                  <View style={{ padding: 10 }}>
                    <Text>{review.user.feedback}</Text>
                  </View>
                </View>
              </>
            ))
          }
        </ScrollView>

      </View >
    </View>
  )
}

export default ReviewComponent

const styles = StyleSheet.create({

})