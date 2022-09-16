import React, { useState, useContext } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Pressable,
  Text,
  ScrollView
} from "react-native";

// context
import { AppContext } from "../context/AppContext";

import { ACTION } from "../context/action";

//component
import categories from "../data/categories";

//component
import Title from "./Title";


export default function AddHabits({navigation}) {

  const { dispatch } = useContext(AppContext);

  const [habit, setHabit] = useState();

  function handleChange(value) {
    setHabit(value);
  }

  function addHabit(category){
    dispatch({
      type: ACTION.add,
      payload: { id: Math.random(), name: habit, category },
    });
    
    navigation.goBack()
  }

  return (
    <View>
      <View style={{ marginBottom: 20 }}>
        <Title text="Add habit" />
        <TextInput
          onChangeText={handleChange}
          style={styles.textInput}
          placeholder="Habit name"
        />
        <Text style={{ marginBottom: 10, color: "#ccc" }}>Choose category</Text>
        <ScrollView>
          {categories.map((d, i) => (
            <Pressable
              key={i}
              style={({ pressed }) =>
                pressed
                  ? [styles.textInput, styles.categories, styles.pressed]
                  : [styles.textInput, styles.categories]
              }
              onPress={() => addHabit(d.name)}
            >
              <Text key={i}>{d.name}</Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    </View>
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

  pressed: {
    backgroundColor: "#f9ede6",
  },
});
