import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { withNavigation } from "react-navigation";




class Login extends React.Component {

    constructor(props) {
        super(props);
    }
  
    render () {
      return (
      <View style = {styles.container}>

          <View style={styles.inputView} >
              <TextInput  style={styles.inputText} placeholder="Email"  placeholderTextColor="#003f5c"/>
          </View>

          <View style={styles.inputView} >
              <TextInput  style={styles.inputText} placeholder="Mot de passe"  placeholderTextColor="#003f5c"/>
          </View>


          <View>
              <TouchableOpacity>
                  <Text style={styles.forgot}>Forgot Password?</Text>
              </TouchableOpacity>
          </View>

          <View >
               <TouchableOpacity style={styles.loginBtn} onPress={() => this.props.navigation.navigate('Menu')}>
                  <Text >LOGIN</Text>
               </TouchableOpacity>
          </View>

          <View >
               <TouchableOpacity style={styles.Inscription} >
                  <Text >Inscription</Text>
               </TouchableOpacity>
          </View>
  
      </View>
  
      );
    }
  }
  
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'lightblue',
      alignItems: 'center',
      justifyContent: 'center',

    },
    inputView:{
        
        marginBottom:5,
        width:200,
        backgroundColor:"white",
        height:25,
        justifyContent:"center",

      },
      inputText:{
        flex:1,
        color:"black",
        borderWidth:1,
      },
      forgot:{
        color:"black",
        borderRadius:25,
        fontSize:11,
        borderWidth:1,
        backgroundColor:"skyblue",
       
      },
      loginBtn:{
        width:200,
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10,
        borderWidth:1,
      },
      Inscription:{
        width:200,
        backgroundColor:"skyblue",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginBottom:10,
        borderWidth:1,
      }
    
  });
  
  export default withNavigation(Login)