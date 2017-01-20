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
  Image,
  ListView
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

const REQUEST_URL = 'https://api.douban.com/v2/movie/top250';
  class aa  extends React.Component{
    constructor(props ){
      super(props);
      // let movies=[
      //   {title:'萧克的救赎'},
      //   {title:'这个杀手不太冷a'},
      //   {title:'这个杀手不太冷a'},
      //   {title:'阿甘正传0'},
      //   {title:'霸王别姬'},
      //   {title:'美丽人生'}
      // ];

      // let dataSource =
      this.state={
        movies:new ListView.DataSource({
          rowHasChanged:(row1,row2) => row1 !== row2
        })
      };
      this.fetchData();
    //  console.log(this.state.movies);
    }

   fetchData(){
     fetch(REQUEST_URL)
     .then(response => response.json())
     .then(responseData => {
    //   console.log(responseData);
    this.setState({
      movies:this.state.movies
      .cloneWithRows(responseData.subjects)
    });
     })
     .done();

   }
    render(){
      return(
      <View style={styles.container
      }>
     <ListView
      dataSource={this.state.movies}
      renderRow={
        movie=><Text style={styles.item}>{movie.title}</Text>
      }
     />

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
//     backgroundColor:'#fff',
//     borderWidth:1,
// flex:1,
//     borderColor:'rgb(46, 28, 117)',
    margin:6,
    fontSize:26,
    color:'red'
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
