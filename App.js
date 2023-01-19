import React, {useState} from "react";
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import Modal from "./src/components/Modal";
import AddItem from "./src/components/AddItem";

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [list, setList] = useState([])
  const [itemSelected, setItemSelected] = useState('')
  const [modalVisible, setModalVisible] = useState(false)

  const onHandleChangeItem = text => {
    setTextItem(text)
  }

  const addItem = () => {
    setList(prevState => [...prevState, textItem])
    setTextItem('')
  }

  const handleModal = (item) => {
    setItemSelected(item)
    setModalVisible(true)
  }

  const renderItem = ({item}) => {
    return (
      <View style={styles.renderItemStyle}>
        <Text>{item}</Text>
        <Button title="Edit" onPress={() => handleModal(item)} />
      </View>
    )
  }

  const onHandleDelete = (item) => {
    setList(prevState => prevState.filter(element => element !== item))
    setModalVisible(!modalVisible)
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.tittle}>Shopping List</Text>
        <AddItem
          onChange={onHandleChangeItem}
          textValue={textItem}
          onAddItem={addItem} 
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={list}
          keyExtractor={item => item.id}
          renderItem={renderItem} 
        />
      </View>
      <Modal 
        isVisible={modalVisible} 
        actionDeleteItem={() => onHandleDelete(itemSelected)}
        itemSelected={itemSelected}
        onDismissModal={() => setModalVisible(false)} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e3f5c',
  },
  titleContainer: {
    height: 200,
    padding: 50,
    paddingTop: 80,
    backgroundColor: '#2e3f5c',
  },
  tittle: {
    marginBottom: 30,
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
  },
  listContainer: {
    flex: 2,
    marginHorizontal: 30,
    marginTop: 40,
  },
  renderItemStyle: {
    flexDirection: 'row',
    height: 60,
    marginBottom: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'white',
    shadowOpacity: 0.3,
    shadowOffset: { width:0, height: 2},
    shadowRadius: 6,
    elevation: 3,
  }
});
