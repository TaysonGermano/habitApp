import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { useFonts } from 'expo-font';

// app data
import categories from "./data/categories";

// components
import Title from "./component/Title";
import HabitCategory from "./component/HabitCategory";
import Button from "./component/Button";
import HabitList from "./component/HabitList";
import AddHabits from "./component/AddHabits";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const [showAddHabit, setShowAddHabit] = useState(false);

  const [modalData, setModalData] = useState();

  const [list, setList] = useState([]);

   const [fontsLoaded] = useFonts({
     "Popping-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
     "Popping-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
   });
   

  function addHabit(habbit) {
    setList((curr) => [...curr, habbit]);
    setShowAddHabit(false);
  }

  function showList(habit) {
    setShowModal(true);

    setModalData({
      name: habit,
      list: list.filter((d) => d.category === habit),
    });
  }

  function closeModal() {
    setShowModal(false);
  }

  if (!fontsLoaded){
    return <Text>Loading</Text>
  }
    return (
      <>
        <StatusBar style="dark" />
        <View style={styles.container}>
          <View style={{ marginBottom: 30 }}>
            <Title text="Choose habit" />
            <Text style={styles.appText}>
              Choose a habit category to see your habits list or add habit
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
            <Button title="Add habit" onTap={() => setShowAddHabit(true)} />
          </View>
          <HabitList
            data={modalData?.list}
            title={modalData?.name}
            show={showModal}
            onTap={closeModal}
          />
          <AddHabits
            componentStyles={styles.container}
            show={showAddHabit}
            onTap={addHabit}
          />
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
    fontFamily: "Popping-Regular",
  },

  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginBottom: 20,
  },
});
