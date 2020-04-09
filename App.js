import React { useState } from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Header from './components/Header';
import { uuid } from 'uuidv4';

// state represents the parts of the app that can change or are dynamic.
// functional component with hooks - useState hook
const App = () => {
  // here is the state - the piece of state is called items - setItems is the function to manipulative the state
  const [items, setItems] = useState ([
    {id: uuid(), text: '1 Hour React Learning'},
    {id: uuid(), text: '30 minutes reading Coders Handbook'},
    {id: uuid(), text: 'Run 3 miles'},
    {id: uuid(), text: 'Make Bed'},
  ])
  
  return (
    // flex on react is set by columns.  Flex in CSS is typically set by rows when working out React Native
    <View style={styles.container}>
      <Header title="List of Tasks" />
      <Text style={styles.h1}>Hello World</Text>
      <Text style={styles.text}>Here is the text line 1</Text>
      <Text style={styles.text}>Here is line 2</Text>
      <Text style={styles.text}> line 3</Text>
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
