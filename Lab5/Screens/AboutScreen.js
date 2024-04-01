import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = ({ navigation }) => {
    // ...
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>My To Do App</Text>
        <Text style={styles.name}>Your Name</Text>
        <Text style={styles.date}>{currentDate.toLocaleString()}</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    );
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    marginBottom: 10,
  },
  date: {
    fontSize: 16,
  },
});

export default AboutScreen;