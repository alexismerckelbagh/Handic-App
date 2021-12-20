import React from 'react';
import { StyleSheet, Text, View,Button, Image} from 'react-native';
import mic from '../assets/mic.png';


const fetchApiCall = () => {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": "7d3ebdc961msh8a33dd1b0373377p1ea294jsn42aac90b7e56"
	}
})
.then(response => {
	return response.json();
})
.then(json=>{
  alert(JSON.stringify(json));
})
.catch(err => {
	console.error(err);
});

}

export default function Micro() {
  
  
  return (
    <View>
        <Button  title='Micro' onPress={()=>(fetchApiCall())}/>
        <Image source={mic} style={styles.image}/>      

    </View>

  
  );
}
const styles = StyleSheet.create({
 
  button: {
    marginTop:200,
    alignItems: "center",
    backgroundColor: "red",
    padding: 10,
    borderWidth:1,
    fontSize:20,
    borderRadius:10,
    width:1000,
    height:50,
  },
  image: {
    width: 200,
    height: 220,
    alignItems:'center',
    marginTop:100,
    marginLeft:100,

  },
  
});


