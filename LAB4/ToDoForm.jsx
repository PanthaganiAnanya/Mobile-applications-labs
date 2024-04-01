import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";

const ToDoForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, margin: 10 }}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button title="Add Task" onPress={() => addTask(taskText)} />
    </View>
  );
};

export default ToDoForm;