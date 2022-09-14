import React from 'react'
import { Pressable, Text, StyleSheet } from 'react-native';

export default function Button({onTap, title }) {
  return (
    <Pressable
      onPress={onTap}
      style={styles.btn}
      android_ripple={{ color: "#2d2c2c" }}
    >
      <Text style={styles.textStyles}>{title}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#222222",
    borderRadius: 5,
    height: 40,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  textStyles: {
    color: "white",
    fontSize: 16,
    textTransform:"uppercase",
  },
});