import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { withNavigation } from "react-navigation";



class Son extends React.Component{
  constructor(props) {
    super(props);
  }
    render(){
        
        return(
            <View >
            
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Speaker')}>
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

export default withNavigation(Son)