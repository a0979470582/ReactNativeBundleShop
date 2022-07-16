import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Color } from '../Color';

export function Button({ title, onPress }): JSX.Element {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
  },
  button: {
    backgroundColor: Color.whitePure,
    borderWidth: 1,
    marginTop: 16,
    padding: 16,
  },
});
