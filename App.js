import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";

// context
import MainContext from "./context/AppContext";

// navigator
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// app data
import categories from "./data/categories";

// components
import Title from "./components/Title";
import HabitCategory from "./components/HabitCategory";
import Button from "./components/Button";
import HabitList from "./components/HabitList";
import AddHabits from "./components/AddHabits";

export default function App() {

  // fonts
  const [fontsLoaded] = useFonts({
    "Popping-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
    "Popping-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
  });

  // main container
  function Container({ children }) {
    return <View style={styles.container}>{children}</View>;
  }

  function HomeScreen({ navigation }) {
    const showAddHabitModal = () => {
      navigation.navigate("Add");
    };

    const showList = (title) => {
      navigation.navigate("List", {
        category: title,
      });
    };

    return (
      <>
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
          <Button title="Add habit" onTap={showAddHabitModal} />
        </View>
      </>
    );
  }

  if (!fontsLoaded) {
    return <Text>Loading</Text>;
  }

  const Stack = createNativeStackNavigator();

  return (
    <MainContext>
      <Container>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            // removes the header and style
            screenOptions={{
              headerShown: false,
              header: () => null,
              contentStyle: { backgroundColor: "white" },
            }}
          >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Add" component={AddHabits} />
            <Stack.Screen name="List" component={HabitList} />
          </Stack.Navigator>
        </NavigationContainer>
      </Container>
    </MainContext>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    paddingBottom: 0,
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
