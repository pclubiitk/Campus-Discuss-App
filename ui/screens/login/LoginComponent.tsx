import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Keyboard,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import axios from 'axios';

const LoginComponent = () => {
  const [secureState, setSecureState] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [keyboardVisibility, setKeyboardVisibility] = useState(false);

  const handleSecureText = () => {
    const updated_state = !secureState;
    setSecureState(updated_state);
  };

  useEffect(() => {
    // Anything in here is fired on component mount.
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setKeyboardVisibility(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setKeyboardVisibility(false);
      }
    );
    return () => {
      // Anything in here is fired on component unmount.
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const handleUsername = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setUsername(value);
  };

  const handlePassword = (
    e: NativeSyntheticEvent<TextInputChangeEventData>
  ): void => {
    const value = e.nativeEvent.text;
    setPassword(value);
  };
  
  
  async function login(){
    let data = { username, password };
    let apiOptions = {
      url : "http://localhost:8080/users/auth/login/",
      method: "POST",
      Headers: {
        "Content-Type":"application/json",
        "Accept":"application/json"
      },
      body: data
    };
    let output = await axios.post(apiOptions);
    output = await output.json();
    localStorage.setItem("user-info",JSON.stringify(output));
    


  }
  return (
    <View style={styles.container}>
      {!keyboardVisibility && (
        <View style={styles.header}>
          <Image
            source={require("./asset/asset5.jpg")}
            style={styles.image}
            resizeMode={"cover"}
          />
        </View>
      )}
      <Text style={styles.title}>Campus Discuss IITK</Text>
      <Text style={styles.subtitle}>Create.Share.Discuss</Text>
      <View>
        <View style={styles.section}>
          <MaterialIcons name="email" size={20} />
          <TextInput
            placeholder="IITK Email"
            style={styles.inpText}
            onChange={handleUsername}
          />
        </View>
        <View style={styles.section}>
          <MaterialIcons name="lock-outline" size={20} />
          <TextInput
            placeholder="Password"
            style={styles.inpText}
            secureTextEntry={secureState}
            onChange={handlePassword}
          />
          {password !== "" ? (
            <MaterialIcons
              name="remove-red-eye"
              size={20}
              onPress={handleSecureText}
            />
          ) : null}
        </View>
      </View>
      <TouchableOpacity >
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.login} onPress={login}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginComponent;

const { width, height } = Dimensions.get("screen");
const inp_width = width * 0.7;
const height_img = height * 0.5 * 0.6;
const width_img = height_img * 1.1;

const styles = StyleSheet.create({
  header: {
    flex: 1,
  },
  image: {
    height: height_img,
    width: width,
    opacity: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  title: {
    color: "#3465d9",
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    color: "gray",
  },
  section: {
    width: inp_width,
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: "center",
    marginTop: 10,
  },
  inpText: {
    flex: 1,
    paddingLeft: 10,
  },
  forgot: {
    textAlign: "right",
    marginTop: 15,
    color: "#3465d9",
  },
  loginText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  login: {
    width: "100%",
    height: 40,
    backgroundColor: "#3465d9",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    borderRadius: 50,
  },
});
