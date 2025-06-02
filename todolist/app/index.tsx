import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./index.style";
import Header from "../Components/Header/Header";
import CardTodo from "../Components/Cards/CardTodo";

const index = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Allez au cours", IsCompleted: true },
    { id: 1, title: "Faire du sport", IsCompleted: false },
    { id: 1, title: "Réviser React", IsCompleted: true },
    { id: 1, title: "Sortir en couple", IsCompleted: false },
    { id: 1, title: "😂😂😂😂😂😂", IsCompleted: true },
    
  ]);

  function renderTodoList() {
  return todoList.map((todo) => (
    <View style={s.cardItems} key={todo.id}>
      <CardTodo todo={todo} />
    </View>
  ));
}

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header />
          </View>
          <View style={s.body}>
            {/* <CardTodo todo={todoList[0]} /> */}
            <ScrollView> {renderTodoList()}</ScrollView>
            
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
};

export default index;
