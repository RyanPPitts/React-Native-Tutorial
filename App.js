import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

// state represents the parts of the app that can change or are dynamic.
// functional component with hooks - useState hook
const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      text: '1 Hour React Tutorial',
    },
    {
      id: 2,
      text: '1 hour reading Coding Bible',
    },
    {
      id: 3,
      text: '3 Mile Jog',
    },
    {
      id: 4,
      text: 'Offerup Reselling',
    },
  ]);

  return (
    // flex on react is set by columns.  Flex in CSS is typically set by rows when working out React Native
    <View style={styles.container}>
      <Header title="List of Tasks" />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
      />
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
