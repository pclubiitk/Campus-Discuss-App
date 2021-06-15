import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';

import { Text, View } from '../components/Themed';
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from "../components/ProfilePicture";

export default function NewPostScreen() {

  const [post, setPost] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const onPostPost = () => {
    console.log(`Posting the post: ${post}
    Image: ${imageUrl}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name="close" size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostPost}>
          <Text style={styles.buttonText}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newPostContainer}>
        <ProfilePicture image={'https://icons-for-free.com/iconfiles/png/512/Android-1320568265274623818.png'}/>
        <View style={styles.inputsContainer}>
          <TextInput
            value={post}
            onChangeText={(value) => setPost(value)}
            multiline={true}
            numberOfLines={3}
            style={styles.postInput}
            placeholder={"What's happening?"}
          />
          <TextInput
            value={imageUrl}
            onChangeText={(value) => setImageUrl(value)}
            style={styles.imageInput}
            placeholder={"Image url (optional)"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: 'white'
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  newPostContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  inputsContainer: {
    marginLeft: 10,
  },
  postInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
  },
  imageInput: {

  }
});
