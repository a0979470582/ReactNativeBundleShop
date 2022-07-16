import React from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import { Color } from './Color';

export function App() {
  const initBusiness1 = () => {
    console.log('press button init initBusiness1....');
  }

  const initBusiness2 = () => {
    console.log('press button init initBusiness2....');
  }

  return <SafeAreaView style={styles.safeAreaView}>
    <StatusBar style={{ backgroundColor: Color.background }} barStyle={'light-content'} />
    <Text style={styles.titleText}>Bundle Shop</Text>
    <TouchableOpacity style={styles.button} onPress={initBusiness1}>
      <Text style={styles.buttonText}>Business1</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.button} onPress={initBusiness2}>
      <Text style={styles.buttonText}>Business2</Text>
    </TouchableOpacity>
  </SafeAreaView>
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: Color.whitePure,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 55,
  }, buttonText: {
    fontSize: 20,
  },
  button: {
    backgroundColor: Color.whitePure,
    borderWidth: 1,
    marginTop: 16,
    padding: 16,
  },
});
