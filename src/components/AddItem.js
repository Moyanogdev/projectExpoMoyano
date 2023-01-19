import React from 'react';
import { StyleSheet, TextInput , View , Button } from 'react-native';


const AddItem = ({ onChange, textValue, onAddItem }) => {
  return (
    <View style={styles.inputContainer}>
        <TextInput 
            placeholder='Write your product' 
            style={styles.addItemInput}
            onChangeText={onChange}
            value={textValue} 
        />
        <Button title='ADD' onPress={onAddItem} />
    </View>
  )
}

export default AddItem

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingBottom: 20,
      },
      addItemInput: {
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10, 
        padding:10, 
        width: 200,
        shadowColor: 'black',
        shadowOpacity: 0.3,
        shadowOffset: { width:0, height: 2},
        shadowRadius: 6,
      },
})