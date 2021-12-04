import * as React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'
import Azure from './Azure'
import Settling from './Settling'

class Affichage extends React.Component{
    render(){
        
        return(
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    Bienvenue sur la page d'accueil de HandicApp
                </Text>
                <Azure/>   
            </View>
        )
        
    }
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        
    },
    paragraph:{
            margin: 24,
            marginTop: 0,
            fontSize: 20,
            fontWeight: 'bold',
            borderColor: '#000001',
            borderWidth: 1,
            backgroundColor: 'skyblue',
            borderRadius:10,
            color:'black',
    },
    

})

export default Affichage