import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

export default function HabitCategory({ title, image, onTap }) {
  return (
    <View style={styles.habitCategory}>
      <Pressable style={styles.container} onPress={() => onTap(title)}>
        <Text style={styles.image}>{image}</Text>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  habitCategory: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fcf8f5",
    borderRadius: 10,
    marginBottom: 15,
    height: 100,
    width: "47%",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  image: {
    marginBottom: 5,
    fontSize: 30,
  },
});
