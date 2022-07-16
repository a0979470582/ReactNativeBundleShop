import React from 'react';
import { SafeAreaView, Text, StyleSheet, StatusBar } from 'react-native';
import { Color } from './src/Color';
import { Button } from './src/component/Button';


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
    <Button title="Business1" onPress={initBusiness1} />
    <Button title="Business2" onPress={initBusiness2} />
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
  },
});
