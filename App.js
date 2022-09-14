import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

// app data
import categories from "./data/categories"

// components
import Title from "./component/Title";
import HabitCategory from "./component/HabitCategory";
import Button from "./component/Button";
import HabitList from "./component/HabitList";
import AddHabits from "./component/AddHabits";

export default function App() {

  const [showModal, setShowModal] = useState(false)

  const [addHabit, setAddHabit] = useState(false)

  const [modalData, setModalData] = useState();

  const [list, setList] = useState([
    {
      id: Math.random(),
      name: "Hello",
    },
    {
      id: Math.random(),
      name: "Hello",
    },
  ]);


  function showList(habit) {
    setShowModal(true)

    setModalData({
      name: habit,
    })
  }

  function closeModal() {
     setShowModal(false);
  }


  return (
    <>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={{ marginBottom: 30 }}>
          <Title text="Choose habit" />
          <Text style={styles.appText}>
            Choose your daily habits, you can choose more than one
          </Text>
        </View>
        <View style={styles.categoriesContainer}>
          {categories.map((d, i) => (
            <HabitCategory
              key={i}
              title={d.name}
              image={d.icon}
              onTap={showList}
            />
          ))}
        </View>
        <View>
          <Button title="Add habit" onTap={() => setAddHabit(true)} />
        </View>
        <HabitList
          data={list}
          title={modalData?.name}
          show={showModal}
          onTap={closeModal}
        />
        <AddHabits componentStyles={styles.container} show={addHabit} onTap={() => setAddHabit(false)}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },

  appText: {
    color: "#ccc",
  },

  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 20,
  },
});
