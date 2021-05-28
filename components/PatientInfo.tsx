import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements'

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

const patients = [
  {
    id: 1,
    name: 'Patient 1',
    avatar: 'https://www.indiaspend.com/h-upload/old_images/1600x960_342636-long-term-impact-of-covid1440x563.jpg',
    bio: "Hello this is the bio of example 1 and we need to review how to change it"
  },
  
  {
    id: 2,
    name: 'Patient 2',
    avatar: 'https://www.crossroadshospice.com/media/2991/patient-dignity-at-end-of-life.jpg',
    bio: "Hello this is the bio of example 1 and we need to review how to change it"
  },
  {
    id: 3,
    name: 'Patient 3',
    avatar: 'https://www.esmo.org/var/esmo/storage/images/media/esmo/for-patients/esmo-patient-guides/images/_covid19/esmo-patient-guides-covid19-02/5636833-1-eng-GB/esmo-patient-guides-covid19-02_i1200.jpg',
    bio: "Hello this is the bio of example 1 and we need to review how to change it"
  },
  {
    id: 4,
    name: 'Patient 4',
    avatar: 'data:image/jpeg;base64,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',
    bio: "Hello this is the bio of example 1 and we need to review how to change it"
  },

]

export default function PatientInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.getStartedContainer}>
        {patients.map(d => (
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
