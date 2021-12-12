import React from 'react'
import { View,TextInput, Image, flexDirections , TouchableOpacity, StyleSheet, Text} from 'react-native'
import settlings from '../assets/settlings.png'


class Parametre extends React.Component{
  _onPressButton() {
    alert('Mode paramètres')
  }
    render(){
        
        return(
            <View >
            
            <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                  <Text>   Paramètres   </Text>
                  <Image source={settlings} style={styles.image}/>
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

export default Parametre