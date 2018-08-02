import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import { StyleSheet, ImageBackground, View, Text, Image, KeyboardAvoidingView, ActivityIndicator,TouchableOpacity, } from 'react-native';
import { Button } from 'react-native-elements';
//import * as firebase from "firebase";
import {StackNavigator} from 'react-navigation';

import UserInput from './UserInput';

import logoImg from '../../Images/logo.png';
import usernameImg from '../../Images/username.png';
import passwordImg from '../../Images/password.png';
import eyeImg from '../../Images/eye_black.png';
import bgSrc from '../../Images/wallpaper.png';

export default class Wallpaper extends React.Component {
  constructor(){
    super();
    this.state = {
      email: "",// user's email
      password: "", // user's password
    }
  };//end of constructor
    render() {
       //const { navigate } = Walpaper.props.navigation;
        //console.log("Props: " + this.props.navigation);
        return (

          <ImageBackground
            style = { styles.picture }
            source = { bgSrc }>
            <View style={styles.overlay} />
                <View style = { styles.container } >
                    <Image source = { logoImg } style = { styles.image }/>
                </View >
                <View behavior = "padding"
                    style = { styles.containerForm } >
                    <UserInput source = { usernameImg }
                    placeholder = "Username"
                    autoCapitalize = { 'none' }
                    returnKeyType = { 'done' }
                    autoCorrect = { false }/>
                    <UserInput source = { passwordImg }
                    placeholder = "Password"
                    returnKeyType = { 'done' }
                    autoCapitalize = { 'none' }
                    secureTextEntry = {true}
                    autoCorrect = { false }/>
                </View>
                <View style = { styles.container } >
                <Button
                  title="Sign In"
                  titleStyle={{ fontWeight: "700" }}
                  buttonStyle={{
                    backgroundColor: "rgb(30,144,255)",
                    width: 300,
                    height: 45,
                    borderColor: "transparent",
                    borderWidth: 0,
                    borderRadius: 30
                  }}
                  containerStyle={{ marginTop: 20 }}
                  onPress={()=> {this.props.navigation.navigate("Status")}}
                />
                </View>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    picture: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
    container: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 250,
        height: 158,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        backgroundColor: 'transparent',
        marginTop: 20,
    },
    containerForm: {
        flex: 1,
        alignItems: 'center',
    },
    btnEye: {
        position: 'absolute',
        top: 55,
        right: 28,
    },
    iconEye: {
        width: 25,
        height: 25,
        tintColor: 'rgba(0,0,0,0.2)',
    },
    overlay: {
    position: 'absolute',
     top: 0,
     left: 0,
     right: 0,
     bottom: 0,
     backgroundColor: 'rgba(0,0,0,0.3)'
   }
});
