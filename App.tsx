import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {Drawernavigator} from "./components/drawernavigator"
export default function App() {
  return (
    <View style={styles.container}>
       <Drawernavigator></Drawernavigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
