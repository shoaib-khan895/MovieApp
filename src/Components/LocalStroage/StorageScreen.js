import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
  } from 'react-native';
  import React, {useState} from 'react';
  import AsyncStorage from '@react-native-async-storage/async-storage';
import Styles from '../../Styles';


const StroageScreen = () => {
    
    const [inputBoxValue, setInputBoxValue] = useState('');
  
    const [storageDataList, setStorageDataList] = useState('');
  
    const addItemToList = async () => {
      try {
        await AsyncStorage.setItem('itemList', inputBoxValue);
        setInputBoxValue('');
  
        await getItemList();
  
        alert('Data Is Added');
      } catch (err) {
        console.log(err);
      }
    };
  
    const getItemList = async () => {
      try {
        const data = await AsyncStorage.getItem('itemList');
        setStorageDataList(data);
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <View style={Styles.container}>
        <TextInput
          style={Styles.inputBox}
          value={inputBoxValue}
          placeholder="Enter Data"
          onChangeText={value => setInputBoxValue(value)}
        />
  
        <TouchableOpacity
          style={Styles.addButton}
          onPress={() => addItemToList()}>
          <Text style={{color: '#fff'}}>Add</Text>
        </TouchableOpacity>
  
        <Text>Your Data is {storageDataList}</Text>
      </View>
    );
  }
  
  

export default StroageScreen;



  
