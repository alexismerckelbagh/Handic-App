import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'



class Localisation extends React.Component{
  _onPressButton() {
    alert('Déclenchement de la localisation')
  }
    render(){
        
        return(
            <View >
            
            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                  <Text>Localisation</Text>
              </TouchableOpacity>

          </View>
        )
    }
}






const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "green",
      padding: 10,
      borderWidth:1,
      fontSize:20,
      borderRadius:10,
      width:1000,
      height:50,
    },
    
  });

export default Localisation