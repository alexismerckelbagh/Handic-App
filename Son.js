import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'



class Son extends React.Component{
  _onPressButton() {
    alert('Déclenchement du son')
  }
    render(){
        
        return(
            <View >
            
            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                  <Text>      Son       </Text>
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
      backgroundColor: "purple",
      padding: 10,
      borderWidth:1,
      fontSize:20,
      borderRadius:10,
      width:1000,
      height:50,
    },
    
  });

export default Son