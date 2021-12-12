import React from 'react'
import { View,TextInput, Image, flexDirections , TouchableOpacity, StyleSheet, Text} from 'react-native'


class Recherche extends React.Component{
    _onPressButton() {
        alert('Recherche effectuée')
      }
    render(){
        return(
            <View>
                <TouchableOpacity style={styles.button} onPress={this._onPressButton}>
                    <Text>   Rechercher   </Text>
                    <TextInput placeholder='Module souhaité'  style = {{borderWidth:1, backgroundColor:'white',borderRadius:10}}/>
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = {
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5,
      borderRadius:10,
    },
    button: {
        alignItems: "center",
        backgroundColor: "skyblue",
        padding: 10,
        borderWidth:1,
        fontSize:20,
        borderRadius:10,
      },
  }
export default Recherche