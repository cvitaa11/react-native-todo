import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "smaraj budu", key: "3" },
  ]);

  const addItem = (text) => {
    setTodos((prevTodos) => {
      return [{ text, key: Math.random().toString() }, ...prevTodos];
    });
  };

  const deleteItem = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((x) => x.key !== key);
    });
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddItem addItem={addItem} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteItem={deleteItem} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
