import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import Timeline from 'react-native-timeline-listview';

import Swiper from 'react-native-swiper';
import hajj1 from '../../Images/hajj1.jpg';
import hajj2 from '../../Images/hajj2.jpg';
import hajj3 from '../../Images/hajj3.jpg';

const styles = StyleSheet.create({
  wrapper: {
    height: 200,
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img:{
    height: 275,
    width: 420,
  },
  container: {
    flex: 1,
    padding: 20,
		paddingTop:65,
		backgroundColor:'white'
  },
  list: {
    flex: 1,
    paddingTop:15,
  },
  overlay: {
   top: 0,
   left: 0,
   right: 0,
   bottom: 0,
   paddingLeft: 10,
   paddingTop: 10,
   paddingRight:10,
   paddingBottom:10,
   backgroundColor: 'rgba(255,255,255,.4)'
 }
})

export default class Schedule extends Component {
  constructor(){
    super()
    this.onEndReached = this.onEndReached.bind(this)
    this.renderFooter = this.renderFooter.bind(this)
    this.onRefresh = this.onRefresh.bind(this)

    this.day1 = [
      {time: '09:00', title: 'Hotel - Mina'},
      {time: '10:45', title: 'Mina - Hotel'},
      {time: '12:00', title: 'Mina'},
    ]

    this.state = {
      isRefreshing: false,
      waiting: false,
      day1: this.day1
    }
  };

  onRefresh(){
    this.setState({isRefreshing: true});
    //refresh to initial data
    setTimeout(() => {
      //refresh to initial data
      this.setState({
        data: this.data,
        isRefreshing: false
      });
    }, 2000);
  }

  onEndReached() {
    if (!this.state.waiting) {
        this.setState({waiting: true});

        //fetch and concat data
        setTimeout(() => {
        }, 2000);
    }
  }

renderFooter() {
    if (this.state.waiting) {
        return <ActivityIndicator />;
    } else {
        return <Text>~</Text>;
    }
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <View style={styles.wrapper}>
        <Swiper style={styles.wrapper}>
          <View style={styles.slide1}>
            <Image source = { hajj1 }  style={styles.img}/>
          </View>
          <View style={styles.slide2}>
            <Image source = { hajj2 } style={styles.img}/>
          </View>
          <View style={styles.slide3}>
            <Image source = { hajj3 } style={styles.img}/>
          </View>
        </Swiper>
        </View>
        <View style={{backgroundColor:'rgba(30,144,255,0.7)',}}>
          <View style={styles.overlay}>
          <Text style={{color: 'white', fontSize: 27, fontWeight:'bold', paddingLeft: 10}}>Day 1 - 8th of Dhu'l-Hijjah</Text>
        </View>
        </View>
    <View style={{flex: 1, paddingLeft: 10,  backgroundColor: 'white', paddingTop: 15}}>

      <Timeline
        style={styles.list}
          data={this.state.day1}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'rgba(114, 162,192, 0.7)', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5},
            refreshControl: (
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
              />
            ),
          }}
          innerCircle={'dot'}
        />
    </View>
    <View style={{backgroundColor:'rgba(30,144,255,0.7)', paddingLeft: -10}}>
      <Text style={{color: 'white', fontSize: 27, fontWeight:'bold', paddingLeft: 10}}>Day 1</Text>
    </View>
<View style={{flex: 1, paddingLeft: 10,  backgroundColor: 'white'}}>

  <Timeline
    style={styles.list}
      data={this.state.day1}
      circleSize={20}
      circleColor='rgb(45,156,219)'
      lineColor='rgb(45,156,219)'
      timeContainerStyle={{minWidth:52, marginTop: -5}}
      timeStyle={{textAlign: 'center', backgroundColor:'rgba(114, 162,192, 0.7)', color:'white', padding:5, borderRadius:13}}
      descriptionStyle={{color:'gray'}}
      options={{
        style:{paddingTop:5},
        refreshControl: (
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this.onRefresh}
          />
        ),
        renderFooter: this.renderFooter,
        onEndReached: this.onEndReached
      }}
      innerCircle={'dot'}
    />
</View>
    </View>
    );
  }
}
