import React, { useState } from 'react';
import {StyleSheet, Text, TouchableOpacity, SafeAreaView, TextInput} from 'react-native';

function LoginScreen({ navigation }){

  const showAlert = () =>{

    if(username=="Admin" && password=="admin" ){
      navigation.navigate('Admin')
    }
    else{
      navigation.navigate('Korisnik')
    }
  
  }

 const [username, setUsername] = useState('');
 const [password, setPassword ] = useState('');


  return (

    <SafeAreaView style={styles.container}>

      <TextInput style={styles.input} placeholder='Username' onChangeText={user => setUsername(user)}></TextInput>

      <TextInput style={styles.input} secureTextEntry placeholder='Password' onChangeText={pas => setPassword(pas)}></TextInput>

      <TouchableOpacity style={styles.button} onPress={showAlert}>
        <Text style={styles.text} >LOGIN</Text>
      </TouchableOpacity>

    </SafeAreaView>

    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#89cff0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor:'gray',
    borderWidth:0.5,
    borderRadius:20,
    padding: 14,
    margin: 10,
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#46b4e7",
    width: '60%',
    height: 55,
    padding: 14,
    borderRadius:20,
    margin: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  text: {
    color: "#4a4b44",
    fontSize: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default LoginScreen;
