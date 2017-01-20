/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
// import  React from 'react-native';
//
//
// let {
//   AppRegistry,
//     StyleSheet,
//   View,
//   Text,
// }=React;
class   HeaderText extends React.Component{
  render(){
    return(
      <Text style={styles.itemText}>
        {this.props.children}
      </Text>
    );
  }
}
  class aa  extends React.Component{
    render(){
      return(
      <View style={styles.container
      }>

    <Image style={styles.backgroundImage}
       source={{uri:'https://img3.doubanio.com/view/photo/photo/public/p2412095853.jpg'}}>
    <View   style={{backgroundColor:'rgba(123, 237, 100,0.5)',alignItems:'center'}}>
      <Text style={{color:'black',fontSize:26}}>
             世界大战
      </Text>
      <Text style={{color:'rgb(123, 237, 100)',fontSize:15}}>
        1000
      </Text>
    </View>
  </Image>

      </View>
      );
    }
  }


const styles = StyleSheet.create({
  image:{
    backgroundColor:'red',
    width:100,
    height:138,
    margin:6

  },
  backgroundImage:{
    flex:1,
    resizeMode:'cover'
  },
  container:{
  //  flexDirection:'row',
    backgroundColor:'#228ead',
    flex:1,
    // paddingTop:53,
    // justifyContent:'space-between'
    // justifyContent:'space-around',
    // alignItems:'center',
    // flexDirection:'row'
    //  margin:30,
    //
    // borderWidth:1,
    // // borderStyle:'dashed',
    // borderColor:'green',
    // borderRadius:20,
    // shadowColor:'yellow',
    // shadowOpacity:0.6,
    // shadowRadius:20,
    // shadowOffset:{
    //   height:10,
    //   width:10
  },
//   title:{
//     fontSize:26,
//     color:'#9c3a65',
//     textAlign:'center',
//     fontStyle:'italic',
//     letterSpacing:500,//字间距，安卓感觉没卵用。
//     lineHeight:33,
//     fontFamily:'helvetic Neue',
//     fontWeight:'900',
//     //textDecorationLine:'line-through'
// textDecorationLine:'underline',
// //textDecorationStyle:'dotted' dashed double
//   },
  item:{
    backgroundColor:'#fff',
    borderWidth:1,
flex:1,
    borderColor:'rgb(46, 28, 117)',
    margin:6
  },
  itemOne:{flex:2},
  itemTwo:{},
  itemThree:{},
  itemText:{
    fontSize:33,
    fontFamily:'helvetic Neue',
    fontWeight:'200',
    color:'rgb(52, 161, 63)',
    padding:30
  }





});

AppRegistry.registerComponent('reactLearn', () => aa);
