/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useRef, useEffect } from 'react';
import type {Node} from 'react';
import {
  Alert, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View, Animated
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const FadeInView = (props) =>{

  const fadeAnim = useRef(new Animated.Value(0)).current
  useEffect(()=>{
    Animated.timing(fadeAnim,{toValue:1, duration: 10000}).start();
  }, [fadeAnim])

  return (
    <Animated.View style={{...props.style, opacity: fadeAnim}}>
      {props.children}
    </Animated.View>
  )
}


const App: () => Node = () => {

  console.log('调试')
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      {/* <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}> */}
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
      {/* </FadeInView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white'
  }
});

export default App;
