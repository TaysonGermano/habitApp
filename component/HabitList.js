import React from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  View,
  StyleSheet,
} from "react-native";

// data
import categories from "../data/categories";
// components
import Button from "./Button";
import Title from "./Title";

export default function HabitList({ title, data, show, onTap }) {
  return (
    <Modal visible={show} animationType="slide">
      <View style={styles.container}>
        <Title text={`${title} list ...`} />
        <View style={styles.habitList}>
          <FlatList
            data={data}
            renderItem={(itemData) => (
              <Pressable style={{ marginBottom: 10 }}>
                <Text style={{ fontSize: 16 }}>
                  {categories.find((d) => d.name === title).icon}{" "}
                  {itemData.item.name}
                </Text>
              </Pressable>
            )}
            keyExtractor={(item, index) => index}
          />
        </View>
        <View>
          <Button title="Go back" onTap={onTap} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    justifyContent:"center",
    backgroundColor: "#fff",
  },

  appTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  habitList: {
    height: "80%",
    marginBottom: 20,
  }
});
