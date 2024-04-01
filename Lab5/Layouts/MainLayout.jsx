
import React from 'react';
import { View } from 'react-native';
import Header from './Header';
import Footer from './Footer';


const MainLayout = ({ children }) => {
  return (
    <View style={styles.container}>
      <Header />
      {children}
      <Footer />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
};

export default MainLayout;