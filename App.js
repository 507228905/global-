/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  Text,
  View
} from 'react-native';

import GloblCommon from './globalComponent/commonGlobal'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
import By from './button'
import MODle from './brandAndBranchFilters';
export default class App extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      viseable:true,

    }

  }

  render() {
    

    return (
      <View style={styles.container}>
       
      <MODle modalVisible = {this.state.viseable} callBack = {
        
        (item)=>{console.log(item)
        
        }
      
      }/>
        <TouchableOpacity onPress = {()=>{
          this.setState({
            viseable:true,
          })
        }}>

       
        <Text style = {{fontSize:14}}>开会点击</Text>

        <MyButtom  titlt = '向才华'/>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
