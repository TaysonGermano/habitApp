import React from 'react'
import { TextInput, View, Modal, StyleSheet } from 'react-native'

//component
import categories from '../data/categories'

//component
import Button from './Button';
import Title from './Title';

export default function AddHabits({ componentStyles, show, onTap }) {
  return (
    <Modal visible={show} animationType="slide">
      <View style={componentStyles}>
        <View style={{ marginBottom: 20 }}>
          <Title text="Add habit" />
          <TextInput style={styles.textInput} placeholder="Habit name" />
          <TextInput style={styles.textInput} placeholder="Habit description" />
          <TextInput style={styles.textInput} placeholder="Number of days" />
          <TextInput style={styles.textInput} placeholder="Category" />
          {/* <TextInput placeholder='habit description'/> */}
        </View>
        <Button title="Add to list" onTap={onTap} />
      </View>
    </Modal>
  );
}


const styles = StyleSheet.create({
  textInput: {
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: "#f7edf5",
  },
});