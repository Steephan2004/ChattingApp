import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const navigation = useNavigation();
  const handleChatPress = () => {
    navigation.navigate("Chat");
  };

  return (
    <ImageBackground
      source={require("../assets/chat.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <View style={styles.container1}>
          <Text style={styles.title}>Let's Chat...</Text>
          <TouchableOpacity style={styles.chatButton} onPress={handleChatPress}>
            <Text style={styles.chatButtonText}>Chat</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
  },
  container1: {
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 80,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  chatButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    width: 200,
    borderRadius: 30,
  },
  chatButtonText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});
