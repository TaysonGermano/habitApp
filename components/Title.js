import React from 'react'
import { Text, StyleSheet } from 'react-native'

export default function Title({ text }) {
  return <Text style={styles.appTitle}>{text}</Text>;
}


const styles = StyleSheet.create({
  appTitle: {
    fontSize: 30,
    fontFamily:"Popping-Bold",
    marginBottom: 5,
  },
});

