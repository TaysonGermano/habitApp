import React, { useContext } from "react";
import { FlatList, Pressable, Text, View, StyleSheet } from "react-native";

// data
import categories from "../data/categories";
// context
import { AppContext } from "../context/AppContext";

// components
import Button from "./Button";
import Title from "./Title";

export default function HabitList({ navigation, route }) {
  const { list } = useContext(AppContext);

  function getData() {
    const data = list.filter((d) => d.category === route.params.category);
    return data;
  }

  return (
    <View>
      <Title text={`${route.params.category} list ...`} />
      <View style={styles.habitList}>
        <FlatList
          data={getData()}
          renderItem={(itemData) => (
            <Pressable style={styles.listItem}>
              <Text style={{ fontSize: 16, fontFamily: "Popping-Regular" }}>
                {categories.find((d) => d.name === itemData.item.category).icon} {itemData.item.name}
              </Text>
            </Pressable>
          )}
          keyExtractor={(item, index) => index}
        />
      </View>
      <View>
        <Button title="Go back" onTap={() => navigation.goBack()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  habitList: {
    height: "80%",
    marginBottom: 20,
  },

  listItem: {
    marginBottom: 10,
    backgroundColor: "#fcf8f5",
    padding: 8,
    borderRadius: 5,
  },
});
