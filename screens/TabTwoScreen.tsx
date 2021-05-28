import * as React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import PatientInfo from '../components/PatientInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Patients Information</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <PatientInfo path="/screens/TabTwoScreen.tsx" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
