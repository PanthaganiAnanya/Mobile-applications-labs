import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My App</Text>
    </View>
  );
};

export default Header;