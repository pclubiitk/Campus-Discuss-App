import React from 'react';
import { View, FlatList } from 'react-native';
import Post from 'components/Post';

// Sample data for checking layout of component created
const posts = [
  /**{
    pk: '1',
    IUserData: {
      pk: '1',
      username: 'user1',
      name: 'username1',
      image: 'https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg'
    },
    pub_date: '2021-05-27T12:00:00.000Z',
    post_text: 'Hi guys, really glad this project is back on. It has awesome potential to be one of the goto apps for the campus junta. ',
  }, 
  
  {
    pk: '2',
    IUserData: {
      pk: '1',
      username: 'user2',
      name: 'username2',
      image: 'https://image.shutterstock.com/image-vector/thin-line-user-icon-on-260nw-519039097.jpg'
    },
    pub_date: '2021-03-22T12:00:00.000Z',
    post_text: 'Hi guys! I am Username2.',
    image: 'https://cdn57.andropkauthority.net/wp-content/uploads/2015/11/00-best-backgrounds-and-wallpaper-apps-for-andropk.jpg',
  }*/
];

const Feed = () => (
  <View style={{ width: '100%' , flex: 1 }}>
    <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={(item) => item.pk}
    />
  </View>
)

export default Feed;
