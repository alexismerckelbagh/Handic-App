import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Menu from '../Screen/Menu.js'
import Scan from '../Screen/Scan.js'
import Micro from "../Screen/Micro.js";
import Map from "../Screen/Map.js";
import Speaker from "../Screen/Speaker.js";
import Liseuse from "../Screen/Liseuse.js";
import Login from "../Screen/Login.js";


const screens = {
  Login:{
    screen:Login
  },
  Menu:{
    screen:Menu
  },
  Scan:{
    screen:Scan
},
 Micro:{
   screen:Micro
 },
 Map:{
  screen:Map
},
Speaker:{
  screen:Speaker
},
Liseuse:{
  screen:Liseuse
},
}


const Navigator = createStackNavigator(screens);

export default createAppContainer( Navigator)