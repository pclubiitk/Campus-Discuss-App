import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-elements";
import comments from "./ui/Comments/CommentExample";
import CommentBox from "./ui/Comments";

export default function App() {
  const [commentsVisible, setCommentsVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button
        onPress={() => {
          setCommentsVisible(true);
        }}
        title="Open Comments"
      />
      {commentsVisible ? (
        <CommentBox
          comments={comments}
          isVisible={true}
          onBack={() => {
            setCommentsVisible(false);
          }}
        />
      ) : (
        <></>
      )}
      <StatusBar style="auto" />
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
