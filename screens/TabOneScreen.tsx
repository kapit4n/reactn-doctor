import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import DoctorInfo from '../components/DoctorInfo';
import { Text, View } from '../components/Themed';

export default function TabOneScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Doctors Information</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <DoctorInfo path="/screens/TabOneScreen.tsx" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 5,
    height: 1,
    width: '80%',
  },
});
