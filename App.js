import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,ScrollView, SafeAreaView } from 'react-native';
import Menu from './Components/Menu';
import { Components } from 'react';
import Recherche from './Components/Recherche';
import Affichage from './Components/Affichage';
import Dictaphone from './Components/Dictaphone';
import Scanner from './Components/Scanner';
import Localisation from './Components/Localisation';
import Son from './Components/Son';
import Visionneuse from './Components/Visionneuse';
import Creation from './Components/Creation'
import Parametre from './Components/Parametre';



export default function App() {
  return (
    
  <View style={{backgroundColor:'lightblue', flex:1}}>

   
   <ScrollView>

        <View style={styles.param} flexDirection='row' >
            <Creation/>
            <Recherche/>
            <Parametre/>
        </View>

        <View style={styles.container}>
            <Affichage/>
            <StatusBar style="auto" />
        </View>

        <View style={styles.dictaphone}>
            <Dictaphone/>
      </View>

      <View style={styles.scanner}>
            <Scanner/>
      </View>

      <View style={styles.localisation}>
            <Localisation/>
      </View>

      <View style={styles.son}>
            <Son/>
      </View>

      <View style={styles.visionneuse}>
            <Visionneuse/>
      </View>

    </ScrollView>
    
</View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center'
  },
  param:{
    marginTop:50,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  search:{
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dictaphone: {
   
   
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
  },
  scanner: {
    
    
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
    
  },
  localisation: {

    
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
 
  },
  son: {
    
    
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
 
  },
  visionneuse: {
    
    
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode: 'center',
  
 
  },
});
