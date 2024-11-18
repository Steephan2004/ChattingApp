import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login Success"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
    else{
      Alert.alert("Enter username and password");
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{color:'#FFF',textAlign:'center',fontSize:40,fontWeight:700}}>LOGIN</Text>
      <View style={styles.container1}>
        <Text style={[styles.label,{fontWeight:600}]}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={[styles.label,{fontWeight:600}]}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity onPress={onHandleLogin}>
          <Text
            style={{
              width: "100%",
              textAlign: "center",
              padding: 10,
              backgroundColor: "#588BAE",
              color: "#fff",
              fontSize: 20,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.signupText}>
            Don't have an account?{" "}
            <Text style={{ color: "#588BAE" }}>Sign up</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    
    backgroundColor: "#588BAE",
  },
  container1:{
    height:470,
    backgroundColor:'#fff',
    padding:25,
    justifyContent:'center',
    borderTopLeftRadius:70,
    borderTopRightRadius:70,
  },
  label: {
    marginBottom: 8,
    fontSize: 20,
    color:'#588BAE',
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  signupText: {
    marginTop: 16,
    fontSize: 16,
    textAlign: "center",
  },
});
