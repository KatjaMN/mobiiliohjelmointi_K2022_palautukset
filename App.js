import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Button, TextInput } from 'react-native';
import { Alert } from 'react-native';

export default function App() {


  const buttonPressedAdd = () => { Alert.alert('')};
  const buttonPressedSubtract = () => { Alert.alert('')};

  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');

  const getResult = (text1, text2) => {
    return text1 + text2
  };

  //const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.container}>
      <Text>Result {getResult}</Text>
      <TextInput style={styles.input} onChangeText={text1 => setText1(text1)} value={text1}/>
      <TextInput style={styles.input} onChangeText={text2 => setText2(text2)} value={text2}/>
      <Button onPress={buttonPressedAdd} title='+'/>
      <Button onPress={buttonPressedSubtract} title='-'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:100, 
    borderColor: 'gray', 
    borderWidth:1,
  },

});
