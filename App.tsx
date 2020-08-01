import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import FullPost from "./ui/FullPost";

const authorExample: IUserData = {
  pk: 1,
  name: "Campuss-Discuss-Botssssssssssssssssssssssssssssssssssssss",
  roll: 0,
  username: "Campuss-Discuss-Bot",
  email: "campuss_discuss@iitk.ac.in",
  fblink: "",
  following: 1000,
};

const postExample: IPost = {
  pk: 1,
  post_text:
    "Following steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profileFollowing steps will help in becoming familiar with app.\n1.) click on Open Comments to view comments or add comments\n2.) Click on authors name to see his profile",
  post_title: "Welcome to Campuss Discuss.",
  pub_date: "2020-05-05T23:37:49.992636+05:30",
  last_modified: "2020-05-05T23:37:49.992636+05:30",
  author: authorExample,
  stream: 1,
};

export default function App() {
  return (
    <>
      {/*<View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
  </View>*/}
      <View style={{ marginTop: 50 }}>
        <FullPost
          post={postExample}
          onOpenComments={() => {
            alert("opening comments");
          }}
        />
      </View>
      <FullPost
        post={postExample}
        onOpenComments={() => {
          alert("opening comments");
        }}
      />
      <FullPost
        post={postExample}
        onOpenComments={() => {
          alert("opening comments");
        }}
      />
    </>
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
