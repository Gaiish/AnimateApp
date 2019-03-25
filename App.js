/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Animated} from 'react-native';

import * as Animatable from 'react-native-animatable'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state={
    upAnim: new Animated.Value(2),
    animate: ''
  }

  render() {
    let {flexN, next, upAnim} = this.state

    return (
      <View style={{flex: 1}}>
        <Animated.View style={{...styles.container, flex: upAnim}}>
          <Text style={styles.welcome}>Welcome to React Native!</Text>
          <Text style={styles.instructions}>To get started, edit App.js</Text>
          <Text style={styles.instructions}>{instructions}</Text>
          <Button title='Go Back'
            onPress={()=>{
              Animated.timing(this.state.upAnim,
                {
                  toValue: 2,
                  duration: 1000
                }
              ).start()

              this.setState({animate: 'slideOutRight'})


            }}
          >
          </Button>
        </Animated.View>
        <Animatable.View
          animation={this.state.animate} 
          style={{...styles.container, flex:1, backgroundColor:'#000',}}>
          <Button title='Press me'
            onPress={()=>{
              Animated.timing(this.state.upAnim,
                {
                  toValue: 1,
                  duration: 1000
                }
              ).start()

              this.setState({animate: 'slideOutLeft'})
            }}
          >
          </Button>

        </Animatable.View>
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
