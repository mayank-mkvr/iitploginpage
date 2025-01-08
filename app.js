// This is the code of app.js for react native made by me.


import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity, useColorScheme } from "react-native";

export default function App() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const scheme = useColorScheme();

  const handleAuthAction = () => {
    if (email && password) {
      alert(isSignUp ? "Account Created" : "Signed In");
    } else {
      alert("Please fill all fields");
    }
  };

  return (
    <View style={[styles.container, scheme === "dark" ? styles.dark : styles.light]}>
      <Text style={[styles.logoText, scheme === "dark" ? styles.textDark : styles.textLight]}>
        Technology Club - IIT Patna
      </Text>
      <Text style={[styles.title, scheme === "dark" ? styles.textDark : styles.textLight]}>
        {isSignUp ? "Sign Up" : "Sign In"}
      </Text>
      <TextInput
        style={[styles.input, scheme === "dark" ? styles.inputDark : styles.inputLight]}
        placeholder="Email"
        placeholderTextColor={scheme === "dark" ? "#FFFFFF" : "#000000"}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={[styles.input, scheme === "dark" ? styles.inputDark : styles.inputLight]}
        placeholder="Password"
        placeholderTextColor={scheme === "dark" ? "#FFFFFF" : "#000000"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity
        style={[styles.button, scheme === "dark" ? styles.buttonDark : styles.buttonLight]}
        onPress={handleAuthAction}
      >
        <Text style={styles.buttonText}>{isSignUp ? "Sign Up" : "Sign In"}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setIsSignUp(!isSignUp)}>
        <Text style={[styles.switchText, scheme === "dark" ? styles.textDark : styles.textLight]}>
          {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logoText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: "100%",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  switchText: {
    fontSize: 14,
    textDecorationLine: "underline",
  },
  light: {
    backgroundColor: "#FFFFFF",
  },
  dark: {
    backgroundColor: "#000000",
  },
  textLight: {
    color: "#000000",
  },
  textDark: {
    color: "#FFFFFF",
  },
  inputLight: {
    backgroundColor: "#FFFFFF",
    borderColor: "#006BCE",
  },
  inputDark: {
    backgroundColor: "#000000",
    borderColor: "#B89E4D",
    color: "#FFFFFF",
  },
  buttonLight: {
    backgroundColor: "#006BCE",
  },
  buttonDark: {
    backgroundColor: "#B89E4D",
  },
});
