import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, Platform } from "react-native";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const Home = () => {
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    // console.log("Registering for push notification");
    registerForPushNotificationsAsync()
      .then((token) => {
        console.log(token);
        setExpoPushToken(token);
      })
      .catch((err) => console.log(err));
  }, []);
  
// Registering for push notifications 
  async function registerForPushNotificationsAsync() {
    let token;

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    if (Device.isDevice) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        Alert.alert("Failed to get push token for push notification!");
        return;
      }
      // Obtaining the token
      token = await Notifications.getExpoPushTokenAsync({
        // projectId: Constants.expoConfig.extra.eas.projectId,
        projectId: "f1ba7bd0-57aa-4ea8-932f-ec7a103a3ca7",
      });
      console.log(token);
    } else {
      Alert.alert("Must use physical device for Push Notifications");
    }
    // You can return the token here if you need to use it in the part of your app
    return token.data;
  }

  const sendNotification = async () => {
    console.log("Sending push notification");

    const message = {
      to: expoPushToken,
      sound: "default",
      title: "My first push Notification",
      body: "This is my first push notification using Expo Notification API",
    };

    try {
        const response = await fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
                "accept": "application/json",
                "accept-encoding": "gzip, deflate",
                "content-type": "application/json",
            },
            body: JSON.stringify(message),
        });

        const data = await response.json(); // Assuming the API returns JSON data

        // Log the response from the server for debugging purposes
        console.log("Push notification sent successfully:", data);

        // Optionally, you can check the response status 
        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}: ${JSON.stringify(data)}`);
        }
    } catch (error) {
        console.error("Error sending push notification:", error);
        // Optionally, display an alert or execute other error handling logic
        Alert.alert("An error occurred while sending the push notification.");
    }
};

  return (
    <View style={styles.container}>
      <Text style={{}}>Expo push notification</Text>
      <Button title="Send push notification" onPress={sendNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    alignItems: "center" 
  },
  text: {
    marginVertical: 30 
  }
});
export default Home;