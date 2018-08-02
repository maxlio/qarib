import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import { StyleSheet, ImageBackground, View, Text, Image, KeyboardAvoidingView, ActivityIndicator,TouchableOpacity, } from 'react-native';
import { Button, Header,  Icon} from 'react-native-elements';
import MapView from 'react-native-maps';
import { NavigationActions } from 'react-navigation';

import greenImage from '../../Images/green.png';
import redImage from '../../Images/red.png';
import yellowImage from '../../Images/yellow.jpg';
import destImage from '../../Images/jamarat.jpg';

import qarib from '../../Images/QARIB.png';

export default class Wallpaper extends Component {
    render() {
        return (
            <View>
           <View style={{flex: 1, backgroundColor: 'white', position: 'absolute', zIndex: 0}}>
            <View>
               <ImageBackground source = { greenImage } style = { styles.image }>
                   <View style={{paddingTop: 20, paddingLeft: 10, alignItems: 'flex-start'}}>
                       <TouchableOpacity onPress={()=>this.moveToAddNewCustomer()}>
                           <Icon
                               name='menu'
                               type='material-community'
                               size={30}
                               color='white'/>
                       </TouchableOpacity>
                   </View>
                 <View style = {styles.status}>
                   <Image style={styles.destImage} source = {destImage}/>
                   <View style={{padding: 20}}>
                   <Text style={styles.textStatus}> The Jamarat </Text>
                   <Text style={{color:'white'}}> You should be <Text style={{color:'green', fontWeight:'bold'}}>MOVING</Text> now!</Text>
                 </View>
                 </View>

               </ImageBackground>
            </View>
            <View style={{flex: 1, flexDirection: 'row'}}>
               <View style={styles.view1}>
                   <Icon
                       name='clock-outline'
                       type='material-community'
                       size= {35}
                       color='#696969' />
                       <View style={{paddingTop: 13}}>
                           <Text style={{textAlign: 'center', paddingLeft: 13}}>Reaching Before</Text>
                           <Text style={{color: 'black', fontSize: 18, fontWeight:'bold', textAlign: 'center'}}> 12:45 PM </Text>
                       </View>

               </View>
               <View style={styles.view2}>
                   <Icon
                       name='progress-clock'
                       type='material-community'
                       size= {35}
                       color='#228B22' />
                       <View style={{paddingTop: 13, paddingLeft: 5}}>
                           <Text style={{textAlign: 'center'}}>Reaching At</Text>
                           <Text style={{color: '#228B22', fontSize: 18, fontWeight:'bold', textAlign: 'center'}}> 12:30 PM</Text>
                       </View>
               </View>
            </View>
            <View style ={styles.containerMap}>
               <MapView
                  style={styles.map}
                  region={{
                     latitude: 21.6169462,
                     longitude: 39.1564955,
                     latitudeDelta: 0.015,
                     longitudeDelta: 0.0121,
                  }}
                  >
       </MapView>
     </View>
         </View>
         <View style={{ position: 'absolute', zIndex: 1 }}>
            <View style={{marginTop: 253, marginLeft: 170}}>
                <TouchableOpacity onPress={()=>this.moveToAddNewCustomer()}>
                    <Icon
                        raised
                        name='map-marker'
                        type='font-awesome'
                        size={20}
                        color='red'/>
                </TouchableOpacity>



            </View>
    </View>
</View>



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
        width: '100%',
        height: 200,
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
  },
  containerMap: {
   height: 375,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
 destImage:{
   height: 90,
   width: 90,
   borderRadius: 50,
   borderColor: 'white',
   borderWidth: 0.75,
 },
 status: {
   padding: 30,
   flex: 1,
   flexDirection: 'row',
 },
 textStatus: {
   color: 'white',
   fontWeight: 'bold',
   fontSize: 20
 },
 view1:{
     width: '42%',
     height: 80,
     backgroundColor: '#f0f8ff',
     borderWidth: 0.75,
     borderColor:"transparent",
     flex: 1,
     flexDirection: 'row',
     padding: 5
 },
 view2:{
     height: 80,
     backgroundColor: '#f0ffff',
     borderWidth: 0.75,
     borderColor:"transparent",
     flex: 1,
     flexDirection: 'row',
     padding: 5
 },
 viewZ: {
 },
 shadow: {
       shadowColor: 'black',
       shadowOpacity: 0.5,
       shadowRadius: 5,
       // iOS
       shadowOffset: {
           width: 0,            // These can't both be 0
           height: 1,           // i.e. the shadow has to be offset in some way
       },
       // Android
       shadowOffset: {
           width: 0,            // Same rules apply from above
           height: 1,           // Can't both be 0
       },
   }
});
