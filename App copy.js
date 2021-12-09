import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
   
   
    <View style={styles.container}>
      <StatusBar backgroundColor="#F3D413" />
      <View style={styles.menu} ></View>
      <View style={styles.location} ></View>
      <View style={styles.filter} ></View>
      <View style={styles.cardFilter} ></View>
      <View style={styles.cardProducts} ></View>
    </View >
    
    
  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    
  },
  menu: {
    marginTop:"7%",
    backgroundColor: "red",
     height: "9%", 
     width: "100%",
  },
 location: {
    backgroundColor: "#FEDB15",
     height: "9%", 
     width: "100%",
  
 },
 filter:{
  backgroundColor: "green",
  height: "8%", 
  width: "100%",

 },
 cardFilter:{
  
    backgroundColor: "blue",
    height: "25%", 
    width: "100%",
  
   },

  
   cardProducts:{
  
      backgroundColor: "red",
      height: "48%", 
      width: "100%", 
     
 }


});
