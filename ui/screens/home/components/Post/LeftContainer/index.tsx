import React from 'react';
import { View } from 'react-native';
import ProfilePicture from '../../ProfilePicture';

export type LeftContainerProps = {
  user: IUserData,
}

const LeftContainer = ({ user }: LeftContainerProps) => (
  <View>
     <ProfilePicture image={user.image} size={75} />
  </View>
)

export default LeftContainer;
