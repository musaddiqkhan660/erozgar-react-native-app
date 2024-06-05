import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import courses from '../../src/courses'
import { SECONDARY_COLOR, PRIMARY_COLOR, FOURTH_COLOR, THIRD_COLOR } from '../../colors/colors'
import VideoComponent from './VideoComponent'
import EnrollButton from './EnrollButton'
import CustomButton from './CustomButton'
const LessonsComponent = ({ route, navigation, setOverview, setLessons, setReviews }) => {

  const courseName = route.params.item.courseName;
  const chapterQuestions = courses[courseName].chapters.flatMap((chapter) => chapter.questions);
  const [selectedQuestioin, setSelectedQuestioin] = useState(null)
  return (
    <View style={styles.mainContainer}>
      <VideoComponent setOverview={setOverview} setLessons={setLessons} setReviews={setReviews} />
      <View style={styles.lessonContainer}>
        <View style={styles.flatContainer}>
          <FlatList data={chapterQuestions} renderItem={({ item }) => (
            <View style={styles.questionItem}>
              <TouchableOpacity onPress={() => setSelectedQuestioin(item)}>
                <Text style={styles.questionText}>{item.question}</Text>
              </TouchableOpacity>
              {
                selectedQuestioin === item && (<View style={styles.questionAnswerShow}><Text style={{ color: PRIMARY_COLOR }}>{item.answer}</Text></View>)
              }
            </View>
          )} />
        </View>
      </View>
    </View>
  )
}

export default LessonsComponent

const styles = StyleSheet.create({
  mainContainer: { flex: 1, flexDirection: 'column', marginTop: 28 },
  lessonContainer: { justifyContent: 'center', alignItems: 'center', margin: 20, padding: 5, marginTop: -8 },
  flatContainer: { padding: 5, marginBottom: 190 },
  questionItem: { padding: 4, backgroundColor: FOURTH_COLOR, margin: 3, borderRadius: 5, },
  questionText: { color: PRIMARY_COLOR, fontSize: 15 },
  questionAnswerShow: { padding: 10, backgroundColor: SECONDARY_COLOR, borderRadius: 5, }

})