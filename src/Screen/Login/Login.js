/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  Alert,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import { withSafeAreaInsets } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function Login(props) {
  const { width, height } = Dimensions.get("window");
  const onLogin = () => {
    if (username === "Update" && password === "berita") {
      props.navigation.navigate("Home");
    } else {
      Alert.alert("incorrect!");
    }
  };

  const moveToRegister = () => {
    props.navigation.navigate("Register");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [name, setName] = useState("Good Luck!");

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView style={LoginStyle.container}>
        <Image
          source={require("../../Assets/Images/catQueenWhite.jpg")}
          style={{ width: width, height: width }}
        />
        <Text style={{ fontWeight: "bold" }}>
          Fill your name and the password, {name}!
        </Text>

        <TextInput
          onChangeText={(text) => {
            setUsername(text);
          }}
          placeholder="Username"
          placeholderTextColor="#ccc"
          style={LoginStyle.TextInput}
        />

        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Password"
          placeholderTextColor="#ccc"
          style={LoginStyle.TextInput}
        />

        <Button onPress={onLogin} color={"brown"} title="Login" />

        <Text style={{ fontSize: 15, fontWeight: "bold", alignSelf: "center" }}>
          You haven't reported your identity!!
        </Text>

        <Text style={{ fontSize: 15, fontWeight: "bold", alignSelf: "center" }}>
          Away with you!
        </Text>

        <Button onPress={moveToRegister} color={"brown"} title="Register" />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

const win = Dimensions.get("window");

const LoginStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: "white",
  },

  TextInput: {
    backgroundColor: "#eee",
    marginBottom: 10,
    color: "black",
  },
});
