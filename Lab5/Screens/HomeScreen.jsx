import React from 'react';
import { SafeAreaView, Button} from 'react-native'; 
import MainLayout from '../Layouts/MainLayout'; 
import ToDoList from '../components/ToDoList';

const HomeScreen = ({ navigation }) => {
  const tasks = ["Do laundry", "Go for a walk", "Walk the dog"];

  return (
    <MainLayout>
      <SafeAreaView>
        <ToDoList tasks={tasks} /> 
        <Button
          title="Go to About"
          onPress={() => navigation.navigate("About")}
        />
      </SafeAreaView>
    </MainLayout>
  );
}

export default HomeScreen;
