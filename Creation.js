import React from "react";
import creation from '../assets/creation.png'
import { View,TextInput, Image, flexDirections , TouchableOpacity, StyleSheet, Text} from 'react-native'

class Creation extends React.Component{
  _onPressButton() {
    alert('Mode création')
  }
    render(){
        
        return(
            <View >
            
            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                  <Text>   Creation   </Text>
                  <Image source={creation} style={styles.image}/>
              </TouchableOpacity>

          </View>
        )
    }
}


  const styles = StyleSheet.create({
    
    button: {
      alignItems: "center",
      backgroundColor: "skyblue",
      padding: 10,
      borderWidth:1,
      fontSize:20,
      borderRadius:10,
    },
    image: {
        width: 25,
        height: 25,

      }
    
  });

export default Creation