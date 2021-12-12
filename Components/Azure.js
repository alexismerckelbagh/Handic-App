import React from "react";
import azure from "../assets/azure.png"
import { View, Text, StyleSheet, Image } from 'react-native'

const Azure = () =>{
    return (
        <View>
            <Image source={azure} style={styles.image}/>
        </View>
    
       
    )
}
const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 120,
        borderRadius:10,
      }
})

export default Azure