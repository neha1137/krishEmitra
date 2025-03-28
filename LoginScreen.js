import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

import firebase from "firebase";
//import RegisterScreen from "./Register"
//import Guidelines from "./Guidelines"


const appIcon = require("../logo.jpeg");


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
      email:"",
      password:""
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  signIn = async (email, password) => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                console.log('LoginScreen');
                this.props.navigation.navigate("Guidelines");
            })
            .catch(error => {
                Alert.alert(error.message);
            });
    };
  
  render(){
    return(
      <View style = {styles.container}>
       
        <View>
        <Text style = {styles.titleText}>KrishE Mitra</Text>
        <Text style = {styles.titleText}>Support Over Struggle</Text>

        <Image source={appIcon} style={styles.appIcon} />

        </View>
        <View>
        <Text style = {styles.subtitleText}>LOGIN </Text>
        </View>
        <View style = {styles.textInput}>
        <TextInput style={styles.enterText}
          placeholder = {"E M A I L"} 
          onChangeText={text => this.setState({ email: text })}
          placeholderTextColor={"white"}
          />
        </View>
        <View style = {styles.textInput}>
        <TextInput style={styles.enterText} 
          placeholder = {"P A S S W O R D"} 
          onChangeText={text => this.setState({ password: text })}
          placeholderTextColor={"white"}
          />
        </View>
        
        <View>
          <Text style = {styles.bText}>New User ? </Text>
          <TouchableOpacity  onPress={() =>
            this.props.navigation.navigate("RegisterScreen"
            )
          }>
          <Text style = {styles.tText}>  Sign Up </Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style = {styles.submitButton}
            onPress={() =>
                this.signIn(this.state.email,this.state.password)
                //this.props.navigation.navigate("Guidelines")
                
               // this.props.navigation.navigate("Guidelines")
            
            
            }
          >
          <Text>SUBMIT</Text>
          </TouchableOpacity>
        </View>
        
    </View>
      
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F77F00",
    alignItems: "center",
    justifyContent: "center",
  },
  enterText:{
    color:"white"
  },
  appIcon: {
    width: RFValue(280),
    height: RFValue(200),
    resizeMode: "contain",
    marginBottom: RFValue(20),
    marginLeft : RFValue(30)
  },
  titleText: {
    color: "#FFD700",
    textAlign: "center",
    fontSize: RFValue(35),
    marginBottom: RFValue(20),
    fontWeight : "bold"
  },
  subtitleText: {
    color: "white",
    textAlign: "center",
    fontWeight : "bold",
    fontSize: RFValue(30),
    marginBottom: RFValue(5)
  },
   textInput: {
     color: "white",
    width: RFValue(250),
    height: RFValue(50),
    padding: RFValue(10),
    marginTop: RFValue(20),
    borderColor: "brown",
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(20),
    
    backgroundColor: "#E34A27"
  },
    googleText: {
    color: "black",
    fontSize: RFValue(20),
    fontFamily: "Bubblegum-Sans"
  },
  cloudContainer: {
    flex: 0.3
  },
  bText: { 
    color:"black",
    width: RFValue(120),
    height: RFValue(30),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    marginBottom: RFValue(),
    marginTop : RFValue(10)
  },
  tText:{
    color : "blue",
    height: RFValue(30),
    fontStyle : "italic",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(30),
    marginBottom: RFValue(10)
  },
  submitButton: {
        backgroundColor:"yellow",
        textColor : "red",
        textAlign:"center",
        width:RFValue(140),
        height:RFValue(30),
        marginTop:RFValue(10),
        marginBottom: RFValue(20),
        marginHorizontal:RFValue(100),
        alignItems: "center",
        justifyContent: "center"
    }
  });