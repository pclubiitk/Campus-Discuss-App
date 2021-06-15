import React from 'react';
import { TouchableOpacity , StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import Colors from '../../constants/Colors';

const NewPostButton = () => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('NewPost');
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <Ionicons name={"ios-add"} size={30} color="white" />
    </TouchableOpacity>
  )
}

export default NewPostButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.light.tint,
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
