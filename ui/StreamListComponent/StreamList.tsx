import React, { Component, useRef } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  Alert,
  TextInput,
  StatusBar,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { Button, Card } from 'react-native-elements';
import BackButtonNew from './backButtonNew';

const list = [
  {
    pk: 2,
    title: 'Craze of Club House',
    description:
      'Recently People are shifting to clubhouseRecently People are shifting to clubhouse Recently People are shifting to clubhouse Recently People are shifting to clubhouse Recently People are shifting to clubhouse',
    followed_by: 400,

  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description:
      'Recently People are shifting to clubhouseRecently People are shifting to clubhouse Recently People are shifting to clubhouse Recently People are shifting to clubhouse Recently People are shifting to clubhouse',
    followed_by: 400,

  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description:
      'Recently People are shifting to clubhouseRecently People are shifting to clubhouse Recently People are shifting to clubhouse Recently People are shifting to clubhouse Recently People are shifting to clubhouse',
    followed_by: 400,

  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description:
      'Recently People are shifting to clubhousRecently People are shifting to clubhouse Recently People are shifting to clubhouse Recently People are shifting to clubhouse Recently People are shifting to clubhousee',
    followed_by: 400,

  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description: 'Recently People are shifting to clubhouse',
    followed_by: 400,
  },
  {
    pk: 2,
    title: 'Craze of Club House',
    description: 'Recently People are shifting to clubhouse',
    followed_by: 400,
  },
];
type StreamProps = {
  comment: IStream,
  onPress: () => void,
};

const StreamList = (props: StreamProps) => {
  let inpRef: React.MutableRefObject<TextInput | undefined> = useRef();

  const statusheight = StatusBar.currentHeight;
  return (
    <View style={{ marginTop: statusheight }}>
      <BackButtonNew onBack={this.void} />
      <View style={{ height: '95%' }}>
        <ScrollView>
          {list.map((item, i) => (
            <View key={i}>
              <Card>
                <Card.Title style={{ width: '95%', fontSize: 16 }}>
                  {item.title} {'\u25CF'} {item.followed_by} Followers
                </Card.Title>
                <Card.Divider />
                {/* <Card.Image source = {item.image_src}> 
                    cant add  */}
                <Text style={{ marginBottom: 10 }}>{item.description}</Text>
                <Button
                  onPress={this.void}
                  icon={
                    <FontAwesomeIcon icon={faBell} size={20} color="white" />
                  }
                  buttonStyle={{
                    borderRadius: 0,
                    marginLeft: 0,
                    marginRight: 0,
                    marginBottom: 0,
                  }}
                  title="  Subscribe"
                />
                {/* </Card.Image> */}
              </Card>
            </View>
          ))}
        </ScrollView>

      </View>
    </View>
  );
};

export default StreamList;
