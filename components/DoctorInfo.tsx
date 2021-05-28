import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

const doctors = [
  {
    id: 1,
    name: 'Doctor 1',
    avatar: 'https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop',
    bio: "Hello this is the bio of example 1 and we need to review how to change it"
  },
  
  {
    id: 2,
    name: 'Doctor 2',
    avatar: 'https://post.healthline.com/wp-content/uploads/2019/01/Male_Doctor_732x549-thumbnail.jpg',
    bio: "Hello this is the bio of example 1 and we need to review how to change it"
  },
  {
    id: 3,
    name: 'Doctor 3',
    avatar: 'https://s3-eu-west-1.amazonaws.com/intercare-web-public/wysiwyg-uploads%2F1569586526901-doctor.jpg',
    bio: "Hello this is the bio of example 1 and we need to review how to change it"
  },
  {
    id: 4,
    name: 'Doctor 4',
    avatar: 'https://i.guim.co.uk/img/media/ce9c149506881191caa4b1f838575d0dbb07e520/734_381_6827_4098/master/6827.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c38e5e77b9f3882e14b633932e18cea5',
    bio: "Hello this is the bio of example 1 and we need to review how to change it"
  },

]

export default function DoctorInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        {doctors.map(d => (
          <Card containerStyle={{padding: 0, width: '100%'}}>
            <Card.Title>{d.name}</Card.Title>
            <Card.Image source={{ uri: d.avatar }} resizeMode="cover">
            </Card.Image>
            <Text>
              {d.bio}
            </Text>
          </Card>
        ))}
      </View>

      <View style={styles.helpContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
            Tap here if your app doesn't automatically update after making changes
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/get-started/create-a-new-app/#opening-the-app-on-your-phonetablet'
  );
}

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
