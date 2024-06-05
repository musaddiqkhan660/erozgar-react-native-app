import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'


const VideoComponent = ({ setOverview, setLessons, setReviews }) => {


    const handlePress = (state) => {
        setOverview(false);
        setLessons(false);
        setReviews(false);
        // setState(state, true);
        switch (state) {
            case 'overview':
                setOverview(true);
                break;
            case 'lessons':
                setLessons(true);
                break;
            case 'reviews':
                setReviews(true);
                break;
        }
    };

  
    const MenuItem = ({ title, onPress, style }) => (
        <TouchableOpacity onPress={onPress} style={style}>
            <Text>{title}</Text>
        </TouchableOpacity>
    );
    return (
        <View style={styles.main_container}>
            <View style={styles.video_container}>
            <View style={styles.course_video}>
                <Text>video goes to here</Text>
            </View>
            <View style={styles.menuContainer}>
                <View style={styles.menuButtonRow}>
                    <TouchableOpacity style={styles.menuItemButton}>
                        <MenuItem title="Overview" onPress={() => handlePress('overview')} style={styles.menubuttonText} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItemButton}>
                        <MenuItem title="Lessons" onPress={() => handlePress('lessons')} style={styles.menubuttonText} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.menuItemButton}>
                        <MenuItem title="Reviews" onPress={() => handlePress('reviews')} style={styles.menubuttonText} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.divider} />
        </View>
        </View>
    )
}

export default VideoComponent

const styles = StyleSheet.create({
    main_container: { justifyContent: 'center', alignItems: 'center', },

    video_container: {
        justifyContent: 'center', alignItems: 'center',
    },
    course_video: {
        width: 360, height: 173, justifyContent: 'center', alignItems: 'center'
    },
    divider: { borderBottomWidth: 1, width: 360 },

    overview_menus: {
        width: 360, flexDirection: 'row', justifyContent: 'center', 
    },
    
    menuContainer: {
        width: 330,
        height: 38,
        flexDirection: "row",
    },
    menuButtonRow: {
        height: 38,
        flexDirection: "row",
        flex: 1,
        justifyContent: 'center',
    },
    menuItemButton: {
        width: 89,
        height: 38,
        margin: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    menubuttonText: {
        color: "#121212",
        fontSize: 17,
        lineHeight: 16,
        fontWeight: '600'
    },
})