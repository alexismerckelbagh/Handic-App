import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


class Menu extends React.Component{
    render(){
        const title = "Menu"
        return(
            <View style ={styles.cadre}>
                <Text>{title}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cadre:{
        

        fontSize: 20,
        fontWeight: 'bold',
        borderColor: '#000001',
        borderWidth: 1,
        backgroundColor: 'skyblue',
        borderRadius:10,
        

    }

})

export default Menu