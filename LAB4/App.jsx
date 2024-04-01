import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ToDoForm from "./ToDoForm";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, taskText]);
  };

  return (
    <View>
      <Text>To-Do List</Text>
      <ToDoForm addTask={addTask} />
      <View>
        {tasks.map((task, index) => (
          <Text key={index}>{task}</Text>
        ))}
      </View>
    </View>
  );
};

export default App;