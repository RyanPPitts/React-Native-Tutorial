import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Header({title}) {
  return (
    <View>
      <Text> {title} </Text>
    </View>
  );
}

export default Header;
