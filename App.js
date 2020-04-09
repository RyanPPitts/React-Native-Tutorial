import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    // flex on react is set by columns.  Flex in CSS is typically set by rows when working out React Native
    <View style={styles.container}>
      <Header />
      <Text style={styles.h1}>Hello World</Text>
      <Text style={styles.text}>Hello World</Text>
      <Text style={styles.text}>Hello World</Text>
      <Text style={styles.text}> Hello World</Text>
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}}
        style={styles.img}
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
  text: {
    color: 'darkslateblue',
    fontSize: 30,
  },
  h1: {
    color: 'black',
    fontSize: 50,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
  },
});

export default App;
