import React, { useState } from 'react';
import { View, Text } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Task 1' },
    { id: 2, text: 'Task 2' },
    { id: 3, text: 'Task 3' }
  ]);

  const addTask = (text) => {
    const newTask = {
      id: Math.random(),
      text: text
    };
    setTasks([...tasks, newTask]);
  };

  return (
    <View>
      <Text>ToDoList</Text>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
    </View>
  );
}

export default App;