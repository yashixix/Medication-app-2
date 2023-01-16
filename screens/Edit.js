import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, KeyboardAvoidingView, TextInput, Button, Image } from "react-native";

const bg_image = require("../assets/background.jpg")
const icon_image = require("../assets/icon_img.png")


export default class EditScreen extends Component {
constructor(props){
  super(props)
  this.state = {
    name : ""
  }
}
  render() {
    return (
      <ImageBackground source={bg_image} style={styles.bgImage}>
<View style= {styles.upperContainer}>
<Image source={icon_image} style = {styles.IconStyle}/>
</View>

<View style={styles.lowerContainer} >
<TextInput style={styles.textInput}
placeholder = {"medicine name"}
placeholderTextColor = {"pink"}
onChangeText = {text => this.setState({name : text})}
/>
</View>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5653D4"
  },
  text: {
    color: "#ffff",
    fontSize: 30
  },

bgImage :{
  flex : 1,
  resizeMode : "cover"
 
},

upperContainer :{
  flex : 0.2,
  justifyContent : 'center',
  alignItems : 'center'
},

IconStyle : {
  width : 100,
  height : 100,
  resizeMode : "contain"
},

lowerContainer: {
  alignItems : 'center',
  justifyContent : 'center',
  marginTop : 20,

},

textInput : {
  width : 300,
  height : 50,
  borderRadius : 10,
  borderWidth : 3,
  fontSize : 20,
  textAlign : 'center',
  marginTop : 20
}
});
