import { Alert, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import SearchField from './components/SearchField'
import coursesData from '../src/data';
import { SECONDARY_COLOR } from '../colors/colors';
import * as Location from "expo-location"
import { getFirestore, getDocs, collection, doc } from 'firebase/firestore';


const HomeScreen = ({ navigation }) => {
    const db = getFirestore()
    const coursesCollection = collection(db, 'courses')
    const [courses, setCourses] = useState([])
    const [city, setCity] = useState('');
    const [location, setLocation] = useState(null);

    // Showing Current Location
    useEffect(() => {
        const getLocationAsync = async () => {
            try {
                const { status } = await Location.requestForegroundPermissionsAsync();
                if (status !== 'granted') {
                    Alert.alert("Location: ", "Please enbabled your's location.")
                }
                const location = await Location.getCurrentPositionAsync();
                setLocation(location);
                const { latitude, longitude } = location.coords;

                const city = await Location.reverseGeocodeAsync({ latitude, longitude })
                setCity(city[0].city);

            } catch (error) {
                if (error.code === Location.PERMISSION_DENIED) {
                    Alert.alert("Error", "Location permission denied. Please enable location services.");
                } else if (error.code === Location.POSITION_UNAVAILABLE) {
                    Alert.alert("Error", "Unable to get your location. Please try again.");
                } else {
                    console.error(error);
                    Alert.alert("Error", "An unexpected error occurred. Please try again.");
                }
            }
        };
        getLocationAsync()

    }, [])

    useEffect(() => {
        const fetchCourses = async () => {
            const querySnapshot = await getDocs(coursesCollection)
            const coursesData = querySnapshot.docs.map(doc => doc.data())
            setCourses(coursesData)
        }
        fetchCourses()
    }, [])

    return (
        // Main Container
        <View style={styles.container}>
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View><Text>Current Location: {city}</Text></View>
                {/* Search Input Component */}
                <SearchField placeholder={'Search here'} />
                {/* Continue watching and see all view */}
                <View style={styles.continueSeeAll}>
                    <View style={styles.continueWatchView}>
                        <Text style={styles.contiWatchText}>Contitnue Watching</Text>
                    </View>
                    <View style={styles.seeAllText}>
                        <Text>See All</Text>
                    </View>
                </View>
                {/* Courses List Container */}
                <View style={styles.coursesContainerList}>
                    <FlatList
                        data={courses}
                        renderItem={({ item }) => (
                            <CourseBoxContainer item={item} props={navigation} />
                        )}
                        keyExtractor={item => item.id.toString()}
                        numColumns={2}
                    />
                </View>
            </View>
        </View>
    )
}
const CourseBoxContainer = ({ item, props }) => {
    return (
        <View style={styles.flatlistBox}>
            <Pressable onPress={() => props.navigate('OverviewScreen', { item })}>
                <View style={styles.course_image_1} >
                    <Image source={{ uri: item.fileName }} style={styles.course_image_style} />
                </View>
            </Pressable>
            <View style={styles.course_group_name_review_1}>
                <View style={styles.course_name_1Row}>
                    <View style={styles.course_name_1}>
                        <Text style={styles.course_name_1}>{item.courseName}</Text>
                    </View>
                    <View style={styles.course_review_1}>
                        <Text>{item.courseReview}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center',
    },
    course_image_1: {
        width: 140,
        height: 150,
        borderRadius: 10,

    },
    continueSeeAll: {
        flexDirection: 'row', padding: 10, width: 340,
    },
    continueWatchView: {
        flex: 2, marginLeft: 15, alignItems: 'flex-start'
    },
    contiWatchText: {
        fontWeight: 'bold', fontSize: 15
    },
    seeAllText: {
        marginRight: 15, flex: 1, alignItems: 'flex-end'
    },
    coursesContainerList: {
        width: 320,
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 80
    },
    course_group_name_review_1: {
        width: 150,
        height: 16,
        marginTop: 10,
    },
    course_name_1: {
        width: 100,
        height: 18,
        color: 'black',
        fontSize: 12
    },

    course_name_1Row: {
        height: 16,
        flexDirection: "row",

        justifyContent: 'center',
        alignItems: 'center',
    },

    course_review_1: {
        color: "#121212",
        fontSize: 13,
    },
    flatlistBox: {
        justifyContent: 'center', alignItems: 'center', width: 150,
        margin: 5,
    },
    course_image_style: {
        width: 140,
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    }
})