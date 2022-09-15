import React, { useState } from "react";
import {
  TextInput,
  View,
  Modal,
  StyleSheet,
  Pressable,
  Text,
  ScrollView
} from "react-native";

//component
import categories from "../data/categories";

//component
import Button from "./Button";
import Title from "./Title";

export default function AddHabits({ componentStyles, show, onTap }) {
  const [habit, setHabit] = useState({
    name: "",
    category: "",
  });

  function handleChange(value, field) {
    setHabit((curr) => ({
      ...curr,
      [field]: value,
    }));
  }

  return (
    <Modal visible={show} animationType="slide">
      <View style={componentStyles}>
        <View style={{ marginBottom: 20 }}>
          <Title text="Add habit" />
          <TextInput
            onChangeText={(e) => handleChange(e, "name")}
            style={styles.textInput}
            placeholder="Habit name"
          />
          <Text style={{ marginBottom: 10, color: "#ccc" }}>
            Choose category
          </Text>
          <ScrollView style={{height:"29%"}}>
            {categories.map((d, i) => (
              <Pressable
                style={[styles.textInput, styles.categories]}
                onPress={() => handleChange(d.name, "category")}
              >
                <Text key={i}>{d.name}</Text>
              </Pressable>
            ))}
          </ScrollView>
        </View>
        <Button
          title="Add to list"
          onTap={() => onTap({ ...habit, id: Math.random() })}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontFamily: "Popping-Regular",
    backgroundColor: "#f7edf5",
  },

  categories: {
    backgroundColor: "#e2e5ef",
  },
});
